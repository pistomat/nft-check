/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface CounterInterface extends utils.Interface {
  functions: {
    "countUp(address,uint256)": FunctionFragment;
    "getCount()": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "countUp" | "getCount"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "countUp",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getCount", values?: undefined): string;

  decodeFunctionResult(functionFragment: "countUp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getCount", data: BytesLike): Result;

  events: {
    "CountedTo(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CountedTo"): EventFragment;
}

export interface CountedToEventObject {
  number: BigNumber;
}
export type CountedToEvent = TypedEvent<[BigNumber], CountedToEventObject>;

export type CountedToEventFilter = TypedEventFilter<CountedToEvent>;

export interface Counter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CounterInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    countUp(
      nft: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getCount(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  countUp(
    nft: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getCount(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    countUp(
      nft: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCount(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "CountedTo(uint256)"(number?: null): CountedToEventFilter;
    CountedTo(number?: null): CountedToEventFilter;
  };

  estimateGas: {
    countUp(
      nft: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getCount(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    countUp(
      nft: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}