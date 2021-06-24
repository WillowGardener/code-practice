import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function AddTask({ inputText, setInputText, todos, setTodos }) {
  const inputTextHandler = (e) => {
    //When the specified event happens, change the input text to the value of this event/element, 
    //using the function added through props, which we create below useing useState()
    setInputText(e.target.value);
  };

  const submitToDoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000000 },
    ]);
    setInputText("");
  };

  return (
    <div>
      <form>
        <input
          value={inputText}
          onChange={inputTextHandler}
          type="text"
        ></input>
        <button onClick={submitToDoHandler}>I must do this</button>
      </form>
    </div>
  );
}

const Todo = ({ todo, item, todos, setTodos }) => {

  const deleteHandler = () => {
    //loops through todos, and if the id matches this id, delete it
    setTodos(todos.filter(el => el.id !== todo.id))
  }

  const completeHandler = () => {
    setTodos(
      todos.map(
        (el) => {
          if (el.id === todo.id) {
            return {
              ...item, completed: !item.completed
            }
          }
          return item
        }
      )
    )
  }

  return (
          <div>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
              {item}
            </li>
            <button onClick={completeHandler}>Complete</button>
            <button onClick={deleteHandler}>Delete</button>
          </div>)
};

const TaskList = ({ todos, setTodos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo 
        key={todo.id} 
        item={todo.text} 
        todo={todo}
        todos={todos} 
        setTodos={setTodos}
        />
      ))}
    </ul>
  );
};

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <h1>What Must I Do? </h1>

      <AddTask
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <TaskList todos={todos} setTodos={setTodos} />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
