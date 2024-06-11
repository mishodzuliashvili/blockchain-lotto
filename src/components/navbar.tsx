"use client";

import Link from "next/link";

import ConnectWalletButton from "./connect-wallet-button";
import COMPANY from "@/constants/company";
import { Button } from "./ui/button";
import contract from "@/lib/contract";
import { useSDK } from "@metamask/sdk-react";

export default function NavBar() {
  const { account } = useSDK();
  return (
    <nav className="container flex items-center justify-between py-7">
      <Link href="/" className="flex gap-1">
        <span className="text-2xl font-bold">
          <span className="text-primary">{COMPANY.title}</span>
        </span>
      </Link>

      {/* <Button
        onClick={() => {
          contract!.methods.setGameInfo(0, "10", "125").call({});
        }}
      >
        SetGameCoinMoreTime
      </Button> */}
      <div className="flex gap-4">
        <ConnectWalletButton />
      </div>
    </nav>
  );
}
