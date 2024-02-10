import React from 'react'
import useFetchRestaurantInfo from '../Hooks/useFetchRestaurantInfo';
import RestaurantCuisine from '../components/RestaurantCuisine';
import { useParams } from 'react-router-dom';
import { Swiggy_IMG } from '../constant';
import { FaStar } from 'react-icons/fa';

const Restaurant = () => {
    const { restId } = useParams();
    const { menu, restaurantInfo } = useFetchRestaurantInfo(restId);
    // console.log(menu);
    // console.log(restaurantInfo);

    return (
        <div>
            <div className='bg-gray-900 py-5 px-6 w-full'>
                <div className="max-w-3xl w-full mx-auto text-white flex items-center justify-start gap-5">
                    <div>
                        <img className='w-60 h-48 rounded-md' src={Swiggy_IMG + restaurantInfo?.cloudinaryImageId} alt="Restuarant Img" />
                    </div>

                    <div>
                        <h1 className='font-bold text-2xl'>{restaurantInfo?.name}</h1>

                        <div className='flex justify-start items-center my-2'>
                            <FaStar className='bg-green-600 rounded-full text-white p-[3px] w-5 h-5' />
                            <p className='pl-1 font-bold'>{restaurantInfo?.avgRating}</p>

                            {/* Delivery Time */}
                            <p className="pl-2 font-bold"><span className='text-lg px-2'>|</span> &nbsp;{restaurantInfo?.sla?.slaString}</p>
                        </div>
                        <p className='text-gray-300 font-semibold truncate'>{restaurantInfo?.cuisines.join(", ")}</p>
                        <h2 className='text-gray-300 font-semibold'>{restaurantInfo?.areaName}</h2>
                    </div>
                </div>
            </div >
            <div className='bg-gray-300 my-5 max-w-3xl mx-auto'>
                {
                    menu.map((category, index) => {
                        if (category?.card?.card?.itemCards) {
                            return (<RestaurantCuisine key={index} foodItems={category?.card?.card?.itemCards}
                                title={category?.card?.card?.title} />)
                        }
                        return;
                    })
                }
            </div>
        </div>
    )
}

export default Restaurant;