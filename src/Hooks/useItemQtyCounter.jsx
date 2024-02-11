import { addItem, removeItem, updateItemQuantity } from '../redux/cartSlice';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import { useDispatch } from 'react-redux';


const useItemQtyCounter = () => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(0);

    const removeItemHandler = (quantity, foodItem) => {
        if (quantity === 0) {
            dispatch(removeItem(foodItem?.id));
            toast.success("Item removed from cart");
        } else {
            dispatch(updateItemQuantity({ id: foodItem?.id, quantity: quantity }));
        }
    }

    const addItemHandler = (quantity, foodItem) => {
        if (quantity === 1) {
            toast.success("Item added to cart");
            const foodInfo = {
                id: foodItem?.id,
                name: foodItem?.name,
                price: foodItem?.price ||
                    foodItem?.variantsV2?.pricingModels[0]?.price,
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
    return { quantity, setQuantity, removeItemHandler, addItemHandler };
}
export default useItemQtyCounter;