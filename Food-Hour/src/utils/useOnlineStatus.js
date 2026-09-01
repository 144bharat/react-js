import { useState, useEffect } from "react";
const useOnlineStatus = () =>{
    const [status,setStatus] = useState(true);
    
    /*
        Event -> online
        Provides the real time status whether we are online of offline
    */
    useEffect(()=>{
        window.addEventListener("online",()=>{
            setStatus(true);
        })
        window.addEventListener("offline",()=>{
            setStatus(false);
        })
    },[])

    
    //Boolean value return based upon if we are online-offline.
    return status;
}

export default useOnlineStatus;