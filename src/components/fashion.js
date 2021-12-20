import React from "react";
import FashionNft from '../assets/img/fashion-nft.jpg'

const Fashion = () => {
    return (
        <div className="simple-sec">
            <div className="container">
                <div className="s-row">
                    <div className="img">
                        <img src={FashionNft} />
                    </div>
                    <div className="content-box">
                        <h3>Nitid's Exclusive Fashion NFTs</h3>
                        <p>2,400 NFTs will be minted from the genesis collection. Each NFT will come with a luxury sweatshirt created from the design in your size.</p>
                        <p>Not only will you receive an NFT design and physical version, but each NFT will grant exclusive or early access to every future Nitid launch that will only increase in value over time. </p>
                        <button>Mint Coming Soon</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fashion