const RestaurantCard = (props) =>{
    const {data} = props
    return(
        <>
            <div className="resturant_card">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + data.info.cloudinaryImageId}/>
                <p className="food_name">{data.info.name}</p>
                <p className="rating">{data.info.avgRating}</p>
                <p className="cuisine_name">{data.info.cuisines.join(", ")}</p>
                <p className="area_name">{data.info.areaName}</p>
            </div>
        </>
    )
}

export default RestaurantCard;