import { useState } from 'react';

// todo list 
// bullet point closer 
export default function TodoList() {
    // tasks --> [] --> state variable that stores the list of tasks
    // setTasks - allows me to update the tasks state
    const [tasks, setTasks] = useState([]);
    // newTask --> state variable that stores curr text input as new task
    // setNewTask --> '' --> updates newTask val
    const [newTask, setNewTask] = useState('');
    // set difficulty level
    const [newTaskLvl, setNewTaskLvl] = useState('');
    
    // to add new task to the list
    const addTask = () => {
        // check if newtask is valid - not empty & remove extra spaces 
        if (newTask.trim()) {
            // creates new array with old tasks in ... & adds new task object with text type
            setTasks([...tasks, { text: newTask, level: newTaskLvl, completed: false }]);
            // clears input field by resetting newTask state to empty string
            setNewTask([...tasks, newTask]);
            // reset input field?
            //reset level to default
            setNewTaskLvl('');
        }
    };

    // to mark a task as complete 
    // takes index of the task that we want to mark as complete
    const completeTask = (index) => {
        // iterates over list of tasms
        const updatedTasks = [...tasks];
            // if curr task index i matches index of task that's completed
        updatedTasks[index].completed = true;
        // updates tasks state with modified task list 
        setTasks(updatedTasks);
    };

    // to handle changing task's difficulty
    const handleDifficultyLvl = (index, event) => {
        const newTasks = [...tasks];
        // update level of task based on selected val
        newTasks[index].level = event.target.value;
        // update state 
        setTasks(newTasks);
    }

    return (
        <div>
            <h2>my to-do list</h2>
            {/* input field to add new tasks */}
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="enter a task!"
            />
            {/*drop down to choose difficulty of task */}
            <select 
                value = {setNewTaskLvl}
                onChange={(e) => setNewTaskLvl(e.target.value)}
                >
                    <option value="light">easy</option>
                    <option value="medium">medium</option>
                    <option value="intense">intense</option>
                </select>

            {/* button to trigger adding the new task */}
            <button onClick={addTask}>add task</button>

            {/* render the list of tasks */}
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none'}}>
                        {task.text}
                        <select 
                            value={task.level}
                            onChange={(event) => handleDifficultyLvl(index, event)}
                            disabled={task.completed}
                            style={{marginLeft: '10px'}} >
                            <option value="light">easy</option>
                            <option value="medium">medium</option>
                            <option value="intense">intense</option>
                        </select>
                        {!task.completed && (
                            //click the button to complete the task
                            <button onClick={() => completeTask(index)}>complete</button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}