import RestaurantCard from "./ResturantCard";
import AllResturants from '../utils/Resturants'


const BodyComponent = () =>{
    return(
        <>
        <div className="search_bar maxWidth">
            <input type="text" placeholder=""/>
            <button  type="submit" className="submit_button">Submit</button>
        </div>

        <div className="resturants_list maxWidth">
            {
                AllResturants.map((resturant)=>(
                    <RestaurantCard resdata = {resturant}/>
                ))
            }
        </div>
        </>
    )
}

export default BodyComponent;