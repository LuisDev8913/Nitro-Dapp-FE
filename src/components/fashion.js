import React from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import FashionNft from '../assets/img/fashion-nft.jpg'
import { CONTRACT_ADDRESS, getContractABI } from "../constants/enums";

const Fashion = () => {
    const { Moralis } = useMoralis()
    // const { fetch, data, error, isLoading, isFetching } = useWeb3ExecuteFunction({
    //     abi: getContractABI(),
    //     address: CONTRACT_ADDRESS,
    //     functionName: "mintForOwner",
    //     params: {
    //         secondsAgos: [1, "AjeebSaName"],
    //     },
    // });
    // console.log("data", data)

    const mint = async () => {
        let web3 = await Moralis.Web3.enable();
        const contract = new web3.eth.Contract(getContractABI(), CONTRACT_ADDRESS);
        console.log("contract", contract)
        let receipt = await contract.methods
            .mint(1, "HELLO")
            .send({ from: "0xFD7DB40Dde73Db2d1f4365842daD60299C49b8B1", value: "" })
            .then((response) => console.log("response", response))
            .catch((err) => console.log("err.message", err.message));

        console.log("receipt", receipt)
    };
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
                        <button onClick={() => {
                            mint()
                        }} >Mint Coming Soon</button>
                        {/* {data && JSON.stringify(data)} */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fashion