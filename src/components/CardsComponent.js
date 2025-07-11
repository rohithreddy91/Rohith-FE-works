import { IMG_CDN_URL } from "../utils/constants";
const CardsComponent = (props) =>{
  const {resData} = props;

  const { name, cuisines, costForTwo,sla,avgRating,cloudinaryImageId } = resData.info;

  return(
    <div className = "bg-gray-200 m-2 p-2 w-[200px] h-[300px] shadow-Xl rounded-lg">
        {/* <img className ="card-image" alt ="rest-logo" src = {IMG_CDN_URL+cloudinaryImageId}/> */}
        <h3 className="text-lg font-bold py-7">{name}</h3>
      {/* <h4>{resData.info.cuisine.map(c=>c.name).join(", ")}</h4> */}
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating}</h4>
        <h4>{sla.slaString}</h4>
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