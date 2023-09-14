import { useEffect, useState } from "react"
import RestaurantCard from "./ResturantCard"
import { API_LINK } from "../utils/constant"



const Body = () => {

    const [ListofRestaurants, setListofRestaurants] = useState([])
    const [filteredRestaurants, setfilteredRestaurants] = useState([])
    const [searchText, setsearchText] = useState([])

    useEffect(()=> {
        fetchData();
    }, [])

    

    const fetchData = async() => {
        const data = await fetch(API_LINK)
        const json = await data.json()

        let checkedData = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setListofRestaurants(checkedData)
        setfilteredRestaurants(checkedData)
    }
    
    return (
        <div className="Body maxWidth">
            <div className="buttons_section">
                <div className="search_bar">
                    <input type="text" 
                    placeholder="Search Your Favourite Restaurants Here" 
                    value = {searchText}
                    onChange = {(e)=> {setsearchText(e.target.value)}}
                    />
                    <button type="submit" className="submit_btn"
                    onClick= {()=> {
                        setfilteredRestaurants(ListofRestaurants.filter
                            ((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())))
                    }}
                    >Search</button>
                </div>
                <button className="top_res" onClick={() =>{
                    setfilteredRestaurants(ListofRestaurants.filter((res)=> (res?.info?.avgRating >= 4.6)
                    ))}}
                >Top Resturant</button>
            </div>

            <div className="resturant_container">
                {
                    filteredRestaurants.map((restaurant)=> (
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