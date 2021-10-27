import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context/app.context";
import FormRow from "../components/FormRow";
import Tasks from '../components/Tasks';

function Dashboard() {
    const [values, setValues] = useState({
        task: '',
        description: ''
    })

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    const { isLoading, showAlert, fetchTasks, createTask } = useGlobalContext();

    const handleSubmit = (event) => {
        event.preventDefault();
        const { task } = values;

        if (task) {
            createTask(values);
            setValues({
                task: '',
                description: ''
            })
        }
    }

    useEffect(() => {
        fetchTasks();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='page'>
            {showAlert && (
                <div classname='alert alert-danger'>
                    there was an error, please try again.
                </div>
            )}
            <form className='form task-form' onSubmit={handleSubmit} autoComplete="off">
                <h4>New Task</h4>
                {/* TASK */}
                <FormRow 
                    type='name'
                    handleChange={handleChange}
                    name='task'
                    value={values.task}
                />

                {/* TASK */}
                <FormRow 
                    type='text'
                    value={values.description}
                    name='description'
                    handleChange={handleChange}
                />

                <button type='submit' className='btn btn-block' disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Add Task'}
                </button>
            </form>
            <Tasks />
        </div>
    )
}

export default Dashboard;