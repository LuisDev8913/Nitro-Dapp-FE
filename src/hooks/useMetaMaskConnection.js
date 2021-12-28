import { useEffect, useState } from 'react'
import { getMetaMaskExtensionStatus } from '../helpers/metaMaskHelper';

const useMetaMaskConnection = () => {
    const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(true);


    useEffect(() => {
        const result = getMetaMaskExtensionStatus();
        setIsMetaMaskInstalled(result);
    }, []);


    return {
        isMetaMaskInstalled
    }
}

export default useMetaMaskConnection
