import RestaurantCard from "./ResturantCard";
import AllResturants from '../utils/Resturants'
import { useState } from "react";


const BodyComponent = () =>{

    let [listofResturants, setResturants] = useState(AllResturants)    

    return(
        <>
        <div className="search_bar maxWidth">
            <input type="text" placeholder=""/>
            <button  type="submit" className="submit_button">Submit</button>
            <button className="top-res" onClick = {() => 
            setResturants(listofResturants.filter((res) => res.info.avgRating >= 4.6))
        } 
            >Top Resturants</button>
        </div>

        <div className="resturants_list maxWidth">
            {
                listofResturants.map((resturant)=>(
                    <RestaurantCard key = {resturant.info.id}
                    resdata = {resturant}/>
                ))
            }
        </div>
        </>
    )
}

export default BodyComponent;