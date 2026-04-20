import RestroCard from "./RestroCard";
import { Search, Filter } from "lucide-react";
import resDataList from "../utils/mockData";

const Body = () => {
    return (
        <main className="main">
            <div className="searchContainer">
                <input type="search" name="search" placeholder="Search food items..."/>
                <button type="button" className="searchbtn"><Search/></button>
                <button type="button" className="topratedfilterbtn" onClick={()=>{console.log("On Click in Action.")}}>Top Rated Restraurants<Filter/> </button>
            </div>
            <div className="restroContainer">
                {/* <RestroCard resData={resDataList.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants[0].info}/> */}

                {
                    resDataList.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.map(restro => <RestroCard key={restro.info.id} resData = {restro.info} />)
                }
            </div>
        </main>
    );
};

export default Body