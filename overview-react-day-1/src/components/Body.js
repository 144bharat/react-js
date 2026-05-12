import RestroCard from "./RestroCard";
import { Search, Filter } from "lucide-react";
//import resDataList from "../utils/mockData";
import { useState, useEffect} from "react";
import ShimmerCards from "./ShimmerCards";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    
    let [restroList,setRestroList]=useState([]); //resDataList.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    
    let [restroFilteredList,setRestroFilteredList]=useState([]);
    
    
    //useEffect = > takes 2 argument: callback(), depArray.
    useEffect(()=>{
        fetchRestroData();
    },[]);
    
let checkOnlineStatus = useOnlineStatus();

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


    if(!checkOnlineStatus)
    {
        return(<h4>I guess you're offline!!</h4>);
    }
    //Conditional rendering
    if(restroFilteredList.length === 0){
        return <ShimmerCards/>;
    }
    return (
        <div className="body container">
            <div className="searchContainer flex justify-between items-center p-[20px]">
                <div className="w-[70%]">
                    <input type="text" name="search" placeholder="Search food items..." value={searchBarText} onChange={updateSearchBarText} className=" align-middle w-1/2 border shadow-sm rounded-[5px] py-[5px] mx-1"/>
                    <button type="button" className="searchbtn align-middle bg-orange-100 w-[10%] h-full hover:cursor-pointer py-[5px]" onClick={()=>{
                        let searchedRestroList = restroList.filter(restroObj => restroObj.info.name.toLowerCase().includes(searchBarText.toLowerCase())); //resDataList.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
                        setRestroFilteredList(searchedRestroList);
                    }}><Search className="text-lime-500 mx-auto" /></button>
                </div>

                <button type="button" className="topratedfilterbtn align-middle h-full flex w-[30%] bg-olive-950 text-white shadow-lg rounded-[5px] py-[5px] justify-center" onClick={filter4StarAboveRestros}>Top Rated Restraurants<Filter className="w-[20px]"/> </button>
            </div>
            <div className="restroContainer w-[100%] flex flex-wrap gap-2 justify-center mx-auto">
                {/* <RestroCard resData={resDataList.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants[0].info}/> */}

                {
                    //resDataList.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.map(restro => <RestroCard key={restro.info.id} resData = {restro.info} />)
                    restroFilteredList.map(restro => <Link to={"/restaurantmenu/"+restro.info.id} key={restro.info.id} > <RestroCard resData = {restro.info} /></Link>)
                }
            </div>
        </div>
    );
};

export default Body