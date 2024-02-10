import React from 'react';
import logo from '../assets/logo.png';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const username = "";

    return (
        <div className='flex justify-between px-4 py-2 shadow-xl'>
            <div className=' w-16'>
                <img src={logo} alt="logo" />
            </div>

            {
                username !== "" &&
                <div>
                    {username}
                </div>
            }

            <div className='flex gap-6 items-center'>
                <Link to="/"><h2 className='font-bold text-sm text-gray-700'>Home</h2></Link>
                <Link to="/about"><h2 className='font-bold text-sm text-gray-700'>About</h2></Link>
                <Link to="/contact"><h2 className='font-bold text-sm text-gray-700'>Contact</h2></Link>
                <Link to="/cart"><FaShoppingCart className='font-bold text-xl text-gray-700' /></Link>
                <Link to="/">
                    <button className='font-bold text-sm text-gray-700'>Logout</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;