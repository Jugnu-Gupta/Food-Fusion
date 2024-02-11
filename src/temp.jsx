import useItemQtyCounter from '../Hooks/useItemQtyCounter';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaMinus, FaPlus } from "react-icons/fa";


const ItemQtyCounter = ({ foodItem }) => {
    const { addItemHandler, removeItemHandler } = useItemQtyCounter();
    const [quantity, setQuantity] = useState(0);
    const Items = useSelector(store => store.cart.items);
    const dispatch = useDispatch();

    useEffect(() => {
        setQuantity(Items.reduce((Qty, item) => {
            if (item.id === foodItem?.id)
                Qty = item.quantity;
            return Qty;
        }, 0))
    }, []);

    return (
        <div>
            {
                !quantity ?
                    <button onClick={() => { setQuantity(quantity + 1); addItemHandler(dispatch, foodItem, quantity + 1, setQuantity) }}
                        className='bg-gray-900 text-white rounded-md px-4 py-1'>Add</button>

                    : <button className='bg-gray-900 text-white rounded-md px-2 py-1 flex items-center justify-between'>

                        <FaMinus className='text-xs hover:text-sm transition-all duration-200'
                            onClick={() => { setQuantity(quantity - 1); removeItemHandler(dispatch, foodItem, quantity - 1, setQuantity) }} />

                        <div className='px-3 font-semibold'>{quantity}</div>

                        <FaPlus className='text-xs hover:text-sm transition-all duration-200'
                            onClick={() => { setQuantity(quantity + 1); addItemHandler(dispatch, foodItem, quantity + 1, setQuantity) }} />

                    </button>
            }
        </div>
    )
}

export default ItemQtyCounter;