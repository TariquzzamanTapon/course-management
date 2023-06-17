import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/logo.png'
import { AuthContext } from '../../../AuthProvider/AuthProver';

// Website logo or Website name, Home, Instructors, Classes, Dashboard and User profile picture
const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut();
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/instructor'>Instructors</Link></li>
                            <li><Link to='/'>Classes</Link></li>
                            {
                                user ? <><li><Link to='/'>Dashboard</Link></li></> : ""
                            }
                        </ul>
                    </div>
                    <Link className=" font-bold normal-case text-xl">Sports Academy</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/instructor'>Instructors</Link></li>
                        <li><Link to='/'>Classes</Link></li>
                        {
                            user ? <><li><Link to='/'>Dashboard</Link></li></> : ""
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className='flex'>
                                <img className='w-10 rounded-full mx-2' src={user?.photoURL} alt="" />
                                <Link onClick={handleLogout} className='btn btn-success'>Logout</Link>
                            </div>
                            : <Link to="/login" className='btn btn-primary'>Login</Link>

                    }

                </div>
            </div>
            <hr />
        </div>
    );
};

export default NavBar;