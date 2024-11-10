import styles from './todolist.module.css';
import Header from './todolist/header.jsx'
import Tasks from './todolist/tasks.jsx';
import { useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = 'todo:tasks';

function TodoList() {
    const [tasks, setTasks] = useState([]);
  
    function loadSavedTasks() {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if(saved) {
        setTasks(JSON.parse(saved));
      }
    }
  
    function setTasksAndSave(newTasks) {
      setTasks(newTasks);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
    }
  
    useEffect(() => {
      loadSavedTasks();
    }, [])
  
    function addTask(taskTitle) {
      setTasksAndSave([...tasks, {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }]);
    }
  
    function deleteTaskById(taskId) {
      const newTasks = tasks.filter(task => task.id !== taskId);
      setTasksAndSave(newTasks);
    }
  
    function toggleTaskCompletedById(taskId) {
      const newTasks = tasks.map(task => {
        if(task.id === taskId) {
          return {
            ...task,
            isCompleted: !task.isCompleted
          }
        }
        return task;
      });
      setTasksAndSave(newTasks);
    }
  
    return (
      <div className={styles.tab}>
        <Header handleAddTask={addTask} />
        <Tasks
          tasks={tasks}
          onDelete={deleteTaskById}
          onComplete={toggleTaskCompletedById}
        />
      </div>
    )
  }
  
  export default TodoList;