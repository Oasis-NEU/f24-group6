import { useState } from 'react'
import styles from './todolist.module.css';

export default function TodoList() {
    return (
            <header className={styles.header}>
                <section>
                    <h1>to-do list</h1>
                    <form className={styles.newTask}>
                        <input placeholder="add a new task" type="text" />
                        <button>Create</button>
                    </form>
                </section>

            <section className={styles.tasks}>
                <div>
                    <p>Create tasks</p>
                    <span>10</span>
                </div>
                <div>
                    <p>Completed:</p>
                    <span>1 of 10</span>
                </div>
                <div className={styles.list}>
                    <div className={styles.taskslist}>

                    </div>

                </div>
            </section>
        </header>
    );
}
