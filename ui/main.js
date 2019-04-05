import React from "react";
import ReactDOM from "react-dom";
import Todo from "./src/components/Todo";
import getdata from "./src/reducer/todo.reducer";
import loading from "./src/reducer/loading.reducer";
import reduxThunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import "./src/styles.css";
const reducer = combineReducers({
  loading,
  getdata
});
const custom = store => next => action => {
  console.group(action.type);
  console.log("prev", store.getState());
  console.log("action", action);
  next(action);
  console.log("next", store.getState());
  console.groupEnd();
};
const arr = [reduxThunk, custom];

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...arr)));
function App() {
  return (
    <div className="app">
      <Todo />
    </div>
  );
}


ReactDOM.render(
    <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app')
);