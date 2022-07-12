import { createSelector } from 'reselect'
// export const todoListSelector = (state) => {
//   const todoRemining = state.todoList.filter((todo)=> {
//     return todo.name.includes(state.filters.search)
//   });
//   return todoRemining;
// };
export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;


export const todoReminingSelector = createSelector(
  [todoListSelector, searchTextSelector],
  (todoList, searchText) => {
    return todoList.filter((todo) =>
      todo.name.includes(searchText)
    );
  })


