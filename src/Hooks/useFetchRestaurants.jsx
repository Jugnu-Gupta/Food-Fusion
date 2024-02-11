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

            setRestaurantList(await data?.cards.reduce((Restaurants, card) => {
                const restaurant = card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                if (restaurant && Restaurants.length === 0) {
                    restaurant.forEach(element => {
                        Restaurants.push(element);
                    });
                }
                return Restaurants;
            }, []));
        }
        catch (e) {
            alert(e);
        }
    }
    return restaurantList;
}

export default useFetchRestaurants;