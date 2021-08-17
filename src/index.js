import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Theme context
import { ThemeProvider } from "./themes/theme-context";

//---thu vien Redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

// npm install --save redux-devtools-extension
import { composeWithDevTools } from "redux-devtools-extension";

// Store
import appReducers from "./stores";

// saga
import createSagaMiddleware from "redux-saga";
import mySaga from "./sagas";

// Middleware Saga
const sagaMiddleware = createSagaMiddleware();

//Tạo store
const store = createStore(
  appReducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
// Run Saga
sagaMiddleware.run(mySaga);

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
