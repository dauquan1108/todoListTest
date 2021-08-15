import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Theme context
import { ThemeProvider } from "./themes/theme-context";

//---thu vien Redux
import { createStore } from "redux";
import { Provider } from "react-redux";

// npm install --save redux-devtools-extension
// import { composeWithDevTools } from "redux-devtools-extension";

// Store
import appReducers from "./store/index";
//Tạo store-
const store = createStore(appReducers);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);

reportWebVitals();
