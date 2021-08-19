import React from "react";
import "./App.css";
// import MainTodo from "./component/classComponent/MainTodo";
// import Todo from "./component/TodoFunction/Todo";
import TodoReduxToolkit from "./component/TodoFunctionReduxToolKit/TodoReduxToolkit";
import { ThemeContext } from "./themes/theme-context";

function App() {
  const { theme, toggle, dark } = React.useContext(ThemeContext);
  return (
    <div
      className="App"
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
        height: "100vh",
      }}
    >
      <button
        type="button"
        onClick={toggle}
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.color,
        }}
      >
        Color {dark ? "Dark" : "Light"} theme
      </button>
      {/* <Todo /> */}
      {/* <MainTodo /> */}
      <TodoReduxToolkit />
    </div>
  );
}

export default App;
