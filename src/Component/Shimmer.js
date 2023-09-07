import ShimmerImage from '../Image/ShimmerImage.png'

const Shimmer = () => {
    return(
        <div className="shimmer_container max-width">
            <img src={ShimmerImage}/>
            <p className="shimmer_food_name"></p>
            <p className="shimmer_rating"></p>
            <p className="shimmer_cuisine_name"></p>
            <p className="shimmer_area_name"></p>
        </div>
    )
}

export default Shimmer;