import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {

  const [ todos, setTodos] = useState([{id: 1, name: 'todo1', completed: true}, {id: 2, name: 'todo2', completed: false}]);

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
