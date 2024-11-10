import styles from '../todolist.module.css'
import { useState } from 'react';

export default function Header({handleAddTask}) {
    const [title, setTitle] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        if (title.trim()) {  // prevent adding empty tasks
            handleAddTask(title);
            setTitle('');  // clear the input field after adding the task
        }
    }

    function onChangeTitle(event) {
        setTitle(event.target.value);
    }


    return (
        <header className={styles.header}>
            <h1>to-do list</h1>

            <form onSubmit={handleSubmit} className={styles.newTask}>
                <input 
                placeholder="add a new task" 
                type="text" 
                onChange={onChangeTitle} 
                value={title}/> 
                <button>create</button>
            </form>
        </header>
    );
}