import {SquareDot,SquareMinus} from "lucide-react";
import { RestroCardLogo } from "../utils/constants";

const RestroCard = (props) => { //Destructuring on the fly.

const {name, avgRatingString, costForTwo, cuisines, veg} = props.resData;
    return (
        <div className="restroCard">
            <div className="restroImg">
                <img src={RestroCardLogo}  alt="my restro image" />
            </div>
            <div className="RatingAndType">
            <span className="restroRating">
                {avgRatingString} ⭐
            </span>
            <span>
                {veg?(<SquareDot style={{color:"green"}} />):(<SquareMinus style={{color:"red"}} />)}</span>
            </div>
            
            <div>
                <span>{name}</span>
            </div>
            <div>
                {costForTwo}
            </div>
            <div className="cuisines">
                {cuisines.join(", ")}
            </div>
            

        </div>
    );
}

export default RestroCard