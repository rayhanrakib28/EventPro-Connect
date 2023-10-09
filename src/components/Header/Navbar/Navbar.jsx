import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navlinks = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-transparent bg-clip-text bg-gradient-to-r from-[#d050d6] to-[#3e87f5] font-bold" : ""
                }
            >
                Home
            </NavLink>

        </li>
        <li>
            <NavLink
                to="/bookmarked"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-transparent bg-clip-text bg-gradient-to-r from-[#d050d6] to-[#3e87f5] font-bold" : ""
                }
            >
                Bookmarked
            </NavLink>

        </li>
        <li>
            <NavLink
                to="/schedules"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-transparent bg-clip-text bg-gradient-to-r from-[#d050d6] to-[#3e87f5] font-bold" : ""
                }
            >
                ScheduleDemo
            </NavLink>

        </li>
        <li>
            <NavLink
                to="/register"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-transparent bg-clip-text bg-gradient-to-r from-[#d050d6] to-[#3e87f5] font-bold" : ""
                }
            >
                Register
            </NavLink>

        </li>
        <li>
            <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-transparent bg-clip-text bg-gradient-to-r from-[#d050d6] to-[#3e87f5] font-bold" : ""
                }
            >
                Login
            </NavLink>

        </li>
    </>

    return (
        <div className='bg-black'>
            <div className="navbar container mx-auto pt-4 bg-transparent">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#fff"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] bg-white p-2 shadow rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <a href='/' className="btn btn-ghost text-xl text-white">EventPro Connect</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-5 text-white px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end pr-2 lg:pr-0">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content text-center font-bold bg-base-100 rounded-box w-48">
                            <li className='pb-2'>Username</li>
                            <NavLink>Log Out</NavLink>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;