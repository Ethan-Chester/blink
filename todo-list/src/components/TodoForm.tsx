import React, { useState } from "react";

interface TodoFormProps {
    addTodo: (task: string) => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({addTodo}) => {

    const [task, setTask] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addTodo(task)

        setTask("")
    }

    return(
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" value={task} placeholder="Enter Task..." onChange={(e) => setTask(e.target.value)}/>
            <button type="submit" className="todo-btn">Add Task</button>
        </form>
    )
}