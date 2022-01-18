import { Button } from "antd";
import React, { useContext, useState } from "react";
import { useMoralis } from "react-moralis";
import { FashionNFTImage } from "../../assets/img/index"
import { SALES_ROUNDS } from "../../constants/enums";
import DappContext from "../../context";
import { useMetaMaskConnection } from "../../hooks";
import { redirectToWebPage } from "../../utils/commonUtil";
import MintModal from "../Shared/MintModal";

const Fashion = () => {
    const [isMintModalVisible, setIsMintModalVisible] = useState(false)
    const { smartContractInfo } = useContext(DappContext);
    const {isMetaMaskInstalled} = useMetaMaskConnection();
    const {isAuthenticated, isAuthenticating, authenticate} = useMoralis();
    const toggleModal = () => {
        setIsMintModalVisible(prev => !prev)
    }

    const closeModal = () => {
        setIsMintModalVisible(false)
    }

    const getButtonText = () => {
        let obj = {
            text: "",
            buttonDisabled: false,
        };

        if (smartContractInfo.totalSupply >= smartContractInfo.MAX_ELEMENTS) {
            obj.text = "SOLD OUT";
            obj.buttonDisabled = true;
        }
        else if (smartContractInfo.currentSalesRound === SALES_ROUNDS.PRESALE && !smartContractInfo.isWhitelisted) {
            obj.text = "COMING SOON";
            obj.buttonDisabled = true;
        }
        else if (Number(smartContractInfo.balanceOf) >= 2) {
            obj.text = "LIMIT REACHED";
            obj.buttonDisabled = true;
        }

        return obj;
    }

    const connectWallet = () => {
        authenticate({ signingMessage: "Connect with NITID" })
    }

    return (
        <>
            <MintModal
                isVisible={isMintModalVisible}
                closeModal={closeModal}
            />
            <div className="simple-sec">
                <div className="container">
                    <div className="s-row">
                        <div className="img">
                            <img src={FashionNFTImage} alt="NITID FASHION" />
                        </div>
                        <div className="content-box">
                            <h3>Nitid's Exclusive Fashion NFTs</h3>
                            <p>2,400 NFTs will be minted from the genesis collection. Each NFT will come with a luxury sweatshirt created from the design in your size.</p>
                            <p>Not only will you receive an NFT design and physical version, but each NFT will grant exclusive or early access to every future Nitid launch that will only increase in value over time. </p>
                            {
                                isMetaMaskInstalled ? 
                                <Button
                                style={{ fontFamily: 'Cinzel' }}
                                disabled={getButtonText().buttonDisabled || smartContractInfo.loading || isAuthenticating}
                                loading={smartContractInfo.loading || isAuthenticating}
                                onClick={ isAuthenticated ? toggleModal: connectWallet }>
                                {isAuthenticated ? `MINT ${smartContractInfo.loading ? "" : getButtonText().text}` : `PLEASE CONNECT YOUR WALLET`}
                            </Button>: 
                                <Button onClick={() => redirectToWebPage()}>
                                    Please install META MASK
                                </Button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Fashion