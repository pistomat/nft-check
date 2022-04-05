// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "hardhat/console.sol";
import "openzeppelin-solidity/contracts/token/ERC721/ERC721.sol";

contract Counter {
    uint256 count = 0;

    event CountedTo(uint256 number);

    modifier onlyOwnerOfNFT(ERC721 _nft, uint256 _tokenId) {
        require(_nft.ownerOf(_tokenId) == msg.sender);
        _;
    }

    function getCount() public view returns (uint256) {
        return count;
    }

    function countUp(ERC721 nft, uint256 tokenId) onlyOwnerOfNFT(nft, tokenId) public returns (uint256) {
        console.log("countUp: count =", count);
        uint256 newCount = count + 1;
        require(newCount > count, "Uint256 overflow");

        count = newCount;

        emit CountedTo(count);
        return count;
    }
}
