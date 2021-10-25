import React from "react";
import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { useGlobalContext } from "../context/app.context";

const Navbar = () => {
    const { user, logout } = useGlobalContext();

    return (
        <Wrapper>
            <div className='nav-center'>
                <NavLogo to='/'>LISTKU</NavLogo>
                {user && (
                    <div className='nav-links'>
                        <h5>Hello, {user}</h5>
                        <button className='btn' onClick={logout}>
                            logout
                        </button>
                    </div>
                )}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.nav`
  background: var(--primary-400);
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;

  .nav-center {
    width: var(--fluid-width);
    max-width: var(--max-width);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  .nav-links {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav-links h5 {
    margin: 0;
    margin-right: 2rem;
  }
   h5 {
       color: white;
   }
`;

const NavLogo = styled(LinkRouter)`
    color: var(--white);
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    text-decoration: none;
    font-size: 1.3rem;
    letter-spacing: 3px;
`


export default Navbar;