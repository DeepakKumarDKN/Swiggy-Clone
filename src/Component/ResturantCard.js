const RestaurantCard = (props) =>{
    const {resdata} = props
    return(
        <>
            <div className="resturant_card">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resdata.info.cloudinaryImageId}/>
                <p className="food_name">{resdata.info.name}</p>
                <p className="rating">{resdata.info.avgRating}</p>
                <p className="cuisine_name">{resdata.info.cuisines.join(", ")}</p>
                <p className="area_name">{resdata.info.areaName}</p>
            </div>
        </>
    )
}

export default RestaurantCard;