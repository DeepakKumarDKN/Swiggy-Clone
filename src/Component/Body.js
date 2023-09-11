import { useState } from "react"
import { resList } from "../utils/Resturants"
import RestaurantCard from "./ResturantCard"



const Body = () => {

    const [ListofRestaurants, setListofRestaurants] = useState(resList)
    
    return (
        <div className="Body maxWidth">
            <div className="search_bar">
                Search
            </div>
            <div className="resturant_container">
                {
                    ListofRestaurants.map((restaurant)=> (
                        <RestaurantCard data = {restaurant}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Body