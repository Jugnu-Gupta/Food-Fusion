import Shimmer from './Shimmer';
import React from 'react';
import './Shimmer.css';

const RestShimmer = () => {
    return (
        <div>
            <div className='bg-gray-900 py-5 px-6 w-full'>
                <div className='flex items-center gap-6 max-w-4xl mx-auto'>
                    <Shimmer classess="w-60 h-48 rounded-md mb-2" />
                    <div>
                        <Shimmer classess="w-60 h-6 my-4 rounded-md mb-2" />
                        <Shimmer classess="w-40 h-6 my-4 rounded-md mb-2" />
                        <Shimmer classess="w-40 h-6 my-4 rounded-md mb-2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RestShimmer;