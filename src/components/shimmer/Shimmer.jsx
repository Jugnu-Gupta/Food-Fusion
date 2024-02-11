import React from 'react'
import './Shimmer.css';

const Shimmer = ({ classess }) => {
    return (
        <div className={'shimmer ' + classess}>
            <div className='shimmer-child'></div>
        </div>
    )
}

export default Shimmer;