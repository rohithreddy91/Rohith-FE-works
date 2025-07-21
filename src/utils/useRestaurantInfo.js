import { useState,useEffect } from "react";
import { RES_ID } from "./constants";
const useRestaurantInfo = (resId)=>{

    const [resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async() =>{
        const fetchData = await fetch(RES_ID + resId);
        const jsonData = await fetchData.json();
        setResInfo(jsonData.data);
    }

    return resInfo;

}
export default useRestaurantInfo;