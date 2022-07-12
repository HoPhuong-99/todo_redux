import filtersReducer from "../components/Filters/FilterSlide"
import todoListReducer from "../components/TodoList/TodoSlide"

const rootReducer = (state = {}, action) => {

  return {
    filters: filtersReducer(state.filters, action),
    todoList: todoListReducer(state.todoList, action),
  }

}
export default rootReducer
// const initState = {
//   filters: {
//     search: '',
//     status: 'all',
//     priority: [],
//   },
//   todoList: [
//     { id: 1, name: 'Lean PHP', priority: 'Medium', completed: false },
//     { id: 2, name: 'Lean Gym', priority: 'Hight', completed: true },
//     { id: 3, name: 'Lean Java', priority: 'Low', completed: false }
//   ]

// }

// const rootReducer = (state = initState, action) => {

//   switch (action.type) {
//     case 'todoList/addTodo':
//       return {
//         ...state,
//         todoList: [
//           ...state.todoList,
//           action.payload
//         ]
//       }
//     case 'filters/searchFilterChange':
//       return {
//         ...state,
//         filters: {
//           search: action.payload
//         }
//       }
//     default:
//       return state;
//   }
// }
// export default rootReducer
