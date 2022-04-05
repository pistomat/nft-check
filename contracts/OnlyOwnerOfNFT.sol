// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721.sol";

contract RestrictedAccess {
    modifier onlyOwnerOfNFT(ERC721 _nft, uint256 _tokenId) {
        require(_nft.ownerOf(_tokenId) == msg.sender);
        _;
    }
}