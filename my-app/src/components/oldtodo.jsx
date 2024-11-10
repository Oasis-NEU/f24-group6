import { useState } from 'react';

/* export default function TodoList() {
    // tasks --> [] --> state variable that stores the list of tasks
    // setTasks - allows me to update the tasks state
    const [tasks, setTasks] = useState([]);
    // newTask --> state variable that stores curr text input as new task
    // setNewTask --> '' --> updates newTask val
    const [newTask, setNewTask] = useState('');
    
    // to add new task to the list
    const addTask = () => {
        // check if newtask is valid - not empty & remove extra spaces 
        if (newTask.trim()) {
            // creates new array with old tasks in ... & adds new task object with text type
            setTasks([...tasks, { text: newTask, completed: false }]);
            // clears input field by resetting newTask state to empty string
            setNewTask('');
        }
    };

    // to mark a task as complete 
    // takes index of the task that we want to mark as complete
    const completeTask = (index) => {
        // iterates over list of tasts tasts
        const updatedTasks = tasks.map((task, i) =>
            // if curr task index i matches index of task being completed
            // -- create new task object 
            i === index ? { ...task, completed: true } : task
        );
        // updates tasks state with modified task list 
        setTasks(updatedTasks);
    };

    return (
        <div>
            <h2>my to-do list</h2>
            {/* input field to add new tasks }
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="enter a task!"
            />
            {/* button to trigger adding the new task }
            <button onClick={addTask}>add task</button>

            {/*displaying the list of tasks }
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} style={{ textDecoration: task.completed ? 'line=through' : 'none'}}>
                        {task.text}
                        {!task.completed && (
                            <button onClick={() => completeTask(index)}>complete</button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
} */