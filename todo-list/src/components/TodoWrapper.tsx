import React, {useState} from "react";
import { TodoForm } from "./TodoForm";
import { EditTodoForm } from "./EditTodoForm";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../state/store';
import { addTodo } from '../state/todo/todoSlice';
import { Todo } from "./Todo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";


export const TodoWrapper = () => {
    const todos = useSelector((state: RootState) => state.todos); 
    const dispatch = useDispatch();

    const handleAddTodo = (task: string) => {
        dispatch(addTodo(task)); 
    };

    const incompleteTodosCount = todos.filter(todo => !todo.completed).length;

    return(
    <div>
        <h1 className="blink-logo no-highlight">BLINK<FontAwesomeIcon icon ={faEye} size="xs"/></h1>
        <div className="TodoWrapper">
            <h1 className="no-highlight">Tasks Left: {incompleteTodosCount} / {todos.length}</h1>
            <TodoForm addTodo={handleAddTodo}/>
            {todos.map((todo) =>(
                todo.isEditing ? (
                    <EditTodoForm task={todo} key={todo.id}/>
                ) : ( <Todo task={todo} key={todo.id}/>)
            ))}
        </div>
    </div>
        
    );
};