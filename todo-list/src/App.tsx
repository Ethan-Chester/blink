// import Counter from "./components/Counter";
import "./App.css";
import { TodoWrapper } from "./components/TodoWrapper";
import { TodoIdentifier } from "./components/TodoIdentifier";


function App() {
  return(
    <div className="App">
        <TodoWrapper/>
        <TodoIdentifier/>
    </div>
  );
}

export default App
