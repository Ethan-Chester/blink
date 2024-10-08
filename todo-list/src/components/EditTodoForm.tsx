import React, { useState } from "react";
import { editTodo } from "../state/todo/todoSlice";

interface EditTodoFormProps {
    addTodo: (task: string) => void;
}

export const EditTodoForm: React.FC<EditTodoFormProps> = ({editTodo, task}) => {

    const [value, setValue] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        editTodo(value, task.id)

        setValue("")
    }

    return(
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" value={value} placeholder="update task" onChange={(e) => setValue(e.target.value)}/>
            <button type="submit" className="todo-btn">change</button>
        </form>
    )
}