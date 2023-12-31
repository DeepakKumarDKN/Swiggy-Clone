import { useState } from "react";
import AllResturants from "../utils/Resturants";
import logoImage from '../Image/logoImage.avif'

const HeaderComponent = () =>{
    const [btnName, setbtnName] = useState('Login')
     return(
        <>
        <div className="header_part">
            <div className="logo_section">
                <img className="logo"src={logoImage}/>
                <p>Food Villa</p>
            </div>
            <div className="header-right-part">
                <ul className="list-items">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login_logout" onClick = {() => {
                        btnName === "Login" ? setbtnName('Logout') : setbtnName('Login') 
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
        </>
    )
}

export default HeaderComponent;