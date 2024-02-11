import useItemQtyCounter from '../Hooks/useItemQtyCounter';
import { FaMinus, FaPlus } from "react-icons/fa";
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';


const ItemQtyCounter = ({ foodItem }) => {
    const { quantity, setQuantity, addItemHandler, removeItemHandler } = useItemQtyCounter(foodItem);
    const Items = useSelector(store => store.cart.items);

    useEffect(() => {
        setQuantity(Items.reduce((Qty, item) => {
            if (item.id === foodItem?.id)
                Qty = item.quantity;
            return Qty;
        }, 0))
    }, []);

    return (
        <div>
            {!quantity ?
                <button onClick={() => { setQuantity(quantity + 1); addItemHandler(quantity + 1, foodItem) }}
                    className='bg-gray-900 text-white rounded-md px-4 py-1'>Add</button>

                : <button className='bg-gray-900 text-white rounded-md px-2 py-1 flex items-center justify-between'>

                    <FaMinus className='text-xs hover:text-sm transition-all duration-200'
                        onClick={() => { setQuantity(quantity - 1); removeItemHandler(quantity - 1, foodItem) }} />

                    <div className='px-3 font-semibold'>{quantity}</div>

                    <FaPlus className='text-xs hover:text-sm transition-all duration-200'
                        onClick={() => { setQuantity(quantity + 1); addItemHandler(quantity + 1, foodItem) }} />

                </button>
            }
        </div>
    )
}

export default ItemQtyCounter;