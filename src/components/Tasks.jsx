import React from "react";
import { EmptyContainer, Container } from "./components.style";
import moment from "moment";
import { Link } from 'react-router-dom';
import { useGlobalContext } from "../context/app.context";

const Tasks = () => {
    const { tasks, isLoading, deleteTask } = useGlobalContext();

    if (isLoading) {
        return (
            <div className='loading'></div>
        )
    }

    if (tasks.length < 1) {
        return (
            <EmptyContainer>
                <h5>You have no tasks to display</h5>
            </EmptyContainer>
        )
    }

    const trimTask = (task) => {
        if (task.length < 25) {
            return task;
        } else {
            return task.substring(0, 21) + "...";
        }
    }

    return (
        <Container>
            {tasks.map((item) => {
                const { _id: id, task, label, status, createdAt } = item;
                let date = moment(createdAt);
                date = date.format('MMMM Do YYYY');

                return (
                    <article key={id} className='task'>
                        <p className='task-date'>{date}</p>
                        <h5>{trimTask(task)}</h5>
                        <p className='task-label'><span>status: {label}</span></p>
                        <div className='task-links'>
                            <Link to={`/edit/${id}`} className='task-link'>
                                view
                            </Link>
                            <button
                                className='task-link task-delete'
                                type='button'
                                onClick={() =>{
                                    deleteTask(id)
                                }}
                            >
                                delete
                            </button>
                            <p className='task-status'>{status}</p>
                        </div>
                    </article>
                )
            })}
        </Container>
    )
}

export default Tasks;