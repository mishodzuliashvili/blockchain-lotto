"use client";

import contract from "@/lib/contract";

type buyTicketProps = {
  gameType: "lottery" | "coinflip" | "dice";
  choice: (number | string)[];
  account?: string;
};

export default async function buyTicket({
  gameType,
  choice,
  account,
}: buyTicketProps) {
  const gameId = gameType === "coinflip" ? 0 : gameType === "dice" ? 1 : 2;
  const price = (
    ((await contract!.methods.gameInfos(gameId).call()) as any)
      .betAmount as bigint
  ).toString();
  console.log(price);
  if (gameType === "coinflip") {
    let myChoice = choice as unknown as "head" | "tail";
    let choices = [myChoice === "head" ? 1 : 0];
    await contract!.methods
      .buyTicket(0, choices)
      .send({ from: account, gas: "500000", value: price });
  } else if (gameType === "dice") {
    await contract!.methods
      .buyTicket(1, choice)
      .send({ from: account, gas: "500000", value: price });
  } else if (gameType === "lottery") {
    await contract!.methods
      .buyTicket(2, choice)
      .send({ from: account, gas: "500000", value: price });
  }
}
