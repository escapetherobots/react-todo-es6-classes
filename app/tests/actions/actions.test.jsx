import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import firebase, {firebaseRef} from 'app/firebase/';

var expect = require('expect');
var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
	it('should generate search text action', () => {
		var action = {
			type: 'SET_SEARCH_TEXT',
			searchText: 'Something'
		};

		var res = actions.setSearchText(action.searchText);

		expect(res).toEqual(action);
	});

	//=================================================
	// TODO ACTION TEST
	it('should generate add todo action with text arg', () => {
		var action = {
			type: 'ADD_TODO',
			todo: {
				id: 12345,
				text: 'feed cat',
				completed: false,
				createdAt: 4000
			}
		};

		var res = actions.addTodo(action.todo);

		expect(res).toEqual(action);
	});

	
	


	//=================================================
	// TODO ACTION TEST

	it('should generate add todos action with array arg', () => {
		var todos = [
			{
				id: 123,
				text: 'get cat',
				completed: false,
				completedAt: undefined,
				createdAt: 33000
			},
			{
				id: 345,
				text: 'get dog',
				completed: false,
				completedAt: undefined,
				createdAt: 35000
			}
		];
		var action = {
			type: 'ADD_TODOS',
			todos: todos
		};

		var res = actions.addTodos(action.todos);
		expect(res).toEqual(action);
	});


	it('should toggle between showing completed action', () => {
		var action = {
			type: 'TOGGLE_SHOW_COMPLETED',
		};

		var res = actions.toggleShowCompleted();

		expect(res).toEqual(action);
	});


	it('should generate the toggle todo action', () => {
		var action = {
			type: 'UPDATE_TODO',
			id: 123,
			updates: {completed: false}
		};

		var res = actions.updateTodo(action.id, action.updates);

		expect(res).toEqual(action);
	});


	it('should generate login action object', () => {
		const action = {
			type: 'LOGIN',
			uid: '123abc'
		};

		const res = actions.login(action.uid);
		expect(res).toEqual(action);
	});

	it('should generate logout action object', () => {
		const action = {
			type: 'LOGOUT'
		};

		const res = actions.logout();

		expect(res).toEqual(action);
	})



	//================================================
	// TODO ACTION TEST

	describe('Tests with firebase todos', () => {
		var testTodoRef;
		var uid;
		var todosRef;

		//------------------
		// add item to firebase for testing
		beforeEach( (done) => {
			
			//add auth
			firebase.auth().signInAnonymously().then( (user) => {
				uid = user.uid;
				todosRef = firebaseRef.child(`users/${uid}/todos`);

				return todosRef.remove();
			}).then( () => {
				testTodoRef = todosRef.push();

				return testTodoRef.set({
					text: 'ztest 3000',
					completed: false,
					createdAt: 654654321
				});
			})
			.then( () => done() )
			.catch(done);
		});

		//------------------
		// once tested, remove item from firebase
		afterEach( (done) => {
			todosRef.remove().then( () => done() );
		});

		//run the start todos test
		it('should populate todos and dispatch ADD_TODOS', (done) => {
			const store = createMockStore(
				{
					auth: {
						uid: uid
					}
				}
			);
			const action = actions.startAddTodos();

			store.dispatch(action).then( () => {
				// getActions returns array of all actions that have been dispatched!!!
				const mockActions = store.getActions();
				expect(mockActions[0]).toInclude({
					type: "ADD_TODOS"
				});

				expect(mockActions[0].todos.length).toEqual(1);
				expect(mockActions[0].todos[0].text).toEqual('ztest 3000');

				done();

			}, done);
		});


		// run the actual test!
		it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
			const store = createMockStore(
				{
					auth: {
						uid
					}
				}
			);
			const action = actions.startToggleTodo(testTodoRef.key, true);

			store.dispatch(action).then( ()=> {
				const mockActions = store.getActions();
				expect(mockActions[0]).toInclude({
					type: 'UPDATE_TODO',
					id: testTodoRef.key,
				});

				expect(mockActions[0].updates).toInclude({
					completed: true
				});

				expect(mockActions[0].updates.completedAt).toExist();

				done();

			}, done);
		});


		// TODO ACTION ASYNC FIREBASE TEST WITH MOCK!
		// pass done, which indicates that it is assync test
		it('should create todo and dispatch ADD_TODO', (done) => {
			const store = createMockStore(
				{
					auth: {
						uid
					}
				}
			);
			const todoText = 'My todo item';

			store.dispatch(actions.startAddTodo(todoText)).then( () => {
				const actions = store.getActions();
				expect(actions[0]).toInclude({
					type: 'ADD_TODO'
				});
				expect(actions[0].todo).toInclude({
					text: todoText
				});
				done();
			}).catch(done);

		});
	});
});