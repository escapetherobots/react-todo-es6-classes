var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
	beforeEach( () => {
		localStorage.removeItem('todos');
	});

	it('should exist', () => {
		expect(TodoAPI).toExist();
	});

	describe('Filter Todo', () => {
		var todos = [
			{
				id: 1,
				text: 'some text',
				completed: false
			},
			{
				id: 2,
				text: 'some some',
				completed: false
			},
			{
				id: 3,
				text: 'text text',
				completed: true
			},
		];

		it('should return all items if showCompleted is true', () => {
			var filteredTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filteredTodos.length).toBe(3);
		});

		it('should return only items that are not completed', () => {
			var filteredTodos = TodoAPI.filterTodos(todos, false, '');
			expect(filteredTodos.length).toBe(2);
		});

		it('should sort by completed status', () => {
			var filteredTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filteredTodos[0].completed).toBe(false);
		});


		// searchText
		it('should filter todos by searchText', () => {
			var filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
			expect(filteredTodos.length).toBe(2);
		});

		it('should return all todos if searchText is empty', () => {
			var filteredTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filteredTodos.length).toBe(3);
		});
	})
})