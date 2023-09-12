import { useEffect, useState } from "react"
import { resList } from "../utils/Resturants"
import RestaurantCard from "./ResturantCard"



const Body = () => {

    let [ListofRestaurants, setListofRestaurants] = useState([])

    useEffect(()=> {
        fetchData();
    }, [])

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4717414&lng=88.3454871&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        setListofRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    
    return (
        <div className="Body maxWidth">
            <div className="buttons_section">
                <div className="search_bar">
                    <input type="text" placeholder="Search"/>
                    <button type="submit" className="submit_btn">Submit</button>
                </div>
                <button className="top_res" onClick={() =>{
                    setListofRestaurants(ListofRestaurants.filter((res)=> (res?.info?.avgRating >= 4.6)
                    ))}}
                >Top Resturant</button>
            </div>

            <div className="resturant_container">
                {
                    ListofRestaurants.map((restaurant)=> (
                        <RestaurantCard 
                        key = {restaurant.info.id} 
                        data = {restaurant}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Body