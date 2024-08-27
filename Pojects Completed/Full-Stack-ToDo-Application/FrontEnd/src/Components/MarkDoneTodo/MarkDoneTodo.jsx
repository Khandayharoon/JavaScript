import React from "react";

const MarkDoneTodo = ({ id, todos, onMarkdone }) => {
  const markDone = () => {
    fetch("http://localhost:3001/user/api/todo-completed", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    })
      .then(() => {
        onMarkdone(todos.map((todo) => 
          todo._id === id ? { ...todo, completed: true } : todo
        ));
      })
      .catch((error) => console.error("Error updating todo:", error));
  };

  // Find the specific todo by id
  const todo = todos.find((todo) => todo._id === id);

  if (!todo) {
    return null; // or some placeholder UI if the todo is not found
  }

  return (
    <button
      className="btnone"
      disabled={todo.completed}
      onClick={markDone}
    >
      {todo.completed ? "Completed" : "Mark as Done"}
    </button>
  );
};

export default MarkDoneTodo;
