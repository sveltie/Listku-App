import React from "react";
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
            <div className='empty-container'>
                <h5>You have no tasks to display</h5>
            </div>
        )
    }

    return (
        <div className='container'>
            {tasks.map((item) => {
                const { _id: id, task, label, status, createdAt } = item;
                let date = moment(createdAt);
                date = date.format('dddd, MMMM Do YYYY, h:mm:ss a');

                return (
                    <article key={id} className='task' style={{border: '2px solid black'}}>
                        <p className='task-date'>{date}</p>
                        <h5>{task.toLowerCase()}</h5>
                        <p className='task-label'>{label}</p>
                        <div>
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
        </div>
    )
}

export default Tasks;