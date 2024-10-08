import React, {useState} from "react";
import { TodoForm } from "./TodoForm";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../state/store';
import { addTodo, deleteTodo } from '../state/todo/todoSlice';
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";
uuidv4();


export const TodoWrapper = () => {
    const todos = useSelector((state: RootState) => state.todos); 
    const dispatch = useDispatch();

    const handleAddTodo = (task: string) => {
        dispatch(addTodo(task)); 
        console.log(todos)
    };

    return(
    <div>
        <h1 className="blink-logo">BLINK<FontAwesomeIcon icon ={faEye} size="xs"/></h1>
        <div className="TodoWrapper">
            <TodoForm addTodo={handleAddTodo}/>
            {todos.map((todo, index) =>(
                <Todo task={todo} key={index}/>
            ))}
        </div>
    </div>
        
    );
};