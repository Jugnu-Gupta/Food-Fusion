import React from 'react';
import { Swiggy_IMG } from '../constant';
import ItemQtyCounter from './ItemQtyCounter';


const FootItem = ({ foodItem, printLine }) => {
    const price = foodItem?.price || foodItem?.variantsV2.pricingModels[0].price;
    // console.log(quantity);
    // console.log(Items);

    return (
        <div>
            <div className='py-5 flex justify-between gap-4 max-w-4xl'>
                <div>
                    <p className='text-lg font-semibold'>{foodItem?.name}</p>
                    <p className='text-gray-900 font-medium'>₹ {price / 100}</p>
                    <p className='text-gray-700 font-normal text-sm pt-2'>{foodItem?.description}</p>
                </div>
                <div className='w-40 flex flex-col justify-center items-center'>
                    {foodItem?.imageId && <div className='w-40'><img className="w-full h-32 rounded-md" src={Swiggy_IMG + foodItem?.imageId} alt="" /></div>}
                    <ItemQtyCounter foodItem={foodItem} />
                </div>
            </div>
            {printLine && <div className='h-1 w-full bg-gray-300'></div>}
        </div>
    )
}

export default FootItem;