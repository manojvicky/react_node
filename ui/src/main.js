import React from "react";
import ReactDOM from "react-dom";
import Todo from "./components/Todo";
import getdata from "./reducer/todo.reducer";
import loading from "./reducer/loading.reducer";
import reduxThunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import "./styles.css";
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
const store = createStore(reducer, applyMiddleware(...arr));
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