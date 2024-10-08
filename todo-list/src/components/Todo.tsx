import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
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

    };

    const handleDeleteTodo = (id: string) => {
        dispatch(deleteTodo(id));
    };

    const handleEditTodo = (id: string) => {
        dispatch(editTodo(id));
    }


    return(
        <div onClick={() => handleToggleComplete(task.id)} className={`${task.completed ? "completed-bar todo": "todo"}`}>
            <p className={`${task.completed ? 'completed': ""}`}>{task.task}</p>
            <div>
                <FontAwesomeIcon className="edit-icon" icon ={faPenToSquare} onClick={() => handleEditTodo(task.id)}/>
                <FontAwesomeIcon className="delete-icon" icon ={faEye} onClick={() => handleDeleteTodo(task.id)}/>
            </div>
        </div>
    )
}