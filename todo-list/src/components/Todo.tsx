import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";
import { Todo as TodoInterface, toggleComplete, deleteTodo, editTodo} from '../state/todo/todoSlice';
import { useDispatch } from 'react-redux';

interface TodoProps {
    task: TodoInterface;
}

export const Todo: React.FC<TodoProps>= ({task}) => {

    const dispatch = useDispatch();


    const handleToggleComplete = (id: string) => {
        dispatch(toggleComplete(id));
        let editBtn = document.getElementById("edit-icon");
        let deleteBtn = document.getElementById("delete-icon");
        if(editBtn !== null){
            editBtn.classList.toggle("completed")
        }
        if(deleteBtn !== null){
            deleteBtn.classList.toggle("completed")
        }
        
    };

    const handleDeleteTodo = (id: string) => {
        dispatch(deleteTodo(id));
    };

    const handleEditTodo = (id: string) => {
        dispatch(editTodo(id));
    }

    return(
        <div onClick={() => handleToggleComplete(task.id)} className={`${task.completed ? "completed-bar todo": "todo"}`}>
            <p className={`${task.completed ? 'completed no-highlight': "no-highlight"}`}>{task.task}</p>
            <div>
                <FontAwesomeIcon id={`edit-icon-${task.id}`} className={`edit-icon ${task.completed ? "completed" : ""}`} icon ={faPenToSquare} onClick={() => handleEditTodo(task.id)}/>
                <FontAwesomeIcon id={`delete-icon-${task.id}`} className={`delete-icon ${task.completed ? "completed" : ""}`} icon ={faEye} onClick={() => handleDeleteTodo(task.id)}/>
            </div>
        </div>
    )
}