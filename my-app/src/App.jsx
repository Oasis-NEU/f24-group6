import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//importing function from components
import Welcome from './components/welcome'
import Header from './components/productivity/todolist/header'
import TodoList from './components/productivity/todolist'

function App() {

  // if many - then use parenthesis
  return (
    <div>
      <TodoList/>
      </div>
    // another function
  );
}

export default App;

