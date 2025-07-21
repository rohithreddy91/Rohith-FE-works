import { IMG_CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/Slice";

const ItemList = ({list})=>{
    //console.log("list", list);

    const dispatch = useDispatch();

    const handleAddItem = (l)=>{
        dispatch(addItem(l));
    }
    
    return (
        <div>
            {
                list.map((l)=>(
                    <div key = {l?.card?.info?.id} className="p-2 m-2 border-b-4 border-gray-300 flex justify-between text-left"> 
                    <div className="w-9/12">
                        <div className="py-2">
                            <span>
                                {l?.card?.info?.name} -
                            </span>
                            <span>
                                {" Rs."+l?.card?.info?.price/100 }
                            </span>
                        </div>
                            <p className="text-sm text-gray-500">
                                {l?.card?.info?.description}
                            </p>
                        </div>
                            <div className="w-[200px] m-2">
                            <div className="absolute mx-11">
                            <button className="p-2 bg-black text-white m-auto rounded-lg"
                            onClick={()=>handleAddItem(l)}
                            >Add +</button>
                            </div>
                            <img alt= "img-logo" className="w-full" src={ IMG_CDN_URL+l?.card?.info?.imageId }/>
                            </div>
                    </div>
                ))
            }

        </div>
    )
};
export default ItemList;