"use client";

import getEndDates from "@/contract-functions/get-end-dates";
import conductGame from "@/lib/conduct-game";
import contract from "@/lib/contract";
import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";

type CountDownProps = {
  secs: number;
  onCountdownEnd?: (data: any) => void;
  title: string;
  gameType: number;
};

export default function CountDown({
  secs,
  onCountdownEnd,
  title,
  gameType,
}: CountDownProps) {
  const [timeLeft, setTimeLeft] = useState(1);

  useEffect(() => {
    const id = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  });

  useEffect(() => {
    getEndDates(gameType).then((res) => {
      setTimeLeft(Number(res) - Math.floor(Date.now() / 1000));
    });
  }, [gameType]);

  useEffect(() => {
    if (timeLeft === 0) {
      conductGame(gameType);
    }
  }, [timeLeft]);

  useEffect(() => {
    if (contract!.events.GameStarted) {
      contract!.events.GameStarted().on("data", function (event: any) {
        if (event.returnValues.game != gameType) return;
        setTimeLeft(
          Number(event.returnValues.endDate) - Math.floor(Date.now() / 1000)
        );
      });

      contract!.events.GameResult().on("data", function (event: any) {
        onCountdownEnd && onCountdownEnd(event.returnValues);
      });
    }
  }, []);

  const hours = Math.floor((timeLeft > 0 ? timeLeft : 0) / 3600);
  const minutes = Math.floor(((timeLeft > 0 ? timeLeft : 0) % 3600) / 60);
  const seconds = Math.floor((timeLeft > 0 ? timeLeft : 0) % 60);

  return (
    <>
      <div className="relative">
        <div
          className={cn(" rounded-lg border-2 p-5", {
            "": timeLeft <= 0,
          })}
        >
          <div className="flex text-center flex-col items-center w-full gap-8">
            <span className="text-2xl sm:text-3xl font-semibold text-black tracking-widest">
              {title}
            </span>
            <div
              className={cn("text-lg hidden font-semibold text-primary", {
                block: timeLeft <= 0,
              })}
            >
              Not Started Yet
            </div>
            <div className="flex gap-3 sm:gap-8">
              <div className="flex flex-col gap-5 relative">
                <div
                  className={cn(
                    "h-16 w-16 sm:h-24 sm:w-24 flex justify-between items-center bg-primary rounded-lg",
                    {}
                  )}
                >
                  <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-primary/50"></div>
                  <span className="text-3xl font-semibold text-white">
                    {timeLeft > 0 ? hours : "X"}
                  </span>
                  <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-primary/50"></div>
                </div>
                <span className=" text-center font-medium">
                  {hours == 1 ? "Hour" : "Hours"}
                </span>
              </div>
              <div className="flex flex-col gap-5 relative">
                <div className="h-16 w-16 sm:h-24 sm:w-24 flex justify-between items-center bg-primary rounded-lg">
                  <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-primary/50"></div>
                  <span className="text-3xl font-semibold text-white">
                    {timeLeft > 0 ? minutes : "X"}
                  </span>
                  <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-primary/50"></div>
                </div>
                <span className=" text-center font-medium">
                  {minutes == 1 ? "Minute" : "Minutes"}
                </span>
              </div>
              <div className="flex flex-col gap-5 relative">
                <div className="h-16 w-16 sm:h-24 sm:w-24 flex justify-between items-center bg-primary rounded-lg">
                  <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-primary/50"></div>
                  <span className=" text-3xl font-semibold text-white">
                    {timeLeft > 0 ? seconds : "X"}
                  </span>
                  <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-primary/50"></div>
                </div>
                <span className=" text-center font-medium">
                  {seconds == 1 ? "Second" : "Seconds"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
