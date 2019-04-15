import React from "react";
import "../../styles.css";
import TodoList from "../TodoList/TodoList.container";
import AddTodo from "../AddTodo/AddTodo.container";
import AddTodoIcon from "../AddTodo/AddTodoIcon";

import Header from "../Header/Header"
const Todo = () => {
  return (
    <div className="todo">
      <Header/>
      <AddTodo />
      <AddTodoIcon/>
      <TodoList />
    </div>
  );
};

export default Todo;
