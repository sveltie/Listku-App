import React from "react";
import { HomeWrapper } from "./pages.style";
import illust from '../assets/home-illust.svg'
import { Link, Redirect } from "react-router-dom";
import { useGlobalContext } from '../context/app.context';

const Home = () => {
    const { user } = useGlobalContext();

    return (
      <React.Fragment>
        {user && <Redirect to='/dashboard' />}
        <HomeWrapper>
          <div className='container page'>
            <div className='info'>
              <h1>
                TO-DO APP
              </h1>
              <p>
                A web application with user interfaces for managing task 
                with CRUD functionality written with React. Listku is an 
                application that is made with a purpose to track user 
                to-do/task list, schedule, etc like any basic to-do 
                application. Users will be able to manage, edit, and 
                delete their tasks.
              </p>

              <Link to='/register' className='btn hero-btn'>
                Login
              </Link>
              <div class="divider" />
              <a href="https://github.com/Yukii2k/Listku-Server" className='btn github-btn'>
                GitHub
              </a>
            </div>
            <img className="img main-img" src={illust} alt='illust'></img>
          </div>
          <div className="home-img">
            <img className="img mobile-img" src={illust} alt='illust'></img>
          </div>
        </HomeWrapper>
      </React.Fragment>
    )
}

export default Home;