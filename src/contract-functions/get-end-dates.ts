"use client";

import contract from "@/lib/contract";

export default async function getEndDates(gameType: number) {
  return await contract!.methods.getGameEndDate(gameType).call({});
}
