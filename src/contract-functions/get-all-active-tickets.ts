"use client";

import contract from "@/lib/contract";

type getAllActiveTicketsProps = {
  account?: string;
};

export default async function getAllActiveTickets({
  account,
}: getAllActiveTicketsProps) {
  const result = await contract!.methods.getPlayerGameStatuses(account).call({
    from: account,
  });
  // console.log(result);
  return result;
}
