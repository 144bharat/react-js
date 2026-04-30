import RestroCard from "./RestroCard";
import { Search, Filter } from "lucide-react";
//import resDataList from "../utils/mockData";
import { useState, useEffect} from "react";
import ShimmerCards from "./ShimmerCards";



const Body = () => {
    
let [restroList,setRestroList]=useState([]); //resDataList.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants

let [restroFilteredList,setRestroFilteredList]=useState([]);


//useEffect = > takes 2 argument: callback(), depArray.
useEffect(()=>{
fetchRestroData();
},[]);

let fetchRestroData = async () => {
    let dataStream = await fetch("https://namastedev.com/api/v1/listRestaurants");
    let restroListDataFromApi = await dataStream.json();
    console.log(restroListDataFromApi);
    setRestroList(restroListDataFromApi?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setRestroFilteredList(restroListDataFromApi?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}

function filter4StarAboveRestros() {
    let filteredTopRatedRestroList = restroList.filter(restro => restro.info.avgRating>4.5);
    console.log(filteredTopRatedRestroList);
    setRestroFilteredList(filteredTopRatedRestroList); //This special utility function get my new filtered data to hook with the current data we are displaying on frontend.
}

let [searchBarText, setSearchBarText]=useState("");

const updateSearchBarText = (event) => {
    setSearchBarText(event.target.value.toLowerCase());
    //console.log("[A]: "+searchBarText);
}

    //Conditional rendering
    if(restroFilteredList.length === 0){
        return <ShimmerCards/>;
    }
    return (
        <main className="main">
            <div className="searchContainer">
                <input type="text" name="search" placeholder="Search food items..." value={searchBarText} onChange={updateSearchBarText}/>
                <button type="button" className="searchbtn" onClick={()=>{
                    let searchedRestroList = restroList.filter(restroObj => restroObj.info.name.toLowerCase().includes(searchBarText.toLowerCase())); //resDataList.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
                    setRestroFilteredList(searchedRestroList);
                }}><Search/></button>
                <button type="button" className="topratedfilterbtn" onClick={filter4StarAboveRestros}>Top Rated Restraurants<Filter/> </button>
            </div>
            <div className="restroContainer">
                {/* <RestroCard resData={resDataList.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants[0].info}/> */}

                {
                    //resDataList.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.map(restro => <RestroCard key={restro.info.id} resData = {restro.info} />)
                    restroFilteredList.map(restro => <RestroCard key={restro.info.id} resData = {restro.info} />)
                }
            </div>
        </main>
    );
};

export default Body