import { useMoralis } from "react-moralis";
import { contractABI, contractAddress } from "../contract/contractDetails"
import { openNotification } from "./notificationHelper";
export const executeSmartContractFunction = (isReadFunction = true, setResponse, functionName, functionParams, ethValue = null) => {
    const { Moralis } = useMoralis();
    let options = {
        contractAddress,
        functionName,
        abi: contractABI,
        params: functionParams,
    };
    if (!isReadFunction) {
        options["awaitReceipt"] = false;
        options["msgValue"] = ethValue
        console.log("INSIDE WRITE FUNCTION CONDITION");

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
                openNotification({
                    message: "📃 New Receipt",
                    description: `${receipt.transactionHash}`,
                });
                console.log("🔊 New Receipt: ", receipt);
            })
            .on("error", (error) => {
                console.error(error);
            });
    }
    else {
        console.log("INSIDE READ FUNCTION LOGIC")
        Moralis.executeFunction(options).then((response) => {
            console.log("RESPONSE", response)
            // set loading false and response here
        })
    }
}