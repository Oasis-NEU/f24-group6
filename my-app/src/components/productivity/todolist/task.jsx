import styles from './task.module.css';

export function Task() {
    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
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
    )
}