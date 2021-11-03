import React, { useState, useEffect } from 'react';
import { useParams, Redirect, Link } from 'react-router-dom';
import { Container } from './pages.style';
import { useGlobalContext } from '../context/app.context';
import FormRow from '../components/FormRow';

const Update = () => {
    const { id } = useParams();
    const {
        showAlert,
        isLoading,
        editItem,
        fetchSingleTask,
        user,
        editTask,
        editComplete
    } = useGlobalContext();

    const [values, setValues] = useState({
        task: '',
        description: '',
        label: '',
        status: ''
    });

    useEffect(() => {
        fetchSingleTask(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    useEffect(() => {
        if (editItem) {
            const { task, description, label, status } = editItem;
            setValues({ task, description, label, status });
        }
    }, [editItem]);

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const { task, description, label, status } = values;
        if (task) {
            editTask(id, { task, description, label, status });
        }
    }

    if (isLoading && !editTask) {
        return (
            <div className='loading'></div>
        )
    }

    return (
        <React.Fragment>
            {!user && <Redirect to='/' />}
            <Container className='page'>
                <header>
                    <Link to='/dashboard' className='btn'>
                        dashboard
                    </Link>
                </header>
                {showAlert && (
                    <div className='alert alert-danger'>
                        there was an error, please try again
                    </div>
                )}
                <form className='form' onSubmit={handleSubmit} autoComplete="off">
                    <p>
                        {editComplete && 'Task successfully edited.'}
                    </p>
                    <h4>Edit Task</h4>
                    <FormRow
                        type='name'
                        handleChange={handleChange}
                        name='task'
                        value={values.task}
                    />
                    <FormRow
                        type='text'
                        value={values.description}
                        name='description'
                        handleChange={handleChange}
                    />
                    <div className='form-row'>
                        <label htmlFor='label' className='form-label'>
                            Label
                        </label>
                        <select
                            name='label'
                            value={values.label}
                            onChange={handleChange}
                            className='status'
                        >
                            <option value='urgent'>urgent</option>
                            <option value='important'>important</option>
                            <option value='medium'>medium</option>
                            <option value='low'>low</option>
                        </select>
                    </div>
                    <div className='form-row'>
                        <label htmlFor='status' className='form-label'>
                            Status
                        </label>
                        <select
                            name='status'
                            value={values.status}
                            onChange={handleChange}
                            className='status'
                        >
                            <option value='To Do'>To Do</option>
                            <option value='doing'>doing</option>
                            <option value='pending'>pending</option>
                            <option value='finished'>finished</option>
                        </select>
                    </div>
                    <button 
                        type='submit' 
                        className='btn btn-block' 
                        disabled={isLoading}
                    >
                        {isLoading ? <div className='loading-button'></div> : 'Edit'}
                    </button>
                </form>
            </Container>
        </React.Fragment>
    )
}

export default Update;