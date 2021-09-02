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

      <ToDoList todos={todos}/>
      <AddToDo setTodos={setTodos}/>
    </div>
  );
}

function ToDoList({todos}) {

  return (
    <ul>
      {todos.map( todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  )
}

function AddToDo({setTodos}) {

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
  }

  return (
    <form onSubmit={handleAddToDo}>
      <input name="addTodo" placeholder="Add Todo" />
      <button type="submit">Submit</button>
    </form>
  )
}

export default App;
