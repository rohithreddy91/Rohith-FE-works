
import useRestaurantInfo from "../utils/useRestaurantInfo";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {

  const { resid } = useParams();

  const resInfo = useRestaurantInfo(resid);

  if (!resInfo) return <h1>Loading...</h1>;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="restaurant-menu">
      <h1>{name}</h1>
      <h2>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - ₹{item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default RestaurantMenu;
