import React from "react";
import { AboutImage } from "../../assets/img";

const About = () => {
    return (
        <div className="simple-sec">
            <div className="container">
                <div className="s-row">
                    <div className="img">
                        <img src={AboutImage} />
                    </div>
                    <div className="content-box">
                        <h3>About</h3>
                        <p>Forged in the basement of our parents’ houses, as all NFT projects are, Nitid is a crypto native fashion brand.</p>
                        <p>Nitid is reaching out to bridge the gap between real world self expression and the creative, versatile nature of NFTs.  We believe there is a need right now for the NFT/crypto world to be able to proudly express themselves in person about the community they are a part of.  </p>
                        <p>This is why Nitid will forever be a crypto only brand and will never accept fiat. Nitid will solely serve the crypto community. </p>
                        <p>Nitid’s team is the most qualified to be able to achieve these goals, with background expertise in Indiana Jones pinball, pole vaulting, converting word docs to pdfs, and has worn clothes. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;