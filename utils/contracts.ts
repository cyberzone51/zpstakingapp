import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { stakingABI } from "./stakingABI";

const nftContractAddress = "0x8aCd35c1fe5EeA6451f4ab9512Fc1540CC60e98c";
const rewardTokenContractAddress = "0xa059ea464C5E671d354Ca3F55Fe076CCb7d414d5";
const stakingContractAddress = "0x9df0aE1197192e9f5d80DED870B287DB2e32c880";

export const NFT_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: nftContractAddress
});

export const REWARD_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: rewardTokenContractAddress
});

export const STAKING_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: stakingContractAddress,
    abi: stakingABI
});