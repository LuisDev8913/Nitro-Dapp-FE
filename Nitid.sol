pragma solidity 0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";
import "./Revealable.sol";



contract Nitid is ERC721Enumerable, Ownable, Pausable, Revealable {
    
    
    uint256 public constant MAX_ELEMENTS = 2400;


    string private _currentSalesRound;
    mapping(string => uint256) private _salesRoundToPriceMap;
    mapping(string => uint256) private _salesRoundToMintLimitMap;
    mapping(string => mapping(address => uint256)) private _salesRoundToUserMintCountMap;

    mapping(address => bool) private whitelisted;

    uint256 private _currentDevReserveSize;
    uint256 private _totalDevReserveSize;
    uint256 private _genesisReserveSize;
    uint256 private _salesRoundGiveAwayReserveSize;
    uint256 private _devReserveSize;
    uint256 private _continuousGiveAwayAndAuctionReserveSize;
    
    string public baseTokenURI;

    // For handling the mint record with specific token
    event NitidMintRecordWithToken(
        address mintOwnerAddress,
        uint256 indexed id, 
        string metaData
    );
    event NitidMainSaleOpen();
    event NitidShopsRevealed();

    constructor(string memory baseURI) ERC721("Nitid", "nitid"){
        _setBaseURI(baseURI);
        setSalesRoundMain();

        // Set Price Table
        _salesRoundToPriceMap["MAIN"] = 0.1 ether;
        _salesRoundToPriceMap["PRESALE"] = 0.1 ether;

        // Set Mint Limit per Sales Round
        _totalDevReserveSize = 300;

        _genesisReserveSize = 1;
        _salesRoundGiveAwayReserveSize = 9 * 3;
        // 9 give away for 3 rounds
        _devReserveSize = 30;
        _continuousGiveAwayAndAuctionReserveSize = _totalDevReserveSize - _genesisReserveSize - _salesRoundGiveAwayReserveSize - _devReserveSize;

        _salesRoundToMintLimitMap["MAIN"] = MAX_ELEMENTS;
        _salesRoundToMintLimitMap["PRESALE"] = MAX_ELEMENTS;
    }

    modifier saleIsOpen {
        require(totalSupply() <= MAX_ELEMENTS, "Nitid soldout!");
        require(!paused(), "Nitid sale is not open!");
        _;
    }

    function whitelist(address _user) public onlyOwner {
         whitelisted[_user] = true;
     }
     function batchWhitelist(address[] memory _users) public onlyOwner {
            uint256 size = _users.length; 
            for(uint256 i=0; i< size; i++){
              address user = _users[i];
              whitelisted[user] = true;
            }
     }

    

    function mintForDevReserve(
        uint256 _count,
        string calldata metaData
        
        ) public onlyOwner {
        require(_currentDevReserveSize + _count <= _totalDevReserveSize, "Reached max minting limit for dev reserve!");
        _mintElements(owner(), _count, metaData);
        _currentDevReserveSize += _count;
    }
    function setSalesRoundPreSale() public onlyOwner {
        _currentSalesRound = "PRESALE";
    }
    function setSalesRoundMain() public onlyOwner {
        _currentSalesRound = "MAIN";
    }

    function currentSalesRound() public view returns (string memory) {
        return _currentSalesRound;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseTokenURI;
    }

    function _setBaseURI(string memory baseURI) private {
        baseTokenURI = baseURI;
    }

    function reveal(string memory baseURI) external onlyOwner revealer {
        _setBaseURI(baseURI);
        emit NitidShopsRevealed();
    }

    
    function mint(
        uint256  _count,
        string calldata metaData
        ) public payable saleIsOpen {
        uint256 total = totalSupply();
        string memory salesRound  = currentSalesRound();
        require(_count <= 2, "Only 2 NFT can be minted at once!");
        require(mintingAvailableCurrentSalesRound(_msgSender(), _count), "Only 2 NFT can be minted per round!");
        require(total + _count <= MAX_ELEMENTS, "Reached max minting limit!");
        require(msg.value >= price(_count), "Sent value is below the price!");
        require( (compareStrings(salesRound, "PRESALE") && isWhitelisted(_msgSender())) || compareStrings(salesRound, "MAIN") , "NFT Minting is allow for whitelist address" );
        _mintElements(_msgSender(), _count, metaData);
    }
    function isWhitelisted(address _address) public view returns(bool) {
        return whitelisted[_address];
    }
    function compareStrings(string memory s1, string memory s2) private pure returns (bool) {
    bytes memory b1 = bytes(s1);
    bytes memory b2 = bytes(s2);
    uint256 l1 = b1.length;
    if (l1 != b2.length) return false;
    for (uint256 i=0; i<l1; i++) {
        if (b1[i] != b2[i]) return false;
    }
    return true;
}
    

    function mintForOwner(uint256 _count, string calldata metaData) public onlyOwner {
        uint256 total = totalSupply();
        require(total + _count <= MAX_ELEMENTS, "Reached max minting limit!");
        // require(msg.value >= price(_count), "Sent value is below the price!");
        _mintElements(_msgSender(), _count, metaData);
    }
    function tranferToken(address fromAddress, address to, uint256 tokenId) public {
        safeTransferFrom( fromAddress,  to,  tokenId);
    }

    function _mintElements(
        address _to,
        uint256 _count,
        string calldata metaData

        ) private {
        for (uint8 i = 0; i < _count; i++) {
            _mintAnElement(_to, metaData);
            _salesRoundToUserMintCountMap[currentSalesRound()][_msgSender()] += 1;
        }
    }

    function _mintAnElement(
    address _to,
    string calldata metaData

    ) private {
        _safeMint(_to, totalSupply());
        uint256 totalToken  = totalSupply();
        // Emitting mint record with user information
        emit NitidMintRecordWithToken(
        _to,
        totalToken,
        metaData
       );
    }

    function price(uint256 _count) public view returns (uint256) {
        return _salesRoundToPriceMap[currentSalesRound()] * _count;
    }

    function mintingAvailableCurrentSalesRound(address _owner, uint256 _count) public view returns (bool) {
        return _salesRoundToUserMintCountMap[currentSalesRound()][_owner] + _count <= 2;
    }

    function walletOfOwner(address _owner) external view returns (uint256[] memory) {
        uint256 tokenCount = balanceOf(_owner);

        uint256[] memory tokensId = new uint256[](tokenCount);
        for (uint256 i = 0; i < tokenCount; i++) {
            tokensId[i] = tokenOfOwnerByIndex(_owner, i);
        }

        return tokensId;
    }

 

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function withdrawAll() public onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0);
        _withdraw(owner(), address(this).balance);
    }

    function _withdraw(address _address, uint256 _amount) private {
        (bool success,) = _address.call{value : _amount}("");
        require(success, "Transfer failed!");
    }
    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

        string memory baseURI = _baseURI();
        return  string(abi.encodePacked(baseURI, "/0000000000000000000000000000000000000000000000000000000000000001.json")) ;
    }

    /**
     * @dev See {ERC721-_beforeTokenTransfer}.
     *
     * Requirements:
     *
     * - the contract must not be paused.
     */
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal virtual override {
        super._beforeTokenTransfer(from, to, tokenId);

        require(!paused(), "ERC721Pausable: token transfer while paused!");
    }
}