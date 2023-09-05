import { useState } from "react";
import AllResturants from "../utils/Resturants";

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
        </div>
        </>
    )
}

export default HeaderComponent;