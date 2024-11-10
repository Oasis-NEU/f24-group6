import styles from './task.module.css';

export function Task() {
    return (

        <header className={styles.header}>
            <section className={styles.tasks}>
                <div>
                    <p>Create tasks</p>
                    <span>10</span>
                </div>
                <div>
                    <p>Completed tasks:</p>
                    <span>1 of 10</span>
                </div>
            </section>
        </header>

    )
}