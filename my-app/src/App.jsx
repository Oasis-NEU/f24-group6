import { useState } from 'react'
import './styles/App.css'
//importing function from components
import TodoList from './components/productivity/todolist.jsx'

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
