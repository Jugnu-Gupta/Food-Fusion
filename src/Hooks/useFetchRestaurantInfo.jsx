import { useEffect, useState } from "react";

const useFetchRestaurantInfo = (restId) => {
    const [menu, setMenu] = useState([]);
    const [restaurantInfo, setRestaurantInfo] = useState();

    useEffect(() => {
        fetchRestaurantInfo();
    }, []);

    const fetchRestaurantInfo = async () => {
        try {
            const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${restId}&catalog_qa=undefined&submitAction=ENTER`);
            const { data } = await response.json();

            setMenu(data?.cards[data?.cards.length - 1]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
            setRestaurantInfo(data?.cards[0].card?.card?.info || data?.cards[2].card?.card?.info);

            // console.log(restaurantInfo);
        }
        catch (e) {
            alert(e);
        }
    }
    return { menu, restaurantInfo };
}

export default useFetchRestaurantInfo;