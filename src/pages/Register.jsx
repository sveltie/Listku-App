import React, { useState } from "react";
import styled from 'styled-components';
import { useGlobalContext } from "../context/app.context";
import { Redirect } from "react-router-dom";
import FormRow from '../components/FormRow';

function Register() {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        isMember: true
    });

    const { user, register, login, isLoading, showAlert } = useGlobalContext();
    const toggleMember = () => {
        setValues({
            ...values,
            isMember: !values.isMember
        })
    }

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const { username, email, password, isMember } = values;

        if (isMember) {
            login({ email, password });
        } else {
            register({ username, email, password });
        }
    }

    return (
        <React.Fragment>
            <Wrapper>
                <div className='container'>
                    {user && <Redirect to='/dashboard' />}
                    <div className='page'>
                        {showAlert && (
                            <div className='alert alert-danger'>
                                there was an error, please try again.
                            </div>
                        )}
                        <form className='form' onSubmit={onSubmit} autoComplete="off">
                            <h4>{values.isMember ? 'Login' : 'Register'}</h4>
                            {/* USERNAME FIELD */}
                            {!values.isMember && (
                                <FormRow
                                    type='name'
                                    value={values.username}
                                    name='username'
                                    handleChange={handleChange}
                                />
                            )}

                            {/* SINGLE FORM ROW */}
                            <FormRow
                                type='email'
                                value={values.email}
                                name='email'
                                handleChange={handleChange}
                            />

                            <FormRow
                                type='password'
                                value={values.password}
                                name='password'
                                handleChange={handleChange}
                            />
                            {/* END OF SINGLE FORM ROW */}
                            <button type='submit' className='btn btn-block' disabled={isLoading}>
                                {isLoading ? 'Fetching User...' : 'Submit'}
                            </button>
                            <p>
                                {values.isMember ? 'Not signed yet? ' : 'Already signed? '}

                                <button type='button' onClick={toggleMember} className='member-btn'>
                                    {values.isMember ? 'Register' : 'Login'}
                                </button>
                            </p>
                        </form>
                    </div>
                </div>
            </Wrapper>
        </React.Fragment>
    )
}

const Wrapper = styled.section`
  display: grid;
  align-items: center;

  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }

  .form {
    max-width: 400;
    border-top: 5px solid var(--primary-500);
  }

  h4 {
    text-align: center;
  }

  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }

  .btn {
    margin-top: 1rem;
  }

  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
  }

`;

export default Register;