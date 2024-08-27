import React, { useState } from 'react';
import CreateTodo from './Components/CreateTodo/CreateTodo';
import GetAllTodos from './Components/GetAllTodos/GetAllTodos';
import DeleteTodo from './Components/DeleteTodo/DeleteTodo';
import FetchTodos from './Components/FetchTodos/FetchTodos';


function App() {
 
  return (
    <>
    
      <FetchTodos/>
    </>
  );
}

export default App;
