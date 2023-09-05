import RestaurantCard from "./ResturantCard";
import AllResturants from '../utils/Resturants'
import { useEffect, useState } from "react";




const BodyComponent = () =>{

    let [listofResturants, setResturants] = useState(AllResturants)
    let [searchText, setsearchText] = useState()

    useEffect(
        ()=> {fetchData()}
        ,[])

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4717414&lng=88.3454871&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
        
        const json = await data.json
        console.log(json)
    }

    return(
        <>
        <div className="search_bar maxWidth">
            <input type="text" 
            placeholder="Type Here To Search" 
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
            />
            

            <button  type="submit" className="submit_button">Submit</button>


            <button  className="top-res" onClick={() => {
                    const filteredList = listofResturants.filter((res) => res.info.avgRating >= 4.6)
                    setResturants(filteredList)

                }}>
            Top Resturants</button>
        </div>

        <div className="resturants_list maxWidth">
            {
                listofResturants.map((resturant)=>(
                    <RestaurantCard key = {resturant.info.id}
                        data = {resturant}/>
                ))
            }
        </div>
        </>
    )
}

export default BodyComponent;