// import React, {useState} from "react";
import { LoadTodoForm } from "./LoadTodoForm";
import { EditTodoForm } from "./EditTodoForm";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../state/store';
import { addTodo } from '../state/todo/todoSlice';
import { Todo } from "./Todo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";


export const TodoLoadWrapper = () => {
    return(
    <div>
        <h1 className="blink-logo no-highlight">BLINK<FontAwesomeIcon icon ={faEye} size="xs"/></h1>
        <div className="TodoWrapper">
            <LoadTodoForm/>
        </div>
    </div>
        
    );
};