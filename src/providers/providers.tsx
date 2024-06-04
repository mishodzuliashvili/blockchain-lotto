"use client";
// import { ThemeProvider as NextThemesProvider } from "next-themes";
import NavigationProvider from "./navigation-provider";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    // <NextThemesProvider
    //   attribute="class"
    //   defaultTheme="light"
    //   themes={["light", "dark", "system"]}
    //   enableSystem
    //   disableTransitionOnChange
    // >
    <NavigationProvider>{children}</NavigationProvider>
    // </NextThemesProvider>
  );
}
