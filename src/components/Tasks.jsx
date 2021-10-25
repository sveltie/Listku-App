import React from "react";
import styled from 'styled-components'
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

    return (
        <Container>
            {tasks.map((item) => {
                const { _id: id, task, label, status, createdAt } = item;
                let date = moment(createdAt);
                date = date.format('dddd, MMMM Do YYYY, h:mm:ss a');

                return (
                    <article key={id} className='task'>
                        <p className='task-date'>{date}</p>
                        <h5>{task.toLowerCase()}</h5>
                        <p className='task-label'>{label}</p>
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

const EmptyContainer = styled.section`
  text-align: center;
  h5 {
    text-transform: none;
  }
`
const Container = styled.section`
  width: 90vw;
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  gap: 2rem 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  padding-bottom: 5rem;

  .task {
    background: var(--white);
    border-radius: var(--borderRadius);
    padding: 2rem 1rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    position: relative;
    box-shadow: var(--shadow-2);
    transition: var(--transition);
  }

  .task h5 {
    margin-bottom: 0;
    text-transform: capitalize;
    letter-spacing: 0;
  }

  .task-date {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    font-size: var(--smallText);
    padding: 0.15rem 0.5rem;
    border-top-right-radius: var(--borderRadius);
    border-bottom-left-radius: var(--borderRadius);
    background: var(--primary-100);
    color: var(--primary-500);
  }

  .task-links {
    display: flex;
    align-items: center;
    margin-top: auto;
    font-size: 0.85rem;
  }

  .task-status {
    margin-left: auto;
    margin-bottom: 0;
    margin-top: 0;
    font-size: 0.85rem;
  }
  
  .task-link {
    background: transparent;
    border: transparent;
    text-transform: capitalize;
    color: var(--green-dark);
    cursor: pointer;
    transition: var(--transition);
    border-radius: var(--borderRadius);
    line-height: 1;
  }

  .task-link:hover {
    color: var(--primary-500);
  }

  .task-delete {
    margin-left: 1rem;
    color: var(--red-dark);
  }

  .task-status {
    color: var(--primary-500);
    text-transform: uppercase;
  }

  .task-status-declined {
    color: var(--red-dark);
  }

  .task-status-interview {
    color: var(--green-dark);
  }
`

export default Tasks;