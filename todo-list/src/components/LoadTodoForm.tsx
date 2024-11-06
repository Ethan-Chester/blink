import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export const LoadTodoForm = () => {
    const navigate = useNavigate();

    const [value, setValue] = useState("")

    const handleExistingList = (e: React.FormEvent<HTMLFormElement>) => {

        if(value !== ""){
            e.preventDefault()
            navigate('/TodoList');
            // addTodo(value)
        }else{
            e.preventDefault()
            document.getElementById('todo-btn')?.classList.add("shake") 
            setTimeout(() => {
                document.getElementById('todo-btn')?.classList.remove("shake") 
              }, 200);
        }
        setValue("")
    }

    const handleNewList = () =>{
        navigate('/TodoList');
    }

    return(
        <div>
            <h1>Load an existing todo list:</h1>
            <form className="TodoForm" onSubmit={handleExistingList}>
                <input type="text" className="todo-input no-highlight" value={value} placeholder="Enter List ID..." onChange={(e) => setValue(e.target.value)}/>
                <button type="submit" id="todo-btn" className="todo-btn no-highlight">Enter</button>
            </form>
            <h1>Or</h1>
            <h1>Create a new list</h1>
            <button onClick={handleNewList}>Create</button>
        </div>
    )
}