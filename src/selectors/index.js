import { createSelector } from "reselect";

const ShowStatus = (state) => state.ShowStatus;

const getTodo = (state) => state.todoList;

export const amountOfUnfinishedWork = createSelector([getTodo], (todo) => {
  const count = todo.filter((item) => !item.isComplete).length;
  return count;
});

export const getVisibleTodo = createSelector(
  [ShowStatus, getTodo],
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
