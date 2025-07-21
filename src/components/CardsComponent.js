import { IMG_CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const CardsComponent = (props) =>{
  const {resData} = props;

  const { name, cuisines, costForTwo,sla,avgRating,cloudinaryImageId } = resData.info;
  const {loggingInUser} = useContext(UserContext);

  return(
    <div className = "bg-gray-200 m-2 p-2 w-[210px] h-auto shadow-Xl rounded-lg">
        <img className ="w-[200px] m-auto" alt ="rest-logo" src = {IMG_CDN_URL+cloudinaryImageId}/>
        <h3 className="text-lg font-bold">{name}</h3>
      {/* <h4>{resData.info.cuisine.map(c=>c.name).join(", ")}</h4> */}
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating}</h4>
        <h4>{sla.slaString}</h4>
        <h4>User : {loggingInUser}</h4>
    </div>
  )
};

export const WithRestaurantPromoted = (RestaurantMenu)=>{
  return (props)=>{
    return (
      <div>
        <label className="absolute bg-black text-white m-1 p-1 rounded-lg">Promoted</label>
        <RestaurantMenu {...props}/>
      </div>
    )
  }

}
export default CardsComponent;