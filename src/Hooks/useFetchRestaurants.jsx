import { useEffect, useState } from "react";
import { Restaurants_API } from '../constant';

const useFetchRestaurants = () => {
    const [restaurantList, setRestaurantList] = useState([]);

    useEffect(() => {
        fetchRestaurants();
        window.scrollTo(0, 0);
    }, []);

    const fetchRestaurants = async () => {
        try {
            const response = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
            const { data } = await response.json();
            console.log(data?.cards);

            setRestaurantList(data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        catch (e) {
            alert(e);
        }
    }
    return restaurantList;
}

export default useFetchRestaurants;