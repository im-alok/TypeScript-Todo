import React,{ useState } from "react"
import InputField from "./Components/InputField";
import { Todo } from "./Model";
import TodoList from "./Components/TodoList";

const App:React.FC = ()=>{

  const [todo,setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addHandler = (e:React.FormEvent) =>{
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),name:todo,isDone:false}]);
      setTodo("");
    }
  }

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo ={setTodo} addHandler={addHandler}/>
      <TodoList todos={todos} setTodos={setTodos}/>
      

    </div>
  )
}

export default App;
