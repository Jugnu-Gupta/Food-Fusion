import React, { useEffect } from 'react';
import FoodItem from '../components/FootItem';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
    const foodItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    console.log(foodItems);

    return (
        <div className='max-w-3xl px-6 mx-auto'>
            {
                foodItems.map((foodItem, index) => {
                    return (<FoodItem key={foodItem.id}
                        foodItem={foodItem} printLine={(index + 1 !== foodItems.length)} />
                    )
                })
            }
        </div>
    )
}

export default Cart;