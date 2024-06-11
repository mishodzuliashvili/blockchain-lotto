"use client";
import Image from "next/image";
// import { AnimatedTooltip } from "./ui/animated-tooltip";
import { Button } from "../ui/button";
import COMPANY from "@/constants/company";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { useSDK } from "@metamask/sdk-react";
import { useEffect } from "react";
import useNavigation from "@/hooks/use-navigation";
// import LoginWithGoogleButton from "./login-with-google-button";

type HeroProps = {};

export default function Hero({}: HeroProps) {
  const { sdk, connected, account } = useSDK();
  const { push } = useNavigation();
  const connect = async () => {
    if (account) {
      push("/account");
      return;
    }
    try {
      push("/account", async () => {
        await sdk?.connect();
      });
    } catch (err) {
      console.warn(`No accounts found`, err);
    }
  };

  return (
    <div className="container">
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <div>
          <h1 className="relative group w-full lg:text-6xl text-4xl mb-8 lg:mb-10 font-bold tracking-tight">
            {` The World's Most Transparent `}
            <span className="text-primary ">{COMPANY.title}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50.6 52.4"
              className="absolute top-3 translate-x-full right-10 w-5 fill-primary group-hover:rotate-[30deg] duration-150"
            >
              <path d="M50.6 26.7a3.3 3.3 0 0 0-4-2.7l-1.2.2c-4.1.9-7.3 1.1-10 0-2.8-1.1-4.9-3.6-7-7.8-1.5-3-1.7-5.7-2.2-9l-.5-3-.2-1.6-.3-1C24.4.4 23.2 0 22.4 0s-1.5.1-2.2.6c-.4.2-1 .7-1.4 2-.9 3.3-1.3 6.9-2.1 10.3-.6 2.6-1.5 5-3.8 7a21 21 0 0 1-6.8 3.5l-2.7.2c-.7.2-1.4.5-2 1a3.7 3.7 0 0 0-1 4.6c.3.5.9 1.4 2.3 2 1 .4 3.7 1.1 4 1.1 2.4 1 4.4 2.7 5.9 4.9 1.8 2.4 3.3 4.2 4 7.2l1.2 3.6v1.5c0 .6.4 1.1.7 1.5a3 3 0 0 0 2 1.3c.5.2 1.2.2 2 0a8.9 8.9 0 0 0 3.9-3.3c1.7-2.5 3.4-6.1 4.6-7.5 4.2-4.9 9.7-8.5 15.8-10.6l1.1-.2a3.3 3.3 0 0 0 2.7-4ZM25.9 37.1c-.8.9-1.8 2.7-3 4.6-1-3.3-2.6-5.6-4.7-8.5a19.1 19.1 0 0 0-5.3-5.3c1.6-.8 3.1-1.8 4.4-2.9 2.2-1.8 3.7-4 4.7-6.3l.4.8c3 6 6.4 9.4 10.4 11h.2c-2.6 1.9-5 4.2-7.1 6.6Z"></path>
            </svg>
            <svg
              className="absolute bottom-1 -left-0 w-7 -translate-x-full translate-y-full fill-primary -rotate-[85deg] group-hover:-rotate-[95deg] duration-150"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 67 73.4"
            >
              <path d="M22.4 68.5A132 132 0 0 0 2.8 65c-1.4-.2-2.7.8-2.8 2.2-.2 1.4.8 2.6 2.1 2.8 6.3.8 12.8 1.7 18.9 3.4 1.3.4 2.7-.4 3.1-1.7.4-1.3-.4-2.7-1.7-3.1Zm19.4-25.4c-10.3-10.5-21.9-19.7-32-30.5-.9-1-2.5-1.1-3.5-.1-1 .9-1.1 2.5 0 3.5 10.1 10.8 21.7 20 32 30.6 1 1 2.6 1 3.6 0 .9-1 1-2.6 0-3.5ZM61.1 2.6l.9 18c0 1.4 1.2 2.4 2.6 2.4 1.4 0 2.4-1.2 2.4-2.6l-.9-18.1a2.6 2.6 0 0 0-2.7-2.4c-1.3 0-2.4 1.3-2.3 2.6Z"></path>
            </svg>
            <svg
              className="absolute -bottom-2 left-[40%]  w-40 md:w-48 translate-y-full fill-primary group-hover:scale-110 duration-150"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 665 40.7"
            >
              <path d="M220.5 3.6c-73.4-.8-147 2.2-218 15.2-1.3.2-1.8.7-1.9.8-.6.6-.6 1.3-.6 1.8 0 .3.4 1.7 2.1 1.8l12.7-.7c15.1-.8 30.3-2 45.4-3.3 34.2-3 68.4-5.6 102.7-8 19.3-1.3 38.5-2.4 57.8-3.3 46.3.5 92.5 2.7 137.8 4.8l-48.3 3a2308.8 2308.8 0 0 0-105 7.9l-5.7.5a3 3 0 0 0-1.3.3 2 2 0 0 0-1.4 2c0 .3 0 2 2.2 2.3 98.1 15.1 200.5-2.5 299 12.2 1.2.2 2.2-.6 2.4-1.8.2-1.2-.6-2.2-1.8-2.4-92.8-13.9-189 1-281.9-9.9a1842.6 1842.6 0 0 1 93.6-6.8c23.3-1.2 54.7-3.6 87.6-5.2l84.7 4.8 35.7 1.8c4.9.3 17.5 1.4 19.3.9 1.4-.3 1.8-1.3 1.8-1.8 0-.6 0-1.2-.6-1.9-.2-.2-.8-.6-2-1-33.2-9.5-87.6-9.4-138.5-7.1l-32.9-1.7c-25.1-1.2-50.5-2.4-76-3.4a5008 5008 0 0 1 215.8 0c30.2.5 111.6 3.8 143.7 6.7-.4.4-.6 1-.6 1.6a2 2 0 0 0 2.2 2c6.6-.3 10.4-.7 12-1.1.9-.2 1.5-.6 1.7-.9.6-.6.7-1.3.6-1.9 0-.4-.3-.8-.7-1.2a5 5 0 0 0-2.1-1c-12.6-3.1-120.8-7.7-156.7-8.3C410.4-.5 315.4-.9 220.5 3.6Z"></path>
            </svg>
          </h1>

          <p className="mt-3 font-medium">
            Play and win big with the most secure and transparent blockchain
            lottery. Join millions of winners today!
          </p>

          <div className="mt-7 grid gap-3 w-full sm:inline-flex">
            <Button size="lg" onClick={connect}>
              Get started{" "}
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
            </Button>
            <a href="mailto:shonka.demeloper@gmail.com">
              <Button size="lg" variant="ghost">
                Contact our team
              </Button>
            </a>
          </div>
          <div className="mt-10">
            <h2 className="font-medium">
              {` Team behind the world's most transparent lottery`}
            </h2>
          </div>
          <div className="flex flex-row items-center mt-4 w-full">
            <AnimatedTooltip
              items={[
                {
                  id: 1,
                  name: "Demetre Shonia",
                  designation: "Game Developer",
                  image:
                    "https://media.licdn.com/dms/image/C4D03AQEZiSIlto-hsA/profile-displayphoto-shrink_200_200/0/1655225827593?e=2147483647&v=beta&t=ZCIFt-KQeR3b0B1_pLQuKlhEHDuY_o98uef6_oMk1dw",
                },
                {
                  id: 2,
                  name: "Tsotne Gurabanidze",
                  designation: "Backend Engineer",
                  image: "/cotne.png",
                },
                {
                  id: 3,
                  name: "Mikheil Dzuliashvili",
                  designation: "Software Engineer",
                  image:
                    "https://yt3.googleusercontent.com/-0Rgm4PydVPspcst43ybfo4us_zM6_4ZCdrmI5LB4Dxq6MJNg9oZ2u7mq7YDwmc8WIrVU-m0xTQ=s900-c-k-c0x00ffffff-no-rj",
                },
                {
                  id: 4,
                  name: "Zura Elchibegashvili",
                  designation: "Solidity Developer",
                  image:
                    "https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-6/329216156_2051217985083924_3837036673273020135_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE9o36PLTNNm6UkM_rEx-ySbtPCKOvuq9Bu08Io6-6r0Kpc_aw7vXJbCX2SZtggS-KvAhXQ4j22fUEXuYmVrd-L&_nc_ohc=p4De13qBF7MQ7kNvgFXS8Il&_nc_ht=scontent.ftbs6-2.fna&oh=00_AYBnIvrh2ZB76g6uVt4wrQkVBdspx568F-JVvBR6_YOfeg&oe=666525F1",
                },
                {
                  id: 5,
                  name: "Lasha Shermazanashvili",
                  designation: "UX Designer",
                  image:
                    "https://media.licdn.com/dms/image/D4D03AQEC_cmEG6NoPg/profile-displayphoto-shrink_800_800/0/1689153131165?e=2147483647&v=beta&t=848gRotI2sricy7GOB1JjUK6Wt-ab1TFL2YI1PgLxYY",
                },
              ]}
            />
          </div>
        </div>

        <div className="relative md:ms-4">
          <Image
            width={500}
            height={500}
            className="w-full h-[500px] object-cover rounded-xl overflow-hidden"
            // src="https://images.ctfassets.net/9sy2a0egs6zh/24jLGpgkTWP6LLaik7VZtX/03ff80ac8e526a166c5cbd59c4a2835e/Portfolio2x.png?w=1152&h=957&q=80&fm=webp"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/433c1b71983009.5bd827927f351.gif"
            // src="https://media.tenor.com/PPNvfjKVtXAAAAAC/johnny-hotel-transylvania.gif"
            alt="Image Description"
          />
          {/* <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6"></div> */}
          {/* 
          <div className="absolute bottom-0 start-0">
            <svg
              className="w-2/3 ms-auto h-auto text-white"
              width="630"
              height="451"
              viewBox="0 0 630 451"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="531"
                y="352"
                width="99"
                height="99"
                fill="currentColor"
              />
              <rect
                x="140"
                y="352"
                width="106"
                height="99"
                fill="currentColor"
              />
              <rect
                x="482"
                y="402"
                width="64"
                height="49"
                fill="currentColor"
              />
              <rect
                x="433"
                y="402"
                width="63"
                height="49"
                fill="currentColor"
              />
              <rect
                x="384"
                y="352"
                width="49"
                height="50"
                fill="currentColor"
              />
              <rect
                x="531"
                y="328"
                width="50"
                height="50"
                fill="currentColor"
              />
              <rect x="99" y="303" width="49" height="58" fill="currentColor" />
              <rect x="99" y="352" width="49" height="50" fill="currentColor" />
              <rect x="99" y="392" width="49" height="59" fill="currentColor" />
              <rect x="44" y="402" width="66" height="49" fill="currentColor" />
              <rect
                x="234"
                y="402"
                width="62"
                height="49"
                fill="currentColor"
              />
              <rect
                x="334"
                y="303"
                width="50"
                height="49"
                fill="currentColor"
              />
              <rect x="581" width="49" height="49" fill="currentColor" />
              <rect x="581" width="49" height="64" fill="currentColor" />
              <rect
                x="482"
                y="123"
                width="49"
                height="49"
                fill="currentColor"
              />
              <rect
                x="507"
                y="124"
                width="49"
                height="24"
                fill="currentColor"
              />
              <rect x="531" y="49" width="99" height="99" fill="currentColor" />
            </svg>
          </div> */}
        </div>
      </div>
    </div>
  );
}
