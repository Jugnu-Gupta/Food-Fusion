import React, { useEffect, useState } from 'react';
import FoodItem from '../components/FootItem';
import { useSelector } from 'react-redux';
import { LuShoppingBag } from "react-icons/lu";
import { PiHouseLineLight } from "react-icons/pi";
import { RiEBike2Line } from "react-icons/ri";
import { MdOutlineBook } from "react-icons/md";
import { twMerge } from 'tailwind-merge';

const Cart = () => {
    const foodItems = useSelector(store => store.cart.items);
    const [itemTotal, setItemTotal] = useState(0);

    useEffect(() => {
        setItemTotal(foodItems.reduce((total, item) => {
            total = total + (item.price * item.quantity) / 100;
            return total;
        }, 0));
    }, [foodItems]);

    return (
        <div className='max-w-4xl px-6 mx-auto'>
            {
                foodItems.map((foodItem, index) => {
                    return (<FoodItem key={foodItem.id} foodItem={foodItem}
                        printLine={(index + 1 !== foodItems.length)} />
                    )
                })
            }
            <div className='max-w-xs mx-auto'>
                <h1 className='text-2xl font-bold text-center py-5'> Bill Summary</h1>
                <div className='flex justify-between mb-2'>
                    <h2 className='flex items-center gap-2'>
                        <LuShoppingBag className='inline-block' /> Item total</h2>
                    <p>₹{itemTotal}</p>
                </div>
                <div className='flex justify-between mb-2'>
                    <h2 className='flex items-center gap-2'>
                        <PiHouseLineLight className='inline-block' /> GST</h2>
                    <p>₹{Math.round(itemTotal * 8) / 100}</p>
                </div>
                <div className='flex justify-between mb-2'>
                    <h2 className='flex items-center gap-2'>
                        <RiEBike2Line className='inline-block' /> Delivery charges</h2>
                    <p>₹{!itemTotal ? "0" : "100.00"}</p>
                </div>
                <div className='flex justify-between mb-2'>
                    <h2 className='flex items-center gap-2'>
                        <MdOutlineBook className='inline-block' /> Platform fee</h2>
                    <p>₹{!itemTotal ? "0" : "5.00"}</p>
                </div>
                <hr className='bg-black w-full my-2' />
                <div className='flex justify-between'>
                    <h1 className='text-lg font-bold'>Grant Total</h1>
                    <p className='text-lg font-bold'>₹{itemTotal === 0 ? "0" :
                        (Math.round(itemTotal * 108) / 100 + 105.00)}</p>
                </div>
                <button className={twMerge(["flex justify-between items-center gap-6",
                    "mx-auto mt-5 px-3 py-1 rounded-lg bg-gray-900 text-white",
                    !itemTotal ? "opacity-70" : "opacity-100"])}>
                    <div>
                        <p className='text-sm font-semibold'>₹{!itemTotal ? "0" :
                            (Math.round(itemTotal * 108) / 100 + 105.00)}</p>
                        <p className='text-sm'>Total</p>
                    </div>
                    <h1 className='text-xl font-bold'> Place Order</h1>
                </button>
            </div>
        </div >
    )
}

export default Cart;