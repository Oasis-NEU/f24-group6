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
    <p>hello</p>
      <TodoList />
      </div>
    // another function
    // button leads to shopping
  );
}

export default App;
