import { useState } from 'react'
import styles from './todolist.module.css';
import { Tasks } from './todolist/tasks.jsx';
import { Header } from './todolist/header.jsx';

export default function TodoList() {
    return (
        <>
            <section>
                <Header />
            </section>
            <section>
                <Tasks />
            </section>
        </>
    );
}
