"use client";

import ContractABI from "./contract.json";
import Web3 from "web3";
let web3;

let contract = null;

if (typeof window !== "undefined") {
  web3 = new Web3(window.ethereum);

  contract = new web3.eth.Contract(
    ContractABI,
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS
  );
}

export default contract;
