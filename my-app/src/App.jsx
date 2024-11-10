import './App.css'
//importing function from components
import Welcome from './components/welcome'
import TodoList from './components/todolist'
import Header from './components/productivity/todolist/header'

function App() {
  return (
    <div>
      <Welcome />
      <Header />
      </div>
    // another function
  );
}

export default App;
