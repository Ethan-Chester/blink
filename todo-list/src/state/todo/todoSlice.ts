import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export interface Todo {
    id: string;
    task: string;
    completed: boolean;
    isEditing: boolean;
}

const initialState: Todo[] = []

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) =>{
            state.push({
                id: uuidv4(),
                task: action.payload,
                completed: false,
                isEditing: false,
            })
        },
        toggleComplete: (state, action: PayloadAction<string>) => {
            const todo = state.find((todo) => todo.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
            return state.filter((todo) => todo.id !== action.payload);
        },
        editTodo: (state, action: PayloadAction<string>) => {
            const todo = state.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.isEditing = !todo.isEditing;
                console.log("rename")
            }
        },
    },
});

export const { addTodo, toggleComplete, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;