import React from 'react';
import './App.css';

function App() {
  
  const [todos, setTodos] = React.useState([
    { id: 1, text: "Wash dishes", done: false },
    { id: 2, text: "Do laundry", done: false },
    { id: 3, text: "Take shower", done: false },
  ]);
  
  return (
    <div className="App">
      <h1>ToDo List</h1>

      <ToDoList todos={todos} setTodos={setTodos}/>
      <AddToDo setTodos={setTodos}/>
    </div>
  );
}

function ToDoList({ todos, setTodos }) {

  function handleToggleTodo(todo) {

    const updateTodos = todos.map(t => t.id === todo.id ? {
      ...t,
      done: !t.done
    } : t);
    setTodos(updateTodos)
  }
  
  return (
    <ul>
      {todos.map(todo => (
        <li
        onClick={() => handleToggleTodo(todo)}
        style={{
          textDecoration: todo.done ? "line-through" : ""
        }}
        key={todo.id}>{todo.text}
        <DeleteTodo todo={todo} setTodos={setTodos} />
        </li>
      ))}
    </ul>
  )
}

function DeleteTodo({ todo, setTodos }) {
  
  function handleDeleteTodo() {
    const confirmed = window.confirm("Do you want to delete this?");
    if (confirmed) {
      setTodos(prevTodos => {
        return prevTodos.filter(t => t.id !== todo.id);
      });
    }
  }

  return (
    <span 
    onClick={handleDeleteTodo}
    role="button" style={{
      color: "red",
      fontWeight: "bold",
      marginLeft: 10,
    }}>x</span>
  )
}

function AddToDo({setTodos}) {

  const inputRef = React.useRef();

  function handleAddToDo(event) {
    event.preventDefault();
    const text = event.target.elements.addTodo.value;
    const todo = {
      id: 4,
      text: text,
      done: false
    }
    setTodos(prevTodos => {
      return prevTodos.concat(todo);
    });
    inputRef.current.value = "";
  }

  return (
    <form onSubmit={handleAddToDo}>
      <input name="addTodo" placeholder="Add Todo" ref ={inputRef} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default App;
