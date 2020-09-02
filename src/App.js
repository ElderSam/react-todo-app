import React, { useState, useRef } from 'react';
import TodoList from './TodoList';
import uuidv4 from 'uuid/v4'; //to create randomic id

function App() {

  const [ todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return

    //console.log(name)
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, completed: false}]
    })

    todoNameRef.current.value = null //empties the input value
  }

  return (
    <>
      <TodoList todos={todos} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Completed</button>
      <div>0 left to do</div>
    </> 
  )
}

export default App;
