import { useEffect, useState } from "react";
import { Restaurants_API } from '../constant';

const useFetchRestaurants = () => {
    const [restaurantList, setRestaurantList] = useState([]);

    useEffect(() => {
        fetchRestaurants();
    }, []);

    const fetchRestaurants = async () => {
        try {
            const response = await fetch(Restaurants_API);
            const { data } = await response.json();

            setRestaurantList(data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        catch (e) {
            alert(e);
        }
    }
    return restaurantList;
}

export default useFetchRestaurants;