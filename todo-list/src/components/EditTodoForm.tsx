import React, { useState, useEffect, useRef  } from "react";
import { useDispatch } from 'react-redux';
import { editTask } from "../state/todo/todoSlice";
import { Todo as TodoInterface} from '../state/todo/todoSlice';


interface TodoProps {
    task: TodoInterface;
}

export const EditTodoForm: React.FC<TodoProps> = ({task}) => {
    const [value, setValue] = useState("")
    const dispatch = useDispatch();
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (task && task.task) {
            setValue(task.task); // Set the initial value to task.task
        }
    }, [task]);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus(); // Automatically focus the input field
        }
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        if(value !== ""){
            e.preventDefault()
            dispatch(editTask([value, task.id]))
        }
        else{
            e.preventDefault()
            document.getElementById("edit-btn")?.classList.add("shake")
            setTimeout(() => {
                document.getElementById('edit-btn')?.classList.remove("shake") 
              }, 200);
        }
        

        setValue("")
    }

    return(
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input ref={inputRef} type="text" className="todo-input" value={value} placeholder="Update Task" onChange={(e) => setValue(e.target.value)}/>
            <button type="submit" id="edit-btn" className="todo-btn">Done</button>
        </form>
    )
}