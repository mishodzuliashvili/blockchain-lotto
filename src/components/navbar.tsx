"use client";

import Link from "next/link";

import { MetaMaskProvider } from "@metamask/sdk-react";
import ConnectWalletButton from "./connect-wallet-button";
import COMPANY from "@/constants/company";

export default function NavBar() {
  const host =
    typeof window !== "undefined" ? window.location.host : "defaultHost";

  const sdkOptions = {
    logging: { developerMode: false },
    checkInstallationImmediately: false,
    dappMetadata: {
      name: COMPANY.title,
      url: host,
    },
  };

  return (
    <nav className="container flex items-center justify-between px-6 py-7">
      <Link href="/" className="flex gap-1">
        <span className="text-2xl font-bold">
          <span className="underline text-primary">{COMPANY.title}</span>
        </span>
      </Link>
      <div className="flex gap-4 px-6">
        <MetaMaskProvider debug={false} sdkOptions={sdkOptions}>
          <ConnectWalletButton />
        </MetaMaskProvider>
      </div>
    </nav>
  );
}
