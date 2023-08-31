import RestaurantCard from "./ResturantCard";


const BodyComponent = () =>{
    return(
        <>
        <div className="search_bar maxWidth">
            <input type="text" placeholder=""/>
            <button  type="submit" className="submit_button">Submit</button>
        </div>

        <div className="resturants_list maxWidth">
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        </div>
        </>
    )
}

export default BodyComponent;