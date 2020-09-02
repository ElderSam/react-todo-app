import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import uuid from 'react-uuid'; //to create randomic id

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {

  const [ todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => { //when mounted
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => { //when changed
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return

    //console.log(name)
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuid(), name: name, completed: false}]
    })

    todoNameRef.current.value = null //empties the input value
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Completed</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </> 
  )
}

export default App;
