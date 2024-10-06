import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//importing function from components
import Welcome from './components/welcome'
import TodoList from './components/todolist'

function App() {

  // if many - then use parenthesis
  return (
    <div>
      <Welcome />
      <TodoList />
      </div>
    // another function
  );
}

export default App;
