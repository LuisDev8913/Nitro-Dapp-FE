import { message } from "antd";
import { useContext } from "react"
import DappContext from "../context"
import { executeSmartContractFunction as smartContractFunction } from "../helpers/moralisHelper";
import { getInValidNetworkError } from "../helpers/networks";

const useSmartContractFunction = () => {
    const { isValidChain } = useContext(DappContext);

    const executeSmartContractFunction = (...args) => {
        return new Promise((resolve, reject) => {
            if (!isValidChain) {
                const error = getInValidNetworkError()
                message.error(error);
                reject(error)
            }
            smartContractFunction(...args).then((res) => {
                resolve(res)
            })
        })
    }

    return {
        executeSmartContractFunction
    }
}

export default useSmartContractFunction
