import { RestaurantInfo_API1, RestaurantInfo_API2 } from '../constant';
import { useEffect, useState } from "react";

const useFetchRestaurantInfo = (restId) => {
    const [menu, setMenu] = useState([]);
    const [restaurantInfo, setRestaurantInfo] = useState();

    useEffect(() => {
        fetchRestaurantInfo();
    }, []);

    const fetchRestaurantInfo = async () => {
        try {
            const response = await fetch(RestaurantInfo_API1 + restId + RestaurantInfo_API2);
            const { data } = await response.json();

            setMenu(data?.cards[data?.cards.length - 1]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
            setRestaurantInfo(data?.cards[0].card?.card?.info || data?.cards[2].card?.card?.info);
        }
        catch (e) {
            alert(e);
        }
    }
    return { menu, restaurantInfo };
}

export default useFetchRestaurantInfo;