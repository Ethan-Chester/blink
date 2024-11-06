import "./App.css";
import { TodoLoadWrapper } from "./components/TodoLoadWrapper";
// import { TodoIdentifier } from "./components/TodoIdentifier";
// import { TodoWrapper } from "./components/TodoWrapper";


function LoadTodoList() {
    return(
      <div className="App">
          <TodoLoadWrapper/>
      </div>
    );
  }
  
  export default LoadTodoList