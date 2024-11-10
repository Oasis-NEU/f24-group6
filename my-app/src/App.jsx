import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//importing function from components
import Welcome from './components/welcome'
import TodoList from './components/todolist'
import Header from './components/productivity/todolist/header'

function App() {

  // if many - then use parenthesis
  return (
    <div>
      <Welcome />
      <Header />
      </div>
    // another function
  );
}

export default App;
