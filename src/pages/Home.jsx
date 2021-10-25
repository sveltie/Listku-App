import React from "react";
import styled from 'styled-components';
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

                        <Link to='/register' className='btn hero-btn'>
                            Login
                        </Link>
                    </div>
                </div>
            </Wrapper>
        </React.Fragment>
    )
}

const Wrapper = styled.div`
  .container {
    display: grid;
    align-items: center;
    margin-top: -3rem;
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
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
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