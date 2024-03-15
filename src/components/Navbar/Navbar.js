import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const manuItem = <React.Fragment>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/appointment">Appointment</Link></li>
        <li><Link to="/">Reviews</Link></li>
        <li><Link to="/">Contact Us</Link></li>
        <li><Link to="/">Login</Link></li>
    </React.Fragment>
    return (
        <div className="navbar bg-base-100 lg:px-8">
            <div className="navbar-start">

                <Link to="/" className="btn btn-ghost text-xl">Doctors Portal</Link>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 float-end" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {manuItem}
                    </ul>
                </div>
                <div className='hidden lg:flex'>
                    <ul className="menu menu-horizontal px-1">
                        {manuItem}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;