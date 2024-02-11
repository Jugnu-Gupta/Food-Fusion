import React from 'react'
import './Shimmer.css';
import Shimmer from './Shimmer';

const RestCardShimmer = () => {
    return (
        <div className='w-64 rounded-lg p-2 h-80' style={{ boxShadow: "0px 1px 10px #D3D3D3" }}>
            <Shimmer classess="w-full h-48 rounded-md mb-2" />
            <Shimmer classess="w-2/3 h-6 my-3 rounded-md mb-2" />
            <Shimmer classess="w-2/3 h-6 my-3 rounded-md mb-2" />
            <Shimmer classess="w-2/3 h-6 my-3 rounded-md mb-2" />
        </div>
    )
}

export default RestCardShimmer;