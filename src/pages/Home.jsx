import React from "react";
import styled from 'styled-components';
import illust from '../assets/home-illust.svg'
import { Link, Redirect } from "react-router-dom";
import { useGlobalContext } from '../context/app.context';

function Home() {
    const { user } = useGlobalContext();

    return (
        <React.Fragment>
            {user && <Redirect to='/dashboard' />}
            <Wrapper>
                <div className='container page'>
                    <div className='info'>
                        <h1>
                            TO-DO APP
                        </h1>
                        <p>
                        The main API for Listku app built with Express. 
                        Listku is an application that is made with a purpose 
                        to track user to-do/task list, schedule, etc like any 
                        basic to-do application. Users will be able to manage, 
                        edit, delete, and group their tasks based on the task 
                        priority or simply the CRUD functionality.
                        </p>

                        <Link to='/register' className='btn hero-btn'>
                            Login
                        </Link>
                        <div class="divider"/>
                        <a href="https://github.com/Yukii2k/Listku-Server" className='btn hero-btn'>
                          Contribute
                        </a>
                    </div>
                    <img className="img main-img" src={illust} alt='illust'></img>
                </div>
            </Wrapper>
        <div className="svg-wave">
          <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">
            <path d="M 0,500 C 0,500 0,250 0,250 C 139.59999999999997,240 279.19999999999993,230 450,249 C 620.8000000000001,268 822.8,316 993,321 C 1163.2,326 1301.6,288 1440,250 C 1440,250 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="#5865f2ff" class="transition-all duration-300 ease-in-out delay-150 path-0">
            </path>
          </svg>
        </div>
        </React.Fragment>
    )
}

const Wrapper = styled.div`
  .container {
    display: grid;
    align-items: center;
    margin-top: -6rem;
  }

  @media screen and (max-width: 768px) {
        p {
            font-size: 0.9rem;
        }

        h1 {
          font-size: 2.3rem;
        }
    }

  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: 6rem;
    display: flex;
    align-items: center;
  }

  h1 {
    font-weight: 700;
  }

  .main-img{
    display: none;
  }

  .other-img {
    display: none;
  }

  @media screen and (min-width: 768px) {
    .container {
      grid-template-columns: 1fr 1fr;
      column-gap: 6rem;
    }

    .main-img {
      display: block;
    }
  }
`;

export default Home;