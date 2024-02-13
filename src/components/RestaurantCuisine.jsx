import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";
import FoodItem from './FootItem';
import FoodItemShimmer from './shimmer/FoodItemShimmer';
import Shimmer from './shimmer/Shimmer';
import { twMerge } from 'tailwind-merge';


const RestaurantCuisine = ({ foodItems, title }) => {
    const [hideItems, setHideItems] = useState(false);

    return (
        <div className='px-5 bg-white'>
            <div className='flex justify-between items-center pt-5 mt-5'>
                {
                    !foodItems ?
                        <>
                            <Shimmer classess="w-40 h-6 rounded-md" />
                            <Shimmer classess="w-10 h-6 mr-5 rounded-md" />
                        </>
                        : <>
                            <h1 className={twMerge('text-xl font-bold',
                                (hideItems ? 'mb-5' : ''))}>
                                {title + ` (${foodItems.length})`}</h1>

                            <button onClick={() => setHideItems(!hideItems)}>
                                {!hideItems ?
                                    <FaChevronUp className='mr-5 text-lg' />
                                    : <FaChevronDown className='mr-5 text-lg' />
                                }
                            </button>
                        </>
                }
            </div>
            {hideItems ? "" :
                !foodItems ? Array(10).fill("").map((element, index) => {
                    return (<FoodItemShimmer key={index} printLine={(index + 1) !== 10} />)
                }) :
                    foodItems.map((foodItem, index) => {
                        return (<FoodItem key={foodItem?.card?.info?.id}
                            foodItem={foodItem?.card?.info}
                            printLine={(index + 1 !== foodItems.length)} />
                        )
                    })
            }
        </div >
    )
}

export default RestaurantCuisine;