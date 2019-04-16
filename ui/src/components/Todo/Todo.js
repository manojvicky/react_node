import React from "react";
import "../../styles.css";
import {TodoList, AddTodoIcon, Header} from "../";
const Todo = () => {
  return (
    <div className="todo">
      <Header/>
      <AddTodoIcon/>
      <TodoList />
    </div>
  );
};

export default Todo;
