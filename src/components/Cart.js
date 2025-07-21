import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { use } from "react";
import { clearCart } from "../utils/Slice";

const Cart = ()=>{

    const cartItems = useSelector((store)=>store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());
    }
    return(
        <div className="text-center m-4 p-4 text-2xl">
            <h1 className="font-bold">Cart Items</h1>
            <div className="w-6/12 m-auto">
            <button className="bg-red-500 text-white p-2 m-2 rounded-md"
            onClick={handleClearCart}
            >
                Clear Cart
            </button>
            <ItemList list={cartItems}/>
            </div>
            {cartItems.length === 0 && <h1 className="text-2xl font-bold">Cart is Empty</h1>}
        </div>
    )
};
export default Cart;