import React from 'react';
import { FaChevronUp } from "react-icons/fa6";
import FoodItem from './FootItem';

const RestaurantCuisine = ({ foodItems, title }) => {
    // console.log(foodItems);

    return (
        <div className='px-5 bg-white'>
            <div className='flex justify-between items-center pt-5 mt-5'>
                <h1 className='text-xl font-bold'>{title + ` (${foodItems.length})`}</h1>
                <button><FaChevronUp className='mr-5 text-lg' /></button>
            </div>
            {
                foodItems && foodItems.map((foodItem, index) => {
                    return (<FoodItem key={foodItem?.card?.info?.id}
                        foodItem={foodItem?.card?.info} printLine={(index + 1 !== foodItems.length)} />
                    )
                })
            }
        </div>
    )
}

export default RestaurantCuisine;