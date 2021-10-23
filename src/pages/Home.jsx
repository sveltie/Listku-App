import React from "react";
import { Link, Redirect } from "react-router-dom";
import { useGlobalContext } from '../context/app.context';

function Home() {
    const { user } = useGlobalContext();

    return (
        <React.Fragment>
            {user && <Redirect to='/dashboard' />}
            <div className='page'>
                <div className='info'>
                    <h1>
                        To Do <span>App</span>
                    </h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit 
                    esse cillum dolore eu fugiat nulla pariatur. 
                    </p>

                    <Link to='/register' className='btn'>
                        Login
                    </Link>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;