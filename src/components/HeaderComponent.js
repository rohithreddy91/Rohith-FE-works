import { Link } from "react-router-dom";
import { CDN_URL}  from "../utils/constants";
import { useContext, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const HeaderComponent = () => {

    const [loggedIn,setLoggedIn] = useState("login");
    const btnChanged = loggedIn
    const onlinStatus = useOnlineStatus();
    const {loggingInUser} = useContext(UserContext);

    const cartItems = useSelector((store)=>store.cart.items);
    console.log("cartItems", cartItems);
    
    


  const header =  (
    <div className="flex justify-between items-center bg-pink-50 shadow-lg">
    <div className="logo-container">
      <img alt="logo" className = "w-[120px] m-4" src = {CDN_URL}/>
    </div>
    <div className ="">
        <ul className="flex p-4 m-4 px-8 space-x-4">
            <li>
                Status:{onlinStatus?"online":"offline"}
            </li>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>Cart</li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to = "/grocery"> Grocery</Link>
            </li>
            <li className="font-bold text-lg">
                <Link to="/cart">
                Cart({cartItems.length})
                </Link>
            </li>
             <button className="button-btn" onClick={ ()=> {
            btnChanged === "login"? setLoggedIn("logout") : setLoggedIn("login");
      }}> {btnChanged}</button>
      <li>{loggingInUser}</li>
          </ul>
      </div>
  </div>
  );
  return header;
}

export default HeaderComponent;