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

const diceSides = {
  1: "/images/dice/1.png",
  2: "/images/dice/2.png",
  3: "/images/dice/3.png",
  4: "/images/dice/4.png",
  5: "/images/dice/5.png",
  6: "/images/dice/6.png",
} as const;

export default function DicePage({ params, searchParams }: DicePageProps) {
  const [twoDice, setTwoDice] = useState([1, 1]);
  const [isTicketChosen, setIsTicketChosen] = useState(false);
  const { sdk, connected, account } = useSDK();
  const { push } = useNavigation();

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
                      Choose what numbers you want to bet on
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
                                gameType: "dice",
                                choice: twoDice,
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
                  <div className="grid grid-cols-3 sm:grid-cols-6 items-center w-fit gap-5">
                    {Array.from({ length: 6 }, (_, i) => i + 1).map((i) => (
                      <Button
                        variant="outline"
                        key={i}
                        onClick={() => setTwoDice((prev) => [i, prev[1]])}
                        className={cn(
                          "w-20 h-20 rounded-xl p-2 flex items-center justify-center",
                          {
                            "border-primary border-4": twoDice[0] === i,
                          }
                        )}
                      >
                        <Image
                          width={200}
                          height={200}
                          src={diceSides[i as keyof typeof diceSides]}
                          alt={`dice side ${i}`}
                        />
                      </Button>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 sm:grid-cols-6 items-center w-fit gap-5 mt-5 pt-5 border-t-2">
                    {Array.from({ length: 6 }, (_, i) => i + 1).map((i) => (
                      <Button
                        variant="outline"
                        key={i}
                        onClick={() => setTwoDice((prev) => [prev[0], i])}
                        className={cn(
                          "w-20 h-20 rounded-xl p-2 flex items-center justify-center",
                          {
                            "border-primary border-4": twoDice[1] === i,
                          }
                        )}
                      >
                        <Image
                          width={200}
                          height={200}
                          src={diceSides[i as keyof typeof diceSides]}
                          alt={`dice side ${i}`}
                        />
                      </Button>
                    ))}
                  </div>
                </>
              )}
              {isTicketChosen && (
                <Ticket
                  eventDate={new Date()}
                  numbers={twoDice}
                  ownerID={formatAddress(account)}
                  size="large"
                  game="dice"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
