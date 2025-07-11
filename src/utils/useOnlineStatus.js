import { useState, useEffect } from "react";
const useOnlineStatus = ()=>{

    const[onlinStatus,setOnlineStatus]= useState(true);

    useEffect(()=>{

        window.addEventListener("online", ()=>{
            setOnlineStatus(true);
        });
        window.addEventListener("offline", ()=>{
            setOnlineStatus(false);
        });

    },[]);
    return onlinStatus;
};
export default useOnlineStatus;