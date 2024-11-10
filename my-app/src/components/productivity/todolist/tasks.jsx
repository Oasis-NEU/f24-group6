import styles from '../todolist.module.css';

export function Tasks() {
    return (
        <div className={styles.right}>
        <section className={styles.tasksheader}>
            <header className={styles.tasks}>
                <div>
                    <p>Create tasks</p>
                    <span>10</span>
                </div>
                <div>
                    <p>Completed tasks:</p>
                    <span>1 of 10</span>
                </div>
            </header>
        </section>
        </div>
    )
}