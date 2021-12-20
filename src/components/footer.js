import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="s-row">
                    <div className="copyryt">
                        <p>2021 Nitid Textiles LLC</p>
                    </div>
                    <ul className="sociallinks">
                        <li>
                            <a href="#"><BsTwitter /></a>
                        </li>
                        <li>
                            <a href="#"><BsInstagram /></a>
                        </li>
                    </ul>
                </div>
                <div className="s-row">
                    <div className="really">
                        <p>*Not really though</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;