import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './state/store.ts'


const TodoList = () => {
  return(
    <Provider store={store}>
    <App />
  </Provider>
  );  
};

export default TodoList;
