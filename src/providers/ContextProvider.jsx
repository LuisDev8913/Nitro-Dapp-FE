import { message } from 'antd';
import React, { useEffect, useState } from 'react'
import { useMoralis } from 'react-moralis';
import { CONTRACT_DEFAULT_CHAIN, STATE_MUTABILITY_TYPES } from '../constants/enums';
import DappContext from '../context'
import { executeSmartContractFunction } from '../helpers/moralisHelper';
import { getInValidNetworkError } from '../helpers/networks';

const smartContractFunctions = [

    {
        id: 1,
        functionName: "owner",
        functionType: STATE_MUTABILITY_TYPES.view,
        params: false
    },
    {
        id: 2,
        functionName: "balanceOf",
        functionType: STATE_MUTABILITY_TYPES.view,
        key: "owner",
        params: true
    },
    {
        id: 3,
        functionName: "currentSalesRound",
        functionType: STATE_MUTABILITY_TYPES.view,
        params: false
    },
    {
        id: 4,
        functionName: "whitelisted",
        functionType: STATE_MUTABILITY_TYPES.view,
        key: "",
        params: true
    },
    {
        id: 5,
        functionName: "totalSupply",
        functionType: STATE_MUTABILITY_TYPES.view,
        params: false
    },
    {
        id: 6,
        functionName: "MAX_ELEMENTS",
        functionType: STATE_MUTABILITY_TYPES.view,
        params: false
    }
]

const DappContextProvider = ({ children }) => {
    const [smartContractInfo, setSmartContractInfo] = useState({});
    const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading, account, chainId } = useMoralis();
    const [isFetched, setIsFetched] = useState(false);
    const [isValidChain, setIsValidChain] = useState(null);


    useEffect(() => {
        if (chainId) {
            if (chainId === CONTRACT_DEFAULT_CHAIN.key) {
                setIsValidChain(true)
            }
            else {
                message.error(getInValidNetworkError())
                setIsValidChain(false)
            }
        }
    }, [chainId])


    useEffect(() => {
        if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) {
            enableWeb3();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated, isWeb3Enabled]);

    useEffect(() => {
        if (isWeb3Enabled && isAuthenticated && !isWeb3EnableLoading && isValidChain && !isFetched) {
            getUserSmartContractInfo()
        }
        // eslint-disable-next-line
    }, [isWeb3Enabled, isAuthenticated, isWeb3EnableLoading, isValidChain, isFetched]);

    const getParams = (paramName) => {
        let paramsObject = {};
        paramsObject[`${paramName}`] = account.toString();
        return paramsObject;
    }

    const getUserSmartContractInfo = () => {
        if (isWeb3Enabled && isAuthenticated && !isWeb3EnableLoading && isValidChain && !isFetched) {
            Promise.all(smartContractFunctions.map(each => {
                return executeSmartContractFunction(each.functionType, setSmartContractInfo, each.functionName, each.params ? getParams(each.key) : []);
            })).then(res => {
                setIsFetched(true)
            }).catch(e => {
                setIsFetched(false);
                setSmartContractInfo(prev => ({ ...prev, loading: false }))
            })
        }
    }
    return (
        <DappContext.Provider value={{ smartContractInfo, getUserSmartContractInfo, isValidChain }}>
            {children}
        </DappContext.Provider>
    )
}

export default DappContextProvider