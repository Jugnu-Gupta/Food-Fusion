import React from 'react';
import ErrorImg from '../assets/Error-page-img.png';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();

    return (
        <div className='text-center flex flex-col justify-center items-center'>
            <img src={ErrorImg} alt="" />
            <h1>This page isn't available. Sorry about that.</h1>
            <button onClick={() => navigate(-1)} className='text-white 
                font-bold bg-orange rounded-md px-4 py-1 mt-2'>Go Back</button>
        </div>
    )
}

export default Error;