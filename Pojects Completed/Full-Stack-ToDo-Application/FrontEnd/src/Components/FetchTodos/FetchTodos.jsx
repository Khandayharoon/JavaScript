import React from "react";
import { useState,   useEffect } from "react";
import GetAllTodos from "../GetAllTodos/GetAllTodos";
import CreateTodo from "../CreateTodo/CreateTodo";
const FetchTodos = ()=>{
    
  const [todos, setTodos] = useState([]);

  useEffect( ()=>{fetch("http://localhost:3001/user/api/allTodos")
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const json = await res.json();
        setTodos(json.todos || []);
      })
      .catch((err) => {
        console.error("Failed to fetch todos:", err);
      });
  },[])

    return(
        <>
        <CreateTodo  todos={todos} setTodos={setTodos}/>
        <GetAllTodos todos={todos} setTodos={setTodos}/>
        </>
    )
}
export default FetchTodos;