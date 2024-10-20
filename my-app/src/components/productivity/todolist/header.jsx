import styles from './todolist.module.css'

export default function TodoListHeader() {
    return (
        <header className={styles.header}>
            <h1>to-do list</h1>
            <form className={styles.newTaskForm}>
                <input placeholder="add a new task" type="text" />
                <button>Create</button>
            </form>
        </header>
    )
}