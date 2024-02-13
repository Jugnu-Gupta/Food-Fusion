import React from 'react';
import { IMG_API } from '../constant';
import ItemQtyCounter from './ItemQtyCounter';


const FootItem = ({ foodItem, printLine }) => {
    const price = foodItem?.price || foodItem?.variantsV2.pricingModels[0].price;

    return (
        <div>
            <div className='py-5 flex justify-between gap-4 max-w-4xl xs:gap-3'>
                <div className='max-w-2xl'>
                    <p className='text-lg font-semibold'>{foodItem?.name}</p>
                    <p className='text-gray-900 font-medium'>₹ {price / 100}</p>
                    <p className='text-gray-700 font-normal text-xs pt-2'>{foodItem?.description}</p>
                </div>
                <div className='min-w-40 xs:min-w-32 flex flex-col justify-center items-center'>
                    {foodItem?.imageId && <div className='w-40 xs:w-32'><img className="w-full h-32 xs:h-28 rounded-md"
                        src={IMG_API + foodItem?.imageId} alt="Restaurant image" loading='lazy' /></div>}
                    <ItemQtyCounter foodItem={foodItem} />
                </div>
            </div>
            {printLine && <div className='h-1 w-full bg-gray-300'></div>}
        </div>
    )
}

export default FootItem;