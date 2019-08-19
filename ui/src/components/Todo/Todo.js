import React from "react";
import "../../styles.css";
import {TodoList, Header} from "../";
import AddTodo from "../AddTodo/AddTodo.container"
const Todo = () => {
  return (
    <div className="todo">
      <Header/>
      <AddTodo/>
      <TodoList />
    </div>
  );
};

export default Todo;
