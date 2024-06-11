"use client";
import Ticket from "@/components/ticket";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useCountdown, useWindowSize } from "usehooks-ts";
import Confetti from "react-confetti";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useSDK } from "@metamask/sdk-react";
import formatAddress from "@/utils/format-address";
import CountDown from "@/components/countdown";
import getAllActiveTickets from "@/contract-functions/get-all-active-tickets";
import getEndDates from "@/contract-functions/get-end-dates";

type AccountPageProps = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

const TIME_INTERVAL = 1000;

export default function AccountPage({
  params,
  searchParams,
}: AccountPageProps) {
  const { account } = useSDK();
  const [isDialogOpen, setIsDialogOpen] = useState(null);
  const [tickets, setTickets] = useState<any[]>([]);
  const [gameEndDate, setGameEndDate] = useState<any>({
    0: null,
    1: null,
    2: null,
  });

  useEffect(() => {
    if (account && (!tickets || tickets.length === 0)) {
      // console.log("account", account);
      getAllActiveTickets({ account }).then((result) => {
        setTickets(result as any);
      });
      Promise.all([getEndDates(0), getEndDates(1), getEndDates(2)]).then(
        (result) => {
          console.log(result);
          setGameEndDate({
            0:
              (result[0] as any) != 0
                ? new Date(Number(result[0] as any) * 1000)
                : null,
            1:
              (result[1] as any) != 0
                ? new Date(Number(result[1] as any) * 1000)
                : null,
            2:
              (result[2] as any) != 0
                ? new Date(Number(result[2] as any) * 1000)
                : null,
          });
        }
      );
    }
  }, [account]);
  console.log({
    tickets,
  });
  return (
    <div className="container pt-10">
      <Dialog open={!!isDialogOpen}>
        <DialogContent
          onOutlineClick={() => setIsDialogOpen(null)}
          className="sm:max-w-[425px]"
        >
          <h1 className="text-3xl font-semibold text-center">
            {((isDialogOpen as any)?.winners as any)?.includes(account)
              ? "Congratulations!"
              : "Better luck next time!"}
          </h1>
          <div className="flex flex-wrap gap-5 w-fit z-10">
            {(isDialogOpen as any)?.winningNumbers
              .map((a: any) => Number(a))
              .map((n: any, i: any) => (
                <div
                  key={i}
                  className="items-center bg-white rounded-lg justify-center px-5 py-3 inline-flex"
                >
                  {(isDialogOpen as any)?.game == 0
                    ? n == 1
                      ? "Head"
                      : "Tail"
                    : n.toString()}
                </div>
              ))}
          </div>
        </DialogContent>
      </Dialog>
      <div className="max-w-2xl mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
          Countdowns
        </h2>
        <p className="mt-1 text-gray-600">
          Countdowns for the lottery and other games
        </p>
      </div>

      <div className="grid xl:grid-cols-3 gap-10">
        <CountDown
          gameType={2}
          secs={60}
          onCountdownEnd={(data) => setIsDialogOpen(data)}
          title="Lottery"
        />
        <CountDown
          gameType={1}
          secs={55}
          onCountdownEnd={(data) => setIsDialogOpen(data)}
          title="Dice"
        />
        <CountDown
          gameType={0}
          secs={67}
          onCountdownEnd={(data) => setIsDialogOpen(data)}
          title="Coin"
        />
      </div>
      <div className="mt-10 flex items-center w-full">
        <a href="#playgame">
          <Button size="lg">Play Game</Button>
        </a>
      </div>
      <div className="max-w-2xl mb-10 lg:mb-14 mt-10">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
          Active Tickets
        </h2>
        <p className="mt-1 text-gray-600">
          Active tickets for the lottery and other games
        </p>
      </div>
      <section className="grid xlm:grid-cols-2 gap-12">
        {tickets
          .filter((t) => !t.used)
          .map((ticket: any, i: number) => (
            <Ticket
              key={i}
              game={
                ticket.gamePlayed == 0
                  ? "coinflip"
                  : ticket.gamePlayed == 1
                  ? "dice"
                  : "lottery"
              }
              buyDate={new Date(Number(ticket.startDate) * 1000)}
              ownerID={formatAddress(account)}
              eventDate={
                gameEndDate[ticket.gamePlayed] &&
                gameEndDate[ticket.gamePlayed] !== 0
                  ? gameEndDate[ticket.gamePlayed]
                  : null
              }
              size="small"
              numbers={ticket.selectedOptions}
            />
          ))}
        {/* <Ticket
          game="coinflip"
          buyDate={new Date("2023-11-06T17:45:00")}
          ownerID={formatAddress(account)}
          eventDate={new Date("2023-09-06T17:45:00")}
          size="small"
          numbers={["Head"]}
        />
        <Ticket
          game="dice"
          buyDate={new Date("2023-11-06T17:45:00")}
          ownerID={formatAddress(account)}
          eventDate={new Date("2023-09-06T17:45:00")}
          size="small"
          numbers={["5", "6"]}
        /> */}
      </section>
      <div id="playgame" className="max-w-2xl mb-10 lg:mb-14 mt-10">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
          Our Games
        </h2>
        <p className="mt-1 text-gray-600">Play games and earn rewards</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link className="group" href="/buy-ticket/lottery">
          <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
            <img
              className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
              src="https://img.freepik.com/free-vector/bingo-game-realistic-poster-with-lottery-tickets-colorful-balls-background-with-falling-coins-vector-illustration_1284-83629.jpg?t=st=1717943416~exp=1717947016~hmac=4b583664e030230fc27b19d991d92be7036222edca0dd9f4beb17bae9261b4ad&w=900"
              // src="https://t4.ftcdn.net/jpg/04/50/56/13/360_F_450561347_zIokGlk9mLjU5iRe2YqSq3A5BD5ErabK.jpg"
              // src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
              alt="Image Description"
            />
            <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3">
              Best
            </span>
          </div>

          <div className="mt-7">
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
              Blockchain Lottery
            </h3>
            <p className="mt-3 text-gray-800">
              Play the lottery and win rewards in cryptocurrency
            </p>
            <p className="mt-5 inline-flex items-center gap-x-1 text-primary decoration-2 group-hover:underline font-medium">
              Buy Ticket
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </div>
        </Link>

        <Link className="group" href="/buy-ticket/dice">
          <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
            <img
              className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
              src="https://img.freepik.com/free-vector/two-vector-red-casino-falling-dice-with-white-dots-isolated-background_1284-48503.jpg?t=st=1717943472~exp=1717947072~hmac=aa6b7257d2acb702f4781aca8a8b1f29bfd604c9c0752aed33c7e311a8350ee6&w=740"
              // src="https://t4.ftcdn.net/jpg/04/29/88/39/360_F_429883941_N6iYMsuE70OHbQDIPKpiaavbJrzBBASO.jpg"
              // src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Image Description"
            />
          </div>

          <div className="mt-7">
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
              Dice
            </h3>
            <p className="mt-3 text-gray-800">
              Roll the dice and win rewards in cryptocurrency
            </p>
            <p className="mt-5 inline-flex items-center gap-x-1 text-primary decoration-2 group-hover:underline font-medium">
              Play now
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </div>
        </Link>
        <Link className="group" href="/buy-ticket/coin">
          <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
            <img
              className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
              src="https://assets.iflscience.com/assets/articleNo/71047/aImg/71241/coin-toss-meta.png"
              // src="https://t4.ftcdn.net/jpg/04/29/88/39/360_F_429883941_N6iYMsuE70OHbQDIPKpiaavbJrzBBASO.jpg"
              // src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Image Description"
            />
          </div>

          <div className="mt-7">
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
              Coin Flip
            </h3>
            <p className="mt-3 text-gray-800">
              Flip the coin and win rewards in cryptocurrency
            </p>
            <p className="mt-5 inline-flex items-center gap-x-1 text-primary decoration-2 group-hover:underline font-medium">
              Play now
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
