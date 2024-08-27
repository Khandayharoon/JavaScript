import React, { useEffect } from "react";
import { useState } from "react";
import './GetAllTodos.css';
import DeleteTodo from "../DeleteTodo/DeleteTodo";
import MarkDoneTodo from "../MarkDoneTodo/MarkDoneTodo";

const GetAllTodos = ({todos, setTodos}) => {

  return (
    <div>
      <ol>
        {todos.length > 0 && todos.map((todo) => (
          <div key={todo._id} className={`todo-item ${todo.completed ? "completed" : ""} container`}>
            <div className="todo">
              <li><h3>Title: {todo.title}</h3></li>
              <p className="secondaryText">Description: {todo.description}</p>
            </div>
            <div className="btn">
               <MarkDoneTodo id={todo._id} todos={todos} onMarkdone={setTodos}/>
              <DeleteTodo id={todo._id} todos={todos} ondelete={setTodos}/>
            </div>
          </div>
        ))}
      </ol>
    </div>
  );
};

export default GetAllTodos;
