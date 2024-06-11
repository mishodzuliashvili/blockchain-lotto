"use client";

import Ticket from "@/components/ticket";
import { Button } from "@/components/ui/button";
import buyTicket from "@/contract-functions/buy-ticket";
import useNavigation from "@/hooks/use-navigation";
import { cn } from "@/utils/cn";
import formatAddress from "@/utils/format-address";
import { useSDK } from "@metamask/sdk-react";
import Image from "next/image";
import { useState } from "react";

type DicePageProps = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

const coinSides = {
  head: "/images/coin/head.png",
  tail: "/images/coin/tail.png",
} as const;

export default function DicePage({ params, searchParams }: DicePageProps) {
  const [isTicketChosen, setIsTicketChosen] = useState(false);
  const { push } = useNavigation();
  const { sdk, connected, account } = useSDK();
  const [coinSide, setCoinSide] = useState<keyof typeof coinSides>("head");
  return (
    <>
      <div className="">
        <div className="container mb-10">
          <div className="bg-primary text-white  p-5 rounded-lg font-semibold">
            Win Jackpot
          </div>
        </div>
        <div>
          <div className="container grid grid-cols-1 xl:grid-cols-[auto_1fr] gap-8">
            <ol className="overflow-hidden space-y-8">
              <li className="relative after:content-['']  after:w-0.5 after:h-full  after:bg-primary after:inline-block after:absolute after:-bottom-11 after:left-4 lg:after:left-5">
                <div className="flex items-start font-medium w-full  ">
                  <span className="w-full aspect-square bg-primary border-2 border-transparent rounded-lg flex justify-center items-center mr-3 text-sm text-white max-w-10 h-10">
                    1
                  </span>
                  <div className="w-full">
                    <h4 className="text-base font-medium mb-2">
                      Choose the ticket
                    </h4>
                    <p className="text-sm max-w-xs">
                      Choose the side of the coin
                      <br />
                    </p>
                    {!isTicketChosen && (
                      <div className="flex items-center gap-4 mt-10">
                        <Button
                          onClick={() => {
                            setIsTicketChosen(true);
                          }}
                        >
                          Continue
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </li>
              <li className="relative flex-1 after:content-[''] z-10 ">
                <a className="flex items-start font-medium w-full  ">
                  <span
                    className={cn(
                      " bg-gray-50 relative z-20 border-2 border-primary rounded-lg flex justify-center items-center mr-3 text-sm text-primary w-full max-w-10 h-10",
                      {
                        "bg-primary text-white": isTicketChosen,
                      }
                    )}
                  >
                    2
                  </span>
                  <div>
                    <div className="w-full">
                      <h4 className="text-base  text-primary mb-2">
                        Buy Ticket
                      </h4>
                      <p className="text-sm max-w-xs">
                        Buy the ticket and wait for the result
                      </p>
                    </div>
                    {isTicketChosen && (
                      <div className="flex items-center gap-4 mt-5">
                        <Button
                          onClick={() => {
                            push("/account", async () => {
                              await buyTicket({
                                gameType: "coinflip",
                                choice: [coinSide],
                                account: account,
                              });
                            });
                          }}
                        >
                          Buy Ticket
                        </Button>
                        <Button
                          variant="ghost"
                          onClick={() => setIsTicketChosen(false)}
                        >
                          Back
                        </Button>
                      </div>
                    )}
                  </div>
                </a>
              </li>
            </ol>
            <div>
              {!isTicketChosen && (
                <>
                  <div>
                    <div className="flex items-center gap-4">
                      <Button
                        variant="outline"
                        className={cn(
                          "w-[100px] h-[100px] border-4 p-2 rounded-xl",
                          {
                            "border-primary": coinSide === "head",
                          }
                        )}
                        onClick={() => {
                          setCoinSide("head");
                        }}
                      >
                        <Image
                          src={coinSides.head}
                          alt="Head"
                          width={100}
                          height={100}
                        />
                      </Button>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-[100px] border-4 p-2 h-[100px] rounded-xl",
                          {
                            "border-primary": coinSide === "tail",
                          }
                        )}
                        onClick={() => {
                          setCoinSide("tail");
                        }}
                      >
                        <Image
                          src={coinSides.tail}
                          alt="Tail"
                          width={100}
                          height={100}
                        />
                      </Button>
                    </div>
                  </div>
                </>
              )}
              {isTicketChosen && (
                <Ticket
                  eventDate={undefined}
                  numbers={coinSide === "head" ? [1] : [0]}
                  ownerID={formatAddress(account)}
                  size="large"
                  game="coinflip"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
