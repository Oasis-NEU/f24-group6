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
        setBank(prevBank => prevBank + 5);
    }

        return (
            <div className={styles.header}>
                <section className={styles.tasks}>
                    <header className={styles.header}>
                        <div>
                            <p>bank</p>
                            <span>${bank}</span> {/* Display the bank amount */}
                        </div>
                    </header>

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
            </div>
        );
    }