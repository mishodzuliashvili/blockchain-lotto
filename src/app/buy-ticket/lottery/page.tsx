"use client";
import Ticket from "@/components/ticket";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import buyTicket from "@/contract-functions/buy-ticket";
import useNavigation from "@/hooks/use-navigation";
import { cn } from "@/utils/cn";
import formatAddress from "@/utils/format-address";
import { useSDK } from "@metamask/sdk-react";
import { useState } from "react";

type BuyTicketPageProps = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

const SIZE_OF_TICKET = 6;

export default function BuyTicketPage({
  params,
  searchParams,
}: BuyTicketPageProps) {
  const [value, setValue] = useState<Set<Number>>(new Set());
  const { sdk, connected, account } = useSDK();
  const [isTicketChosen, setIsTicketChosen] = useState(false);
  const { push } = useNavigation();

  const nums = new Array(32)
    .fill(0)
    .map((_, i) => i + 1)
    .map((i) => (
      <Button
        variant="outline"
        key={i}
        onClick={() => {
          setValue((prev) => {
            const next = new Set(prev);
            if (next.has(i)) {
              next.delete(i);
            } else {
              next.add(i);
            }
            return next;
          });
        }}
        disabled={value.size >= SIZE_OF_TICKET && !value.has(i)}
        className={cn(
          "aspect-square border-2 min-w-[70px] min-h-[70px] rounded-xl inline-flex items-center justify-center",
          {
            "border-primary text-primary": value.has(i),
            "border-gray-200 text-gray-600": !value.has(i),
          }
        )}
      >
        {i}
      </Button>
    ));

  return (
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
                    Choose your lucky number and buy the ticket
                    <br />
                  </p>
                  {!isTicketChosen && (
                    <div className="flex items-center gap-4 mt-10">
                      <Button
                        onClick={() => {
                          if (value.size < SIZE_OF_TICKET) {
                            return alert("Choose 6 numbers");
                          }
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
                    <h4 className="text-base  text-primary mb-2">Buy Ticket</h4>
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
                              gameType: "lottery",
                              choice: Array.from(value.entries()).map(
                                ([key, value], index) => value
                              ) as number[],
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
              <div
                id="numbers"
                className="gap-2 grid grid-cols-4 sm:grid-cols-8 w-full sm:w-fit"
              >
                {nums}
              </div>
            )}
            {isTicketChosen && (
              <Ticket
                eventDate={new Date()}
                numbers={
                  Array.from(value.entries()).map(
                    ([key, value], index) => value
                  ) as number[]
                }
                ownerID={formatAddress(account)}
                size="large"
                game="lottery"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
