import { ethers} from "hardhat";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { Counter__factory, Counter, MyToken__factory, MyToken } from "../typechain-types";
import { BigNumber, BigNumberish, Signer } from "ethers";
import { Provider } from "@ethersproject/abstract-provider";

chai.use(chaiAsPromised);
const { expect } = chai;

describe("onlyOwnerOfNFT", () => {
  let nft: MyToken;
  let tokenId: BigNumber;
  let counter: Counter;
  let signers: Signer[];

  beforeEach(async () => {
    signers = await ethers.getSigners();

    const tokenFactory = (await ethers.getContractFactory(
      "MyToken",
      signers[0]
    )) as MyToken__factory;
    nft = await tokenFactory.deploy()
    tokenId = await (await nft.safeMint( await signers[0].getAddress() )).value
    await nft.safeMint( await signers[0].getAddress())

    const counterFactory = (await ethers.getContractFactory(
      "Counter",
      signers[0]
    )) as Counter__factory;
    counter = await counterFactory.deploy();
    await counter.deployed();
    const initialCount = await counter.getCount();

    expect(nft.address).to.properAddress;
    expect(initialCount).to.eq(0);
    expect(counter.address).to.properAddress;
  });

  describe("test new modifier", async () => {
    it("should count up with owner", async () => {
      await counter.countUp(nft.address, tokenId);
      let count = await counter.getCount();
      expect(count).to.eq(1);
    });

    it("should revert with another signer", async () => {
      await expect(counter.connect(signers[1]).countUp(nft.address, tokenId)).to.be.reverted;
    });

    it("should revert with another tokenId", async () => {
      await expect(counter.countUp(nft.address, "0x1234")).to.be.reverted;
    });

    it("should revert with bad address", async () => {
      await expect(counter.countUp(await signers[0].getAddress(), tokenId)).to.be.reverted;
    });
  });
});
