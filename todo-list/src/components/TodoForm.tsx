import React, { useState } from "react";

interface TodoFormProps {
    addTodo: (task: string) => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({addTodo}) => {

    const [value, setValue] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        if(value !== ""){
            e.preventDefault()
            addTodo(value)
        }else{
            e.preventDefault()
            document.getElementById('todo-btn')?.classList.add("shake") 
            setTimeout(() => {
                document.getElementById('todo-btn')?.classList.remove("shake") 
              }, 200);
        }

        

        setValue("")
    }

    return(
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" value={value} placeholder="Enter Task..." onChange={(e) => setValue(e.target.value)}/>
            <button type="submit" id="todo-btn" className="todo-btn">Add Task</button>
        </form>
    )
}