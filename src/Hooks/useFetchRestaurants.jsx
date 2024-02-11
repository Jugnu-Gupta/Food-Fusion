import { useEffect, useState } from "react";
import { Restaurants_API } from '../constant';

const useFetchRestaurants = () => {
    const [restaurantList, setRestaurantList] = useState([]);

    useEffect(() => {
        fetchRestaurants();
    }, []);

    const fetchRestaurants = async () => {
        try {
            // const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const response = await fetch(Restaurants_API);
            const { data } = await response.json();

            // console.log(data?.cards);

            setRestaurantList(await data?.cards.reduce((Restaurants, card) => {
                const restaurant = card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                if (restaurant && Restaurants.length === 0) {
                    restaurant.forEach(element => {
                        Restaurants.push(element);
                    });
                }
                return Restaurants;
            }, []));
            // console.log(data?.cards[2]?.card?.card);
            // console.log(data?.cards);
        }
        catch (e) {
            alert(e);
        }
    }
    return restaurantList;
}

export default useFetchRestaurants;