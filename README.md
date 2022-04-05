# Use case 2: Check whether the sender holds an NFT

We check that a sender of a message (msg.sender) is an owner of a specific NFT.

## Smart contract logic
- We send NFT smart contract (ERC721) address and NFT ID as parameters to our smart contract method
- We check that the sender of the message (msg.sender) is the owner of the NFT in the provided ERC721 NFT smart contract

## Implementation

Implemented as a modifier ```onlyOwnerOfNFT``` in ```contracts/Counter.sol:20``` which takes an address of ERC721 and token ID as input and checks that the msg.sender is it's owner, reverts otherwise.
It is possible to throw a custom error with this code:

`if (_nft.ownerOf(_tokenId) != msg.sender) revert CustomError();`

## Install
`npm install`

## Run tests
`npm run build`
`npm run test`


