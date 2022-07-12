const initState = {
  todoList: [
    { id: 1, name: 'Lean PHP', priority: 'Medium', completed: false },
    { id: 2, name: 'Lean Gym', priority: 'Hight', completed: true },
    { id: 3, name: 'Lean Java', priority: 'Low', completed: false }
  ]

}

const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case 'todoList/addTodo':
      return [...state, action.payload];
    default:
      return state;
  }
}
export default todoListReducer;