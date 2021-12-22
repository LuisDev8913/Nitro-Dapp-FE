import { Moralis } from 'moralis'


export const getBalanceInWEI = (value) => {
    return Moralis.Units.ETH(value)
}