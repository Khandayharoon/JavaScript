import React, { useState } from "react";
import './CreateTodo.css'
const CreateTodo = ({todos, setTodos}) => {
    const [title , setTitle] = useState('');
    const [description , setDescription] = useState('');


    const createTodoInDB = async () =>{
        fetch("http://localhost:3001/user/api/todo",{
            method: "POST",
            body :JSON.stringify({
                title : title,
                description : description
            }),
            headers:{
                "Content-Type": "application/json"
            }
        })
            .then( async function(res){
                const json = await res.json()
                setTodos([json.newTodo ,...todos])
                alert("TO-DO Added Successfully")
            });

           
    }
    return(
    <>
        <div >
            <form action="" onSubmit={(e)=>{e.preventDefault(); createTodoInDB()}} className="createTodo">
            <input type="text" placeholder="Title" onChange={function(e){setTitle(e.target.value)}}/>
            <input type="text" placeholder="Description" onChange={function(e){setDescription(e.target.value)}}/>
            <button type="submit">Add Todo</button>
            </form>
        </div>
        <hr />
        <div className="headline">Tasks To Do Today </div>
    </>  
    )
}

export default CreateTodo;