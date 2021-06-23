import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function AddTask({inputText,setInputText,todos,setTodos}) {

  const inputTextHandler = (e) => {
      setInputText(e.target.value)
      console.log(e.target.value)
      
  }

  const submitToDoHandler = (e) => {
    e.preventDefault()
    console.log({todos})
    setTodos([
      ...todos, 
      {text:inputText,completed:false, id: Math.random()*1000000}])
    setInputText("")
  }


  return (
    <div>
      <form>
        <input value={inputText} onChange={inputTextHandler} type='text'></input>
        <button onClick={submitToDoHandler}>I must do this</button>
      </form>
    </div>
  )
}

const Todo = ({item}) => {
  return (
    <li>
      {item}
    </li>
  )
}


const TaskList = ({todos}) => {
  console.log(todos)
  return (
    <ul>
      {todos.map(todo => (
        <Todo item={todo.text} />
      ))}
      
    </ul>
  )
}

function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  return (
    <div>
      <h1>What Must I Do? </h1>
      
      <AddTask inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
      <TaskList todos={todos} setTodos={setTodos} />
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

