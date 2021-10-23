import React from "react";
import { useGlobalContext } from "../context/app.context";

const Navbar = () => {
    const { user, logout } = useGlobalContext();

    return (
        <div className='wrapper'>
            {user && (
                <div className='nav-links'>
                    <h5>Hello, {user}</h5>
                    <button className='btn' onClick={logout}>
                        logout
                    </button>
                </div>
            )}
        </div>
    )
}

export default Navbar;