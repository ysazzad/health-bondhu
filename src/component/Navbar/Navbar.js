import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div class="navbar bg-base-100 navbar-bg">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a class=" normal-case text-xl text-primary ml-44 w-10 font-bold" >Doc<span className='text-secondary'>mic.</span> </a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li ><Link to="/" >Home</Link></li>
                    <li><Link to="/about"> About</Link></li>
                    <li><Link to="/department"> Departments</Link></li>
                    <li><Link to="/pages"> Pages</Link></li>
                    <li><Link to="/blog"> Blog</Link></li>
                    <li><Link to="/contacts"> Contacts</Link></li>
                </ul>
            </div>
            <button className='btn btn-primary mr-40'>Free Consulation</button>
        </div>
    );
};

export default Navbar;