import Task from './task';
import styles from '../todolist.module.css';
import { useState } from 'react';

export default function Tasks({ tasks, onDelete, onComplete }) {
    const [bank, setBank] = useState(0); // Bank accumulator state

    // This function will be called when a task is completed
    function handleTaskComplete(taskId) {
        // Call the passed in onComplete function (to delete the task) first
        onComplete(taskId);

        // Add $5 to the bank accumulator when a task is completed
        // fetch prev --> +5 --> save as new        .
        setBank(prevBank => prevBank + 5);
    }

    return (
        <section className={styles.tasks}>
            <div>
                <p>bank</p>
                <span>${bank}</span> {/* Display the bank amount */}
            </div>


            <div className={styles.list}>
                {tasks.map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        onDelete={onDelete}
                        onComplete={handleTaskComplete}
                    />
                ))}
            </div>
        </section>
    );
}
