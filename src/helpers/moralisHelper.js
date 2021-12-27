import { contractABI, contractAddress } from "../contract/contractDetails"
import { openNotification } from "./notificationHelper";
import { Moralis } from 'moralis'
import { STATE_MUTABILITY_TYPES } from "../constants/enums";
export const executeSmartContractFunction = async (functionType, setResponse, functionName, functionParams, ethValue = null) => {
    let options = {
        contractAddress,
        functionName,
        abi: contractABI,
        params: functionParams,
    };
    if (functionType === STATE_MUTABILITY_TYPES.payable || functionType === STATE_MUTABILITY_TYPES.nonpayable) {
        options["awaitReceipt"] = false;
        if (functionType === STATE_MUTABILITY_TYPES.payable) {
            options["msgValue"] = ethValue
        }
        setResponse(prev => ({ ...prev, loading: true }))
        const tx = await Moralis.executeFunction({ awaitReceipt: false, ...options });
        tx.on("transactionHash", (hash) => {
            // loading true here
            openNotification({
                message: "🔊 New Transaction",
                description: `${hash}`,
            });
            console.log("🔊 New Transaction", hash);
        })
            .on("receipt", (receipt) => {
                // loading false here
                setResponse(prev => ({ ...prev, loading: false, response: `📃 New Receipt ${receipt.transactionHash}` }))
                openNotification({
                    message: "📃 New Receipt",
                    description: `${receipt.transactionHash}`,
                });
                console.log("🔊 New Receipt: ", receipt);
            })
            .on("error", (error) => {
                setResponse(prev => ({ ...prev, loading: false }))
                console.log("INSIDE ERROR", error);
            });
    }
    else {
        setResponse(prev => ({ ...prev, loading: true }))
        Moralis.executeFunction(options).then((response) => {
            setResponse(prev => ({ ...prev, loading: false, response }))
            // set loading false and response here
        }).catch(e => {
            setResponse(prev => ({ ...prev, loading: false }))
            console.log("INSIDE ERROR", e);
        })
    }
}