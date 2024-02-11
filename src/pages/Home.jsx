import React, { useEffect, useState } from 'react';
import useFetchRestaurants from '../Hooks/useFetchRestaurants';
import RestaurantCard from '../components/RestaurantCard';
import RestCardShimmer from '../components/shimmer/RestCardShimmer';
import { Link } from 'react-router-dom';

const changeHandler = (restName, restaurantList, setFilteredRestaurant) => {
    console.log(restName);
    setFilteredRestaurant(restaurantList.filter(restaurant => {
        console.log(restaurant?.info?.name.toLowerCase() + " + " + restName.toLowerCase() + " =" + restaurant?.info?.name.includes(restName));
        return restaurant?.info?.name.toLowerCase().includes(restName.toLowerCase());
    }));
}

const Home = () => {
    const restaurantList = useFetchRestaurants();
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [restName, setRestName] = useState("");
    // console.log(restaurantList);
    // console.log(filteredRestaurant);

    useEffect(() => {
        setFilteredRestaurant(restaurantList);
    }, [restaurantList])

    return (
        <div className='max-w-4xl mx-auto'>
            <div className='flex mt-6 mb-8 mx-auto w-2/3 max-w-2xl h-10 xs:w-3/4'>
                <input className='w-full px-2 border-[1px] border-orange rounded-l-md truncate' type="text"
                    name="filter" id="filter" placeholder='Find restaurants near you...'
                    value={restName} onChange={(event) => { setRestName(event.target.value); changeHandler(event.target.value, restaurantList, setFilteredRestaurant) }} />
                <button className='text-white font-bold bg-orange rounded-r-md px-4 py-1'>Search</button>
            </div>

            <div className='flex flex-wrap justify-center gap-6'>
                {
                    !restaurantList.length ?
                        Array(12).fill("").map((element, index) => <RestCardShimmer key={index} />)

                        : (!filteredRestaurant.length ?
                            <div className='my-10'> No match found for "{restName}"</div>
                            : filteredRestaurant.map((restaurant) => {
                                return (<Link to={`/restaurants/${restaurant?.info?.id}`} key={restaurant?.info?.id}>
                                    <RestaurantCard restaurant={restaurant} /></Link>)
                            })
                        )
                }
            </div>
        </div>
    )
}

export default Home;