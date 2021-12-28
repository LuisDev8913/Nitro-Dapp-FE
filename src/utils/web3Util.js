
import { Moralis } from 'moralis'

let MoralisInstace = null;
const getWeb3Instance = () => {
    if (MoralisInstace) {
        return MoralisInstace;
    }
    return MoralisInstace = new Moralis.Web3();
}

export const isValidAddress = (addressString) => {
    const web3 = getWeb3Instance();
    return web3.utils.isAddress(addressString)

}

export const compareAddresses = (firstAddress, secondAddress) => {
    if (isValidAddress(firstAddress) && isValidAddress(secondAddress)) {
        return getCheckSumAddress(firstAddress) === getCheckSumAddress(secondAddress)
    }
}
export const getCheckSumAddress = (addressString) => {
    const web3 = getWeb3Instance()
    return web3.utils.toChecksumAddress(addressString).toLowerCase()
}
