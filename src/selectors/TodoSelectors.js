import { createSelector } from "reselect";

export const getStatus = (state) => state.todoList.status;
export const getDataTodo = (state) => state.todoList.todo;

export const getCountTodoIsCompleted = createSelector(
  [getDataTodo],
  (todoList) => {
    const countTodoIsComplete = todoList.filter((item) => !item.isComplete);
    return countTodoIsComplete.length;
  }
);

export const getActiveTodo = createSelector(
  [getStatus, getDataTodo],
  (keyWordStatus, todoList) => {
    switch (keyWordStatus) {
      case "All":
        return todoList;
      case "Completed":
        return todoList.filter((t) => t.isComplete);
      case "Active":
        return todoList.filter((t) => !t.isComplete);
    }
  }
);
