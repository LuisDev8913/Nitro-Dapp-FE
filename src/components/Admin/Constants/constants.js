export const SmartContractAdminABI = [



    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "_users",
                "type": "address[]"
            }
        ],
        "name": "batchWhitelist",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
        "desc":"This Function will add Address to the  WhiteList Users"
    },
   
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_count",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "metaData",
                "type": "string"
            }
        ],
        "name": "mintForOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
        "desc":"This Function will use for minting without using NFT Price (Restricted to Owner Only)"
    },

    {
        "inputs": [],
        "name": "pause",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
        "desc":"This Function will pause the minting process of Smart Contract"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
        "desc":"This Function will Renounce your OWNERSHIP with Smart Contract"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "baseURI",
                "type": "string"
            }
        ],
        "name": "reveal",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
        "desc":"This Function will change Base URL for NFTs"
    },


 
    {
        "inputs": [],
        "name": "setSalesRoundMain",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
        "desc":"This Function will set the Current Sales Round as MAIN"
    },
    {
        "inputs": [],
        "name": "setSalesRoundPreSale",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
        "desc":"This Function will set the Current Sales Round as PRESALE"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "tranferToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
        "desc":"To tranfer the token another valid address."
    },


    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
        "desc":"To tranfer the OWNERSHIP of Smart Contract another valid address."
    },
    {
        "inputs": [],
        "name": "unpause",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
        "desc":"To Resume to MINTING process if paused."
    },


    {
        "inputs": [],
        "name": "withdrawAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
        "desc":"To withdraw all Smart Contract Funds into Owner's Wallet (Restricted to OWNER only)"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "desc":"Returns the number of tokens of a provided wallet address."
    },
    {
        "inputs": [],
        "name": "baseTokenURI",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "desc":"Returns the BASE URL for NFTs"
    },
    {
        "inputs": [],
        "name": "currentSalesRound",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "desc":"This function will return CURRENT SALES ROUND (PRESALE/MAIN)"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_address",
                "type": "address"
            }
        ],
        "name": "isWhitelisted",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "desc":"Returns if the provided wallet address is whitelisted for PRESALE Minting."
    },
    {
        "inputs": [],
        "name": "MAX_ELEMENTS",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "desc":"Returns MAX number of NFT tokens to be minted."
    },
  
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "desc":"Returns Name of Contract"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "desc":"Returns wallet address of Owner."
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ownerOf",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "desc":"Returns Wallet Address of provided Token number"
    },
    {
        "inputs": [],
        "name": "paused",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "desc":"Returns if the MINTING Process is Paused."
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_count",
                "type": "uint256"
            }
        ],
        "name": "price",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "desc":"Returns price of NFT per count"
    },
  
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "desc":"Returns Smart Contract Symbol"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "desc":"Returns Total Supply for NFTs minted till yet."
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "walletOfOwner",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "desc":"Returns token numbers of provided wallet address"
    }
]