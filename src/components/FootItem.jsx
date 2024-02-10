import React, { useEffect, useState } from 'react';
import { Swiggy_IMG } from '../constant';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, updateItemQuantity } from '../redux/cartSlice';
import { FaMinus, FaPlus } from "react-icons/fa";

const removeItemHandler = async (dispatch, foodItem, quantity) => {
    await setQuantity(quantity - 1);
    if (quantity === 0) {
        dispatch(removeItem(foodItem?.id));
    } else {
        dispatch(updateItemQuantity({ id: foodItem?.id, quantity: quantity }));
    }
}

const addItemHandler = async (dispatch, foodItem, quantity) => {
    if (quantity === 1) {
        const foodInfo = {
            id: foodItem?.id,
            name: foodItem?.name,
            price: foodItem?.price || foodItem?.variantsV2.pricingModels[0]?.price,
            quantity: 1,
            description: foodItem?.description,
            imageId: foodItem?.imageId,
        }
        dispatch(addItem(foodInfo));
    }
    else {
        dispatch(updateItemQuantity({ id: foodItem?.id, quantity: quantity }));
    }
}

const FootItem = ({ foodItem, printLine }) => {
    const [quantity, setQuantity] = useState(0);
    const Items = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    const price = foodItem?.price || foodItem?.variantsV2.pricingModels[0].price;
    console.log(quantity);

    // console.log(foodItem);
    // console.log("price " + price);

    useEffect(() => {
        // setQuantity(Items.reduce((Qty, item) => {
        //     if (item.id === foodItem?.id)
        //         Qty = item.quantity;
        //     return Qty;
        // }, 0))
    }, []);

    return (
        <div>
            <div className='py-5 flex justify-between gap-4 max-w-3xl'>
                <div>
                    <p className='text-lg font-semibold'>{foodItem?.name}</p>
                    <p className='text-gray-900 font-medium'>₹ {price / 100}</p>
                    <p className='text-gray-700 font-normal text-sm pt-2'>{foodItem?.description}</p>
                </div>
                <div className='w-40 flex flex-col justify-center items-center'>
                    {foodItem?.imageId && <div className='w-40'><img className="w-full h-32" src={Swiggy_IMG + foodItem?.imageId} alt="" /></div>}
                    {
                        quantity === 0 ?
                            <button onClick={() => { setQuantity(quantity + 1); addItemHandler(dispatch, foodItem) }} className='bg-gray-900 text-white rounded-md px-4 py-1'>Add</button>

                            : <button className='bg-gray-900 text-white rounded-md px-2 py-1 flex items-center justify-between'>

                                <FaMinus className='text-xs hover:text-sm transition-all duration-200'
                                    onClick={() => { setQuantity(quantity - 1); removeItemHandler(dispatch, foodItem, quantity) }} />

                                <div className='px-3 font-semibold'>{quantity}</div>

                                <FaPlus className='text-xs hover:text-sm transition-all duration-200'
                                    onClick={() => { setQuantity(quantity + 1); addItemHandler(dispatch, foodItem, quantity) }} />

                            </button>
                    }
                </div>
            </div>
            {printLine && <div className='h-1 w-full bg-gray-300'></div>}
        </div>
    )
}

export default FootItem;