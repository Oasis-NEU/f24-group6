import styles from '../todolist.module.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { TbTrash } from 'react-icons/tb';


export default function Task({ task, onDelete, onComplete }) {

    const handleComplete = () => {
            onComplete(task.id); // Marks the task as completed
        };

    return (
        <div className={styles.header}>
            <section className={styles.tasks}>
                <button className={styles.checkContainer} onClick={handleComplete}>
                    {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
                </button>

                <p className={task.isCompleted ? styles.textCompleted : ""}>
                    {task.title}
                </p>

                <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
                    <TbTrash size={20} />
                </button>
            </section>
        </div>
    )
}