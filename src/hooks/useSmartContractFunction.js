import { message } from "antd";
import { useContext } from "react"
import DappContext from "../context"
import { executeSmartContractFunction as smartContractFunction } from "../helpers/moralisHelper";
import { getInValidNetworkError } from "../helpers/networks";

const useSmartContractFunction = () => {
    const { isValidChain } = useContext(DappContext);

    const executeSmartContractFunction = (...args) => {
        if (!isValidChain) {
            const error = getInValidNetworkError()
            message.error(error);
            return new Error(error)
        }
        smartContractFunction(...args)
    }

    return {
        executeSmartContractFunction
    }
}

export default useSmartContractFunction
