import React from 'react'
import useFetchRestaurants from '../Hooks/useFetchRestaurants';
import RestaurantCard from '../components/RestaurantCard';
import { Link } from 'react-router-dom';

const Home = () => {
    const restaurantList = useFetchRestaurants();
    console.log(restaurantList);

    return (
        <div>
            <div className='flex mt-6 mb-8 mx-auto w-1/2 max-w-2xl h-10'>
                <input className='w-full px-2 border-[1px] border-orange rounded-l-md truncate' type="text" name="search-rest" id="search-rest" placeholder='Find restaurants near you...' />
                <button className='text-white font-bold bg-orange rounded-r-md px-4 py-1'>Search</button>
            </div>

            <div className='flex flex-wrap justify-center gap-6'>
                {
                    restaurantList.map((restaurant) => {
                        return (<Link to={`/restaurants/${restaurant?.info?.id}`} key={restaurant?.info?.id}>
                            <RestaurantCard restaurant={restaurant} /></Link>)
                    })
                }
            </div>
        </div>
    )
}

export default Home;