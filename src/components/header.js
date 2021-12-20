import React from "react";
import Logo from "../assets/img/nitidlogo.jpg"

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="logo">
                    <a href="#">
                        <img src={Logo} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header;