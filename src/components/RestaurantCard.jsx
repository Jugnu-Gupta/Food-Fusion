import React from 'react'
import { IMG_API } from '../constant';
import { FaStar } from "react-icons/fa";


const RestaurantCard = ({ restaurant }) => {

    return (
        <div className={'w-64 rounded-lg p-2 h-full hover:shadow-xl hover:scale-110 transition-all duration-200'}
            style={{ boxShadow: "0px 1px 10px #D3D3D3" }}>

            <img className='w-full h-48 rounded-md pb-1' src={IMG_API + restaurant?.info?.cloudinaryImageId}
                alt="Restuarant Img" loading='lazy' />
            <h1 className='font-bold text-xl'>{restaurant?.info?.name}</h1>
            <div className='flex justify-start items-center'>
                <FaStar className='bg-green-600 rounded-full text-white p-[3px] w-5 h-5' />
                <p className='pl-1 font-bold'>{restaurant?.info?.avgRating}</p>

                {/* Delivery Time */}
                <p className="pl-2 font-bold pb-1">
                    <span className='text-xl'>&middot;</span> &nbsp;{restaurant?.info?.sla?.slaString}</p>
            </div>

            <p className='text-gray-600 font-semibold truncate'>{restaurant?.info?.cuisines.join(", ")}</p>
            <h2 className='text-gray-600 font-semibold'>{restaurant?.info?.areaName}</h2>
        </div >
    )
}

export default RestaurantCard;