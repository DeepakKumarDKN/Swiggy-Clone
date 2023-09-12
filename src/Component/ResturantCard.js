import star from '../Image/star.png'
import { IMAGE_URL } from '../utils/constant'



const RestaurantCard = (props) =>{
    const {data} = props

    const {cloudinaryImageId,name,avgRating,cuisines,areaName} = data?.info
    return(
        <>
            <div className="resturant_card">
                <img src={IMAGE_URL + cloudinaryImageId}/>
                <p className="food_name">{name}</p>
                <p className="rating">
                    <img className="rating_image" src={star} />
                    {avgRating}
                </p>
                <p className="cuisine_name">{cuisines.join(", ")}</p>
                <p className="area_name">{areaName}</p>
            </div>
        </>
    )
}

export default RestaurantCard;