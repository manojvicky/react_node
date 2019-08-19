import { get, post } from "../api";

const url = "http://localhost:5000/api/todos";

export function gettodo() {
  return function(dispatch) {
    dispatch({ type: "LOADING" });
    get(url)
      .then(res => {
        if (res.ok && (res.status > 199 || res.status < 300)) {
          return res.json();
        } else {
          Promise.reject({ message: "error while loading" });
        }
      })
      .then(data => {
        dispatch({ type: "GETTODO", payload: data.todos });
        dispatch({ type: "LOADING" });
      })
      .catch(err => {
        dispatch({ type: "LOADING", message: err.message });
      });
  };
}

export function addtodo(payload) {
  console.log("payload in addtodo", payload);
  return function(dispatch) {
    dispatch({ type: "LOADING" });
    post(url, payload)
      .then(res => {
        if (res.ok && (res.status > 199 || res.status < 300)) {
          return res.json();
        } else {
          Promise.reject({ message: "error while loading" });
        }
      })
      .then(data => {
        console.log('data in add todo', data);
        dispatch({ type: "ADDTODO", payload: data.todos });
        dispatch({ type: "LOADING" });
      })
      .catch(err => {
        console.log("error", err);
        dispatch({ type: "LOADING" });
      });
  };
}
