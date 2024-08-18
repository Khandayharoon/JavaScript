import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const updateTodovalue = (event) => {
        event.preventDefault();
        setNewTodo(event.target.value);
    };

    const addNewTask = (event) => {
        event.preventDefault(); // Prevent the default form submission
        if (newTodo.trim() !== "") {
            setTodos((prevTodos) => [
                ...prevTodos,
                { task: newTodo.trim(), id: uuidv4() }
            ]);
        }
        setNewTodo("");
    };

    const deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    return (
        <div>
            <div className="add">
                <form onSubmit={addNewTask}>
                    <input
                        placeholder="Add a Task"
                        value={newTodo}
                        onChange={updateTodovalue}
                    />
                    <button type="submit">Add Task</button>
                </form>
            </div>
            <h4>Tasks To Do Today</h4>
            <hr />
            <ul>
                {todos.length > 0 ? (
                    todos.map((todo) => (
                        <li type="1" id="li" key={todo.id}>
                            <button id="delbtn" onClick={() => deleteTodo(todo.id)}>Delete</button> &nbsp; &nbsp; &nbsp;
                            <span>{todo.task}</span>
                        </li>
                    ))
                ) : (
                    <p>No tasks to show</p>
                )}
            </ul>
        </div>
    );
}

export default TodoList;
