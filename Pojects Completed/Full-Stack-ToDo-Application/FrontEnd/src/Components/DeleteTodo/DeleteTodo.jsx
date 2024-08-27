import React, { useEffect, useState } from "react";
import GetAllTodos from '../GetAllTodos/GetAllTodos';

const DeleteTodo = ({id, todos , ondelete}) => {
 

  const deleteTodo = () => {
    fetch("http://localhost:3001/user/api/delete-todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    })
      .then(() => {
        ondelete (todos.filter((todo) => todo._id !== id));
      })
      .catch((error) => console.error("Error deleting todo:", error));
  };

  return (
    <button
                className="btntwo"
                onClick={deleteTodo}
              >
                Delete Todo
              </button>
  );
};

export default DeleteTodo;
