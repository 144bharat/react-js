import {SquareDot,SquareMinus,Star} from "lucide-react";
import { RestroCardLogo } from "../utils/constants";

const RestroCard = (props) => { //Destructuring on the fly.

const {name, avgRatingString, costForTwo, cuisines, veg} = props.resData;
    return (
        <div className="restroCard border-2 border-gray-400 hover:border-lime-200 shadow-lg h-full">
            <div className="restroImg h-[50%]">
                <img className="w-full h-[100%] rounded-b-lg shadow-md" src={RestroCardLogo}  alt="my restro image" />
            </div>
            <div className="restro-content h-[50%]">

                <div className="RatingAndType flex justify-between font-semibold">
                    <span className="restroRating flex gap-2">
                        <Star className=" bg-lime-500 rounded-full p-px text-white fill-current size-5" />{avgRatingString}
                    </span>
                    <span>
                        {veg?(<SquareDot style={{color:"green"}} />):(<SquareMinus style={{color:"red"}} />)}
                    </span>
                </div>
                
                <div>
                    <span className="font-bold">{name}</span>
                </div>
                <div className="font-light">
                    {costForTwo}
                </div>
                <div className="cuisines font-light italic">
                    {cuisines.join(", ")}
                </div>
                
            </div>
        </div>
    );
}

export default RestroCard