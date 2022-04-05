// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721.sol";

/**
@title Contract implementing the onlyOwnerOfNFT modifier. 
@author bokeh.eth
@dev Either copy this modifier to target contract or inherit from this contract.
 */
abstract contract OnlyOwnerOfNFT {
    /**
    @notice Check that msg.sender is the owner of ERC721 token.
    @param _nft Address of the ERC721 token
    @param _tokenId Token ID to check
     */
    modifier onlyOwnerOfNFT(ERC721 _nft, uint256 _tokenId) {
        require(_nft.ownerOf(_tokenId) == msg.sender);
        _;
    }
}