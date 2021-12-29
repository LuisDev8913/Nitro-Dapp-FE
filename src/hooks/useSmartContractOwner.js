import { useContext, useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import DappContext from "../context";
import { compareAddresses } from "../utils/web3Util";

const useSmartContractOwner = () => {
    const { account, isAuthenticating, isAuthenticated } = useMoralis();
    const { smartContractInfo } = useContext(DappContext);
    const [smartContractOwnerInfo, setSmartContractOwnerInfo] = useState({
        loading: null,
        ownerAddress: null,
        isCurrentUserOwner: null
    })
    useEffect(() => {
        if (!isAuthenticating && isAuthenticated) {
            setSmartContractOwnerInfo(prev => ({ ...prev, loading: true }))
        }
        if (!isAuthenticating && isAuthenticated && !smartContractInfo.loading && smartContractInfo.owner) {
            let isCurrentUserOwner = compareAddresses(smartContractInfo.owner, account);
            setSmartContractOwnerInfo({
                ownerAddress: smartContractInfo.owner,
                isCurrentUserOwner,
                loading: false
            })
        }
    }, [isAuthenticated, isAuthenticating, account, smartContractInfo.loading, smartContractInfo.owner]);

    return {
        smartContractOwnerInfo
    }
}

export default useSmartContractOwner
