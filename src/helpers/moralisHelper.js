import { openNotification } from "./notificationHelper";
import { Moralis } from 'moralis'
import { STATE_MUTABILITY_TYPES } from "../constants/enums";
import { CONTRACT_INFO } from "../contract/contractInfo";
export const executeSmartContractFunction = (functionType, setResponse, functionName, functionParams, ethValue = null) => {
    return new Promise(async (resolve, reject) => {
        let options = {
            contractAddress: CONTRACT_INFO.contractAddress,
            functionName,
            abi: CONTRACT_INFO.contractABI,
            params: functionParams,
        };
        if (functionType === STATE_MUTABILITY_TYPES.payable || functionType === STATE_MUTABILITY_TYPES.nonpayable) {
            options["awaitReceipt"] = false;
            if (functionType === STATE_MUTABILITY_TYPES.payable) {
                options["msgValue"] = ethValue
            }
            setResponse(prev => ({ ...prev, loading: true }))
            try {

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
                        resolve(true)
                    })
                    .on("error", (error) => {
                        setResponse(prev => ({ ...prev, loading: false }))
                        console.log("INSIDE ERROR", error.message);
                        openNotification({
                            message: "❌ ERROR",
                            description: `${error.message}`,
                        });
                        reject(false)
                    });
            } catch (err) {
                setResponse(prev => ({ ...prev, loading: false }))
                openNotification({
                    message: "❌ ERROR",
                    description: `${err}`,
                });
            }
        }
        else {
            setResponse(prev => ({ ...prev, loading: true }));
            Moralis.executeFunction(options).then((response) => {
                setResponse(prev => {
                    let clone = { ...prev, loading: false, response };
                    clone[`${functionName}`] = response;
                    return clone;
                })
                resolve(response)
                // set loading false and response here
            }).catch(error => {
                setResponse(prev => ({ ...prev, loading: false }))
                console.log("INSIDE READ FUNCTION ERROR", error, functionName);
                openNotification({
                    message: "❌ ERROR",
                    description: `${error}`,
                });
                reject(false)
            })
        }
    })
}