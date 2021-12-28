import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { SOCIAL_LINKS } from "../../constants/enums";
import { redirectToWebPage } from "../../utils/commonUtil";

const Footer = () => {
    const handleRedirection = (e, link) => {
        e.preventDefault();
        redirectToWebPage(link)
    }
    return (
        <div className="footer">
            <div className="container">
                <div className="s-row">
                    <div className="copyryt">
                        <p>2021 Nitid Textiles LLC</p>
                    </div>
                    <ul className="sociallinks">
                        <li>
                            <a onClick={e => handleRedirection(e, SOCIAL_LINKS.TWITTER)} href="/#"><BsTwitter /></a>
                        </li>
                        <li>
                            <a onClick={e => handleRedirection(e, SOCIAL_LINKS.INSTAGRAM)} href="/#"><BsInstagram /></a>
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