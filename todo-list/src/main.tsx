import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './state/store.ts'
import { v4 as uuidv4 } from "uuid";

export const todoListID = uuidv4();

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <App />
    </Provider>
)
