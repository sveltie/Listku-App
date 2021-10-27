import React from "react";
import { Wrapper, NavLogo } from "./components.style";
import { useGlobalContext } from "../context/app.context";

const Navbar = () => {
    const { user, logout } = useGlobalContext();

    return (
        <Wrapper>
            <div className='nav-center'>
                <NavLogo to='/'>LISTKU</NavLogo>
                {user && (
                    <div className='nav-links'>
                        <h5>{user}</h5>
                        <button className='btn btn-out' onClick={logout}>
                            logout
                        </button>
                    </div>
                )}
            </div>
        </Wrapper>
    )
}


export default Navbar;