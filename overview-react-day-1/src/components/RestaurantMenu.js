import { useState, useEffect } from "react";
import ShimmerCards from "./ShimmerCards";
import { useParams } from "react-router";

const RestaurantMenu = () =>{
    const {id} = useParams();
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    console.log("useState: ", useState());
//console.log("id: " + id);
    useEffect(()=>{
        fetchRestaurantMenu();
    },[]);

    

    const fetchRestaurantMenu = async () =>{
        const data = await fetch("https://namastedev.com/api/v1/listRestaurantMenu/"+id);
        const restroInfo = await data.json();
        setRestaurantInfo(restroInfo);
        //console.log("restaurantInfo: ",restaurantInfo);//.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards
    }

    if(restaurantInfo === null){
        return(<ShimmerCards/>);
    }
    const {name, totalRatingsString} = restaurantInfo.data.cards[2].card.card.info;
    //const cards = restaurantInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
    const itemCards = restaurantInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;
    
    return(
        <div className="menu">
            <h1>{name}</h1>
            <span>{totalRatingsString}</span>
            <h2>Recommended Menu</h2>
            <ul>
                {itemCards.map(itemcard=> <li key={itemcard.card.info.id}> {itemcard.card.info.name} - ,{itemcard.card.info.category}, {itemcard.card.info.description}, {itemcard.card.info.price /100}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu;