import React, { useEffect } from 'react';
import photo from '../assets/photo.jpg';
import burger from '../assets/burger.png';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='mt-5 max-w-4xl px-6 mx-auto'>
            <h1 className='text-center  text-2xl font-bold'>About Me</h1>
            <div className='w-40 mx-auto my-3'>
                <img className='rounded-full' src={photo} alt="photo" loading='lazy' />
            </div>
            <p className='max-w-lg mx-auto text-center'>Specialist @codeforces | React.js |
                Javascript | Frontend Developer | NIT Delhi'26</p>

            <div className='mt-10 mb-5 flex justify-between xs:flex-col'>
                <div>
                    <h1 className='md:text-3xl sm:text-2xl text-lg font-bold text-gray-600'>Welcome to</h1>
                    <h1 className='md:text-3xl sm:text-2xl text-lg font-bold text-gray-600'>The world of</h1>
                    <h1 className='md:text-3xl sm:text-2xl text-lg font-bold text-white bg-orange inline-block 
                        px-2 py-1 my-2 rounded-lg'>Tasty & Fresh Food</h1>
                    <h2 className='md:text-sm sm:text-xs font-semibold text-gray-600'>"Better you will feel if
                        you eat a <span className='text-orange'>Food Fusion</span> healthy meal"</h2>
                </div>
                <img className='sm:w-60 md:w-80 w-80' src={burger} alt="Burger" loading='lazy' />
            </div>
        </div>
    )
}

export default About;