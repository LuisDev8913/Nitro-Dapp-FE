import React from "react";
import { NitidLogo } from "../../assets/img";
import Account from "../Account/Account";
import NativeBalance from "../NativeBalance/NativeBalance";
import TokenPrice from "../TokenPrice";

const Header = () => {
    return (
        <div className="header">
            <div className="container-fluid">
                <div className="hdr-row">
                    <div className="hdrbtn">

                    </div>
                    <div className="logo">
                        <a href="/#">
                            <img src={NitidLogo} alt="NITID LOGO" />
                        </a>
                    </div>
                    <div className="hdrbtn">
                        <TokenPrice
                            address="0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"
                            chain="eth"
                            image="https://cloudflare-ipfs.com/ipfs/QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg/"
                            size="40px"
                        />
                        <NativeBalance />
                        <Account />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;