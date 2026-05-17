import { useState, useEffect } from 'react';
import ShimmerCards from './ShimmerCards';
import { useParams } from 'react-router';
//import {RESMENU_URL} from "../utils/constants"
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
  const { id } = useParams();

  let restaurantInfo = useRestaurantMenu(id);
  /* **** NOTE: NOW ALL THIS COMPLETE RESPONSIBILITY IS HANDLED BY useRestaurantMenu(id) CUSTOM HOOK.
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    
    //console.log("useState: ", useState());

//console.log("id: " + id);
    useEffect(()=>{
        fetchRestaurantMenu();
    },[]);

    

    const fetchRestaurantMenu = async () =>{
        const data = await fetch(RESMENU_URL+id);
        const restroInfo = await data.json();
        setRestaurantInfo(restroInfo);
        //console.log("restaurantInfo: ",restaurantInfo);//.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards
    }
*/
  if (restaurantInfo === null) {
    return <ShimmerCards />;
  }
  const { name, totalRatingsString } =
    restaurantInfo.data.cards[2].card.card.info;
  //const cards = restaurantInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
  const itemCards =
    restaurantInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card
      .card.itemCards;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <span>{totalRatingsString}</span>
      <h2>Recommended Menu</h2>
      <ul>
        {itemCards.map((itemcard) => (
          <li key={itemcard.card.info.id}>
            {' '}
            {itemcard.card.info.name} - ,{itemcard.card.info.category},{' '}
            {itemcard.card.info.description}, {itemcard.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
