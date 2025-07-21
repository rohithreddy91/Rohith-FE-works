
import useRestaurantInfo from "../utils/useRestaurantInfo";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {

  const { resid } = useParams();

  const resInfo = useRestaurantInfo(resid);

  const [showItems,setShowItems] = useState(0);

  if (!resInfo) return <h1>Loading...</h1>;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const category = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((cat)=> cat?.card?.card?.["@type"]
      ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    //console.log("category",category);

  return (
    <div className="text-center p-4">
      <h1 className="font-bold">{name}</h1>
      <h2 className="font-semibold ">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h2>
      {
        category.map((c,index)=>(
        <RestaurantCategory key={c.card?.card?.title} data = {c?.card?.card}
        showItems ={index === showItems?  true: false}
        setShowItems ={()=>setShowItems(index)}
        />))
      }
    </div>
  );
};


export default RestaurantMenu;
