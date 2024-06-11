"use client";
import COMPANY from "@/constants/company";
// import { ThemeProvider as NextThemesProvider } from "next-themes";
import NavigationProvider from "./navigation-provider";
import { MetaMaskProvider, useSDK } from "@metamask/sdk-react";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
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
    <MetaMaskProvider debug={false} sdkOptions={sdkOptions}>
      <NavigationProvider>{children}</NavigationProvider>
    </MetaMaskProvider>
  );
}
