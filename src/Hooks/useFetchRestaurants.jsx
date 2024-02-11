import { useEffect, useState } from "react";
import { Restaurants_API } from '../constant';

const useFetchRestaurants = () => {
    const [restaurantList, setRestaurantList] = useState([]);

    useEffect(() => {
        fetchRestaurants();
    }, []);

    const fetchRestaurants = async () => {
        try {
            // const response = await fetch(Restaurants_API);
            const response = await fetch("https://food-villa-server.vercel.app/api/restaurants?lat=28.4594965&lng=77.0266383");
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