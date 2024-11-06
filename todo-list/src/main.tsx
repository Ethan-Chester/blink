import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './state/store.ts';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import routing
import { v4 as uuidv4 } from 'uuid';
import LoadTodoList from './LoadTodoList.tsx'; // Your LoadTodoList component
import TodoList from './TodoList.tsx'; // Your TodoList component
import App from './App.tsx'; // Assuming App is your main component or landing page

export const todoListID = uuidv4();

// Create root and add routing
createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/LoadTodoList" element={<LoadTodoList />} />
        <Route path="/TodoList" element={<App/>} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
