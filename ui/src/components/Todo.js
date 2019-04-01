import React from "react";
import "../styles.css";
import TodoList from "./TodoList.container";
import AddTodo from "./AddTodo.container";

const Todo = () => {
  return (
    <div className="todo">
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default Todo;
