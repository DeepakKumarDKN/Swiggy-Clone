const RestaurantCard = (props) =>{
    const {resdata} = props
    return(
        <>
            <div className="resturant_card">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resdata.info.cloudinaryImageId}/>
                <p>{resdata.info.name}</p>
                <p>Rating: {resdata.info.avgRating}</p>
                <p>{resdata.info.cuisines.join(", ")}</p>
                <p>{resdata.info.areaName}</p>
            </div>
        </>
    )
}

export default RestaurantCard