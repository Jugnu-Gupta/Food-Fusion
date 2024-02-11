import React from 'react';
import useFetchRestaurantInfo from '../Hooks/useFetchRestaurantInfo';
import RestaurantCuisine from '../components/RestaurantCuisine';
import { useParams } from 'react-router-dom';
import { IMG_API } from '../constant';
import { FaStar } from 'react-icons/fa';
import RestShimmer from '../components/shimmer/RestShimmer';

const Restaurant = () => {
    const { restId } = useParams();
    const { menu, restaurantInfo } = useFetchRestaurantInfo(restId);

    return (
        <>
            {!restaurantInfo ? <RestShimmer /> :
                <div className='bg-gray-900 py-5 px-6 w-full'>
                    <div className="max-w-4xl w-full mx-auto text-white flex items-center justify-start gap-5 sm:gap-10">
                        <div>
                            <img className='w-60 h-48 rounded-md' src={IMG_API + restaurantInfo?.cloudinaryImageId}
                                alt="Restuarant Img" loading='lazy' />
                        </div>
                        <div>
                            <h1 className='font-bold text-2xl'>{restaurantInfo?.name}</h1>

                            <div className='flex justify-start items-center my-2'>
                                <FaStar className='bg-green-600 rounded-full text-white p-[3px] w-5 h-5' />
                                <p className='pl-1 font-bold'>{restaurantInfo?.avgRating}</p>

                                {/* Delivery Time */}
                                <p className="pl-2 font-bold"><span className='text-lg px-2'>|</span>
                                    &nbsp;{restaurantInfo?.sla?.slaString}</p>
                            </div>
                            <p className='text-gray-300 font-semibold truncate'>{restaurantInfo?.cuisines.join(", ")}</p>
                            <h2 className='text-gray-300 font-semibold'>{restaurantInfo?.areaName}</h2>
                        </div>
                    </div>
                </div >
            }
            <div className='bg-gray-300 my-5 max-w-4xl mx-auto'>
                {
                    !menu || !menu.length ? <RestaurantCuisine foodItems={null} />
                        : menu.map((category, index) => {
                            if (category?.card?.card?.itemCards) {
                                return (<RestaurantCuisine key={index}
                                    foodItems={category?.card?.card?.itemCards}
                                    title={category?.card?.card?.title} />)
                            }
                            return;
                        })
                }
            </div>
        </>
    )
}

export default Restaurant;