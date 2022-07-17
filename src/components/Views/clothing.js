import React from "react";
import { NitidClothingImage } from "../../assets/img";

const Clothing = () => {
    return (
        <div className="simple-sec">
            <div className="container">
                <div className="s-row">
                    <div className="content-box">
                        <h3>Nitro's ClothinG</h3>
                        <p>All Nitro sweatshirts will be made of wind armor performance fleece.</p>
                        <p>Designs were conceived by a professional fashion designer for the sole purpose of Nitro genesis launch and will never be used again.</p>
                        <p>In the future, Nitro will be making clothing/skins for avatars across the metaverse as well as continuing a physical presence.</p>
                        <p>Additionally, Nitro clothing will offer protection from rug pulls.*</p>
                    </div>
                    <div className="img">
                        <img src={NitidClothingImage} alt="NITID CLOTHING" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clothing;