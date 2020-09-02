import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {

  const [ todos, setTodos] = useState(['todo1', 'todo2', 'todo3']);

  return (
    <>
      <TodoList todos={todos} />
      <input type="text" />
      <button>Add Todo</button>
      <button>Clear Completed</button>
      <div>0 left to do</div>
    </>
  )
}

export default App;
