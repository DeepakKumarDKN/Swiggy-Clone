import AllResturants from "../utils/Resturants";
import RestaurantCard from "./ResturantCard";


const HeaderComponent = () =>{
  
    return(
        <>
        <div className="header_part">
            <div className="logo_section">
                <img className="logo"src="https://img.freepik.com/premium-vector/smiling-chef-cartoon-character_8250-10.jpg"></img>
                <p>Food Villa</p>
            </div>
            <div className="header-right-part">
                <ul className="list-items">
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                </ul>
            </div>
            <button className="filter_btn" onClick= {() => (console.log('hello'))}
            >Filter</button>
        </div>
        </>
    )
}

export default HeaderComponent;