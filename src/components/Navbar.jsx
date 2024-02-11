import React from 'react';
import logo from '../assets/logo.png';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const count = useSelector(store => store.cart.items.length);
    const username = "";

    return (
        <div className='w-full shadow-xl'>
            <div className='max-w-4xl mx-auto flex justify-between px-6 py-2'>
                <div className=' w-16'>
                    <img src={logo} alt="logo" />
                </div>

                {
                    username !== "" &&
                    <div>
                        {username}
                    </div>
                }

                <div className='flex gap-6 items-center xs:gap-3'>
                    <Link to="/">
                        <h2 className='font-bold text-sm xs:text-xs text-gray-700'>Home</h2>
                    </Link>
                    <Link to="/about">
                        <h2 className='font-bold text-sm xs:text-xs text-gray-700'>About</h2>
                    </Link>
                    <Link to="/contact">
                        <h2 className='font-bold text-sm xs:text-xs text-gray-700'>Contact</h2>
                    </Link>
                    <Link to="/cart" className='relative'>
                        <FaShoppingCart className='font-bold text-xl xs:text-lg text-gray-700' />
                        {count !== 0 && (<div className='bg-gray-500 text-white text-[10px] rounded-full 
                            w-4 h-4 flex justify-center items-center absolute -top-2 -right-1'>{count}</div>)}
                    </Link>
                    <Link to="/">
                        <button className='font-bold text-sm xs:text-xs text-gray-700'>Logout</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;