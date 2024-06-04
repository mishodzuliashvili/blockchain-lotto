import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/utils/cn";
import fontSans from "@/constants/font";
import NavBar from "@/components/navbar";
import Providers from "@/providers/providers";
import Footer from "@/components/sections/footer";
import COMPANY from "@/constants/company";

export const metadata: Metadata = {
  title: COMPANY.title,
  description: COMPANY.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body>
        <Providers>
          <div
            className={cn(
              "min-h-screen bg-background font-sans antialiased grid grid-rows-[auto,1fr,auto]",
              fontSans.variable
            )}
          >
            <NavBar />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
