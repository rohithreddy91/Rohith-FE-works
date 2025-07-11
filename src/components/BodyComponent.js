import CardsComponent,{WithRestaurantPromoted} from "./CardsComponent";// default imports
import { useState, useEffect, use } from "react";
import SearchComponent from "./SearchComponent";// default imports
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";// custom hook


const BodyComponent = () => {

    const [listOfRes, setlistOfRes] = useState([]);
    const [filtereddata, setFilteredData] = useState([]);
    console.log("filtereddata", listOfRes);
    const onlinsStatus = useOnlineStatus();

    const WithRestaurantPromotedCards = WithRestaurantPromoted(CardsComponent);


    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {

        const listData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9502882&lng=77.7045014&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");

        const jsonData = await listData.json();
        let card;
        let resultArray = [];
        for (let i = 3; i < jsonData?.data?.cards?.length; i++) {
            card = jsonData?.data?.cards[i];
            resultArray.push(card?.card?.card)
        }

        

        setlistOfRes(resultArray);
        setFilteredData(resultArray);
    }
    // useEffect(()=>{
    //     fetchData();
    // },[]);
    // const fetchData = async () =>{
    //         const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.971599&lng=77.594566&page_type=DESKTOP_WEB_LISTING");

    // const jsonData = await data.json();
    // console.log("json",jsonData?.data.cards[2]?.card?.card);
    // setlistOfRes(jsonData?.data.cards[2]?.card?.card)
    // }
            if(!onlinsStatus){
                return <h1> Status is offline !! Please check the internet connection.</h1>
            }

    return (
        <div className="p-4">
            <div className="flex">
                <SearchComponent resultData={listOfRes} res1={setFilteredData} />
                <button className="border-black bg-gray-400 rounded-lg px-4 py-2 m-4" onClick={() => {

                    let filterResult = listOfRes.filter((rest) => rest.info.avgRating > 4.4);
                    setFilteredData(filterResult);
                }}>
                    Filter By Rating
                </button>
            </div>
            <div className="flex flex-wrap">
                {
                    filtereddata?.map((restaurant) => (
                        <Link key={restaurant.info.id} to = {"/restaurant/"+ restaurant.info.id}>
                            {restaurant.info.promoted ? <WithRestaurantPromotedCards resData={restaurant}/> : 
                            <CardsComponent key={restaurant.info.id} resData={restaurant} />}
                        </Link>
                    ))
                    //<CardsComponent resData = {listOfRes} />
                }
            </div>
        </div>
    )
}
export default BodyComponent;