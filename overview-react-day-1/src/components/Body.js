import RestroCard from "./RestroCard";
import { Search, Filter } from "lucide-react";
import resDataList from "../utils/mockData";
import { useState } from "react";




const Body = () => {
    
let [restroList,setRestroList]=useState(resDataList.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    
function filter4StarAboveRestros() {
    let filteredTopRatedRestroList = restroList.filter(restro => restro.info.avgRating>4.5);
    console.log(filteredTopRatedRestroList);
    setRestroList(filteredTopRatedRestroList); //This special utility function get my new filtered data to hook with the current data we are displaying on frontend.
}

let [searchBarText, setSearchBarText]=useState("");

const updateSearchBarText = (event) => {
    setSearchBarText(event.target.value.toLowerCase());
    console.log("[A]: "+searchBarText);

    let searchedRestroList = resDataList.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.filter(restroObj => restroObj.info.name.includes(searchBarText));
    setRestroList(searchedRestroList);
}

    return (
        <main className="main">
            <div className="searchContainer">
                <input type="search" name="search" placeholder="Search food items..." onChange={updateSearchBarText}/>
                <button type="button" className="searchbtn"><Search/></button>
                <button type="button" className="topratedfilterbtn" onClick={filter4StarAboveRestros}>Top Rated Restraurants<Filter/> </button>
            </div>
            <div className="restroContainer">
                {/* <RestroCard resData={resDataList.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants[0].info}/> */}

                {
                    //resDataList.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.map(restro => <RestroCard key={restro.info.id} resData = {restro.info} />)
                    restroList.map(restro => <RestroCard key={restro.info.id} resData = {restro.info} />)
                }
            </div>
        </main>
    );
};

export default Body