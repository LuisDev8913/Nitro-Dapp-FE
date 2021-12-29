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
		"desc": "This Function will add Address to WhiteList Users",
		"slugName": "Batch Whitelist"
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
		"desc": "This Function will use for minting without using NFT Price (Restricted to Owner Only)",
		"slugName": "Mint For Owner"
	},
	{
		"inputs": [],
		"name": "pause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function",
		"desc": "This Function will pause the minting process of Smart Contract",
		"slugName": "Pause Minting"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function",
		"desc": "This Function will Renounce your OWNERSHIP with Smart Contract",
		"slugName": "Renounce Ownership"
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
		"desc": "This Function will change Base URL for NFTs",
		"slugName": "Base Uri"
	},
	{
		"inputs": [],
		"name": "setSalesRoundMain",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function",
		"desc": "This Function will set the Current Sales Round as MAIN",
		"slugName": "Set Sales Round Main"
	},
	{
		"inputs": [],
		"name": "setSalesRoundPreSale",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function",
		"desc": "This Function will set the Current Sales Round as PRESALE",
		"slugName": "Set Sales Round Pre-Sale"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "fromAddress",
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
		"desc": "To tranfer the token another valid address.",
		"slugName": "Tranfer Token"
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
		"desc": "To tranfer the OWNERSHIP of Smart Contract another valid address.",
		"slugName": "Tranfer Ownership"
	},
	{
		"inputs": [],
		"name": "unpause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function",
		"desc": "To Un Pause Minting Process",
		"slugName": "Un Pause Minting"
	},
	{
		"inputs": [],
		"name": "withdrawAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function",
		"desc": "To withdraw all Smart Contract Funds into Owner's Wallet (Restricted to OWNER only)",
		"slugName": "Withdraw All"
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
		"desc": "Returns the number of tokens of a provided wallet address.",
		"slugName": "Balance Of Tokens"
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
		"desc": "Returns the BASE URL for NFTs",
		"slugName": "Base Token URI"
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
		"desc": "This function will return CURRENT SALES ROUND (PRESALE/MAIN)",
		"slugName": "Current Sales Round"
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
		"desc": "Returns if the provided wallet address is whitelisted for PRESALE Minting.",
		"slugName": "Is Whitelisted"
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
		"desc": "Returns MAX number of NFT tokens to be minted.",
		"slugName": "Max Elements For Mint"
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
		"desc": "Returns Name of Contract",
		"slugName": "Name"
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
		"desc": "Returns wallet address of Owner.",
		"slugName": "Get Owner Address"
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
		"desc": "Returns Wallet Address of provided Token number",
		"slugName": "Owner Of Token Number"
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
		"desc": "Returns if the MINTING Process is Paused.",
		"slugName": "Is Minting Paused"
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
		"desc": "Returns price of NFT per count",
		"slugName": "Price"
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
		"desc": "Returns Smart Contract Symbol",
		"slugName": "Symbol"
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
		"desc": "Returns Total Supply for NFTs minted till yet.",
		"slugName": "Total Supply"
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
		"desc": "Returns token numbers of provided wallet address",
		"slugName": "Wallet Of Owner"
	}
]