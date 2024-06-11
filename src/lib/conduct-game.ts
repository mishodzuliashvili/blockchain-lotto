"use server";

import Web3 from "web3";
import ContractABI from "./contract.json";

const provider = new Web3.providers.HttpProvider(
  `https://polygon-amoy.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
);

const web3 = new Web3(provider);

const myAccount = web3.eth.accounts.privateKeyToAccount(
  process.env.ACCOUNT_KEY!
);

web3.eth.accounts.wallet.add(myAccount);

const myContract = new web3.eth.Contract(
  ContractABI as any,
  process.env.NEXT_PUBLIC_CONTRACT_ADDRESS
);

async function conductGame(gameType: number) {
  // console.log("Calling contract method");
  await myContract.methods
    .conductGame(gameType)
    .send({ from: myAccount.address });
  // console.log("TX receipt", receipt);
}

export default conductGame;
