import { useState } from 'react'
import './styles/App.css'
import TodoList from './components/productivity/todolist.jsx'
import Header from './components/productivity/todolist/header'
import TodoList from './components/productivity/todolist'

function App() {
  // if many - then use parenthesis
  return (
    <div className="app">
        {/* Other components */}
        <div className="rightTab">
            <TodoList />
        </div>
    </div>
    // another function
    // button leads to shopping
  );
}

export default App;
