import React from 'react';

import { connect } from 'react-redux';
import * as actions from 'actions';

import {SortableContainer, SortableElement, SortableHandle, arrayMove} from 'react-sortable-hoc';


//=====================================
const DragHandle = SortableHandle(() => <span>::</span>); // This can be any component you want


//=====================================
const SortableItem = SortableElement(({value}) => {
  return (
    <li>
      <DragHandle />
      {value}
    </li>
  );
});


//=====================================
const SortableList = SortableContainer( ({items}) => {
  return (
    <ul>
      {
      	items.map( (value, index) => {
			let uniqueKey = 'item-' + index;
			return (
				<SortableItem key={uniqueKey} index={index} value={value} />
			);
		})
      }
    </ul>
  );
});


//=====================================
export class Sorter extends React.Component {
	constructor (props) {
		super(props);
		this.onSortEnd = this.onSortEnd.bind(this);
		this.updateList = this.updateList.bind(this);
	}

	updateList(){
		if(this.props.order != null && this.props.order.length ) {
			
			return this.props.order;

		} else {
			let unordered = this.props.todos.map( (todo) => {
				return todo.text;
			});
			return unordered;
		}
	}

	componentWillMount() {
		var {dispatch} = this.props;
		dispatch(actions.checkOrder());
	}

  state = {
    sortList: this.updateList()
  }

  onSortEnd = ({oldIndex, newIndex}) => {
  	let {dispatch} = this.props;

    let sortList = this.updateList();

    // the sortable method
    let updatedArray = arrayMove(sortList, oldIndex, newIndex);

    dispatch(actions.startUpdateOrderSubmit(updatedArray));
    this.setState({
      sortList: updatedArray,
    });
  }

  render() {
  	var sortList = this.updateList();

    return (
    	<SortableList items={sortList} onSortEnd={this.onSortEnd} useDragHandle={true} />
    );
  }
}


//=====================================
export default connect(
	(state) => {
		//console.log(state);
		return state;
		// return {
		// 	todos: state.todos
		// };
	}
)(Sorter);