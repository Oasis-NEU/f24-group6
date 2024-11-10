import styles from '../todolist.module.css'

export function Header() {
    return (
        <div className={styles.right}>
            <header className={styles.header}>
                <h1>to-do list</h1>
                <form className={styles.newTask}>
                    <input placeholder="add a new task" type="text" />
                    <button>Create</button>
                </form>
            </header>
        </div>
    )
}