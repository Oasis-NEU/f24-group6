import styles from '../todolist.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <h1>to-do list</h1>
            <form className={styles.newTask}>
                <input placeholder="add a new task" type="text" />
                <button>Create</button>
            </form>
        </header>
    )
}