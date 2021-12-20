import React from "react";
import NitidClothing from '../assets/img/nitid-clothing.jpg'

const Clothing = () => {
    return (
        <div className="simple-sec">
            <div className="container">
                <div className="s-row">
                    <div className="content-box">
                        <h3>Nitid's ClothinG</h3>
                        <p>All Nitid sweatshirts will be made of wind armor performance fleece.</p>
                        <p>Designs were conceived by a professional fashion designer for the sole purpose of Nitid’s genesis launch and will never be used again.</p>
                        <p>In the future, Nitid will be making clothing/skins for avatars across the metaverse as well as continuing a physical presence.</p>
                        <p>Additionally, Nitid’s clothing will offer protection from rug pulls.*</p>
                    </div>
                    <div className="img">
                        <img src={NitidClothing} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clothing;