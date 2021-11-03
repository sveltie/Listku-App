import React, { useState } from "react";
import { Wrapper, NavLogo } from "./components.style";
import { useGlobalContext } from "../context/app.context";
import { FaCaretDown } from 'react-icons/fa';

const Navbar = () => {
    const { user, logout } = useGlobalContext();
    const [showLogout, setShowLogout] = useState(false);

    return (
        <Wrapper>
            <div className='nav-center'>
                <NavLogo to='/'>LISTKU</NavLogo>
                {user && (
                    <div className='btn-container'>
                        <button className='btn' onClick={() => setShowLogout(!showLogout)}>
                            {user}
                            <FaCaretDown />
                        </button>
                        <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
                            <button onClick={() => logout()} className='dropdown-btn'>
                                logout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </Wrapper>
    )
}


export default Navbar;