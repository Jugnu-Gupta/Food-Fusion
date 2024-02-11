import Shimmer from './Shimmer';
import React from 'react';
import './Shimmer.css';

const FoodItemShimmer = ({ printLine }) => {
    return (
        <div>
            <div className='py-5 flex justify-between gap-4 max-w-4xl'>
                <div>
                    <Shimmer classess="w-40 h-6 my-3 rounded-md" />
                    <Shimmer classess="w-20 h-6 my-3 rounded-md" />
                    <Shimmer classess="w-60 h-6 my-3 rounded-md" />
                </div>
                <div className='w-40 flex flex-col justify-center items-center'>
                    <Shimmer classess="w-40 h-32 rounded-md" />
                    <Shimmer classess="w-20 h-6 rounded-md" />
                </div>
            </div>
            {printLine && <div className='h-1 w-full bg-gray-300'></div>}
        </div>
    )
}

export default FoodItemShimmer;