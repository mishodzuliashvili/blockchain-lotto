"use client";

import { cn } from "@/utils/cn";
import formatAddress from "@/utils/format-address";
import { useSDK } from "@metamask/sdk-react";

type TicketProps = {
  numbers: (number | string)[];
  buyDate?: Date;
  eventDate?: Date;
  ownerID: string;
  size: "small" | "medium" | "large";
  game: "lottery" | "coinflip" | "dice";
};

export default function Ticket({
  buyDate,
  eventDate,
  numbers,
  ownerID,
  size,
  game,
}: TicketProps) {
  return (
    <section className="">
      <div
        className={cn("flex w-full h-auto relative", {
          // "h-[300px]": size === "small",
          // "h-96": size === "medium",
          // "h-120": size === "large",
        })}
      >
        <div className="sm:block hidden">
          {game === "lottery" && (
            <img
              src="./lottery.png"
              className="w-[100px] h-auto absolute right-5 bottom-5 z-0"
              alt=""
            />
          )}
          {game === "coinflip" && (
            <img
              src="./dollar.png"
              className="w-[100px] h-auto absolute right-5 bottom-5 z-0"
              alt=""
            />
          )}
          {game === "dice" && (
            <img
              src="./dice.png"
              className="w-[95px] h-auto absolute right-5 bottom-5 z-0"
              alt=""
            />
          )}
        </div>
        <div className=" bg-gray-100 flex items-center justify-center px-8 rounded-lg"></div>
        <div className="relative flex flex-col items-center border-dashed justify-between border-2 bg-white border-primary">
          <div className="absolute rounded-full w-8 h-8 bg-primary -top-5"></div>
          <div className="absolute rounded-full w-8 h-8 bg-primary -bottom-5"></div>
        </div>
        <div className="h-full py-8 px-10 bg-gray-100 flex-grow rounded-lg grid gap-5">
          <div className="flex gap-10 flex-wrap">
            <div className="flex flex-col">
              <span
                className={cn({
                  "text-md": size === "small",
                  "text-lg": size === "medium" || size === "large",
                })}
              >
                Buy Date
              </span>
              <span className="font-mono">
                {buyDate && (
                  <>
                    {buyDate.toLocaleDateString()}{" "}
                    {buyDate.toLocaleTimeString()}
                  </>
                )}
                {!buyDate && "Not bought yet"}
              </span>
            </div>
            <div className="flex flex-col">
              <span
                className={cn({
                  "text-md": size === "small",
                  "text-lg": size === "medium" || size === "large",
                })}
              >
                Event Date
              </span>
              <span className="font-mono">
                {eventDate && (
                  <>
                    {eventDate.toLocaleDateString()}{" "}
                    {eventDate.toLocaleTimeString()}
                  </>
                )}
                {!eventDate && "Starts Soon"}
              </span>
            </div>
            <div className="flex flex-col">
              <span
                className={cn({
                  "text-md": size === "small",
                  "text-lg": size === "medium" || size === "large",
                })}
              >
                Owner ID
              </span>
              <span className="font-mono">{ownerID}</span>
            </div>
            <div className="flex flex-col">
              <span
                className={cn({
                  "text-md": size === "small",
                  "text-lg": size === "medium" || size === "large",
                })}
              >
                Game
              </span>
              <span className="font-mono">
                {game === "lottery"
                  ? "Lottery"
                  : game === "coinflip"
                  ? "Coinflip"
                  : "Dice"}
              </span>
            </div>
          </div>
          <div className="z-10">
            <div className="mb-4">Your Choice</div>
            <div className="flex flex-wrap gap-5 w-fit z-10">
              {numbers?.map((value) => (
                <div
                  key={value}
                  className="items-center bg-white rounded-lg justify-center px-5 py-3 inline-flex"
                >
                  {game === "coinflip"
                    ? value == 1
                      ? "Head"
                      : "Tail"
                    : value.toString()}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
