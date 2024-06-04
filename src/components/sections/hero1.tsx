import COMPANY from "@/constants/company";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { Button } from "../ui/button";

type Hero1Props = {};

export default function Hero1({}: Hero1Props) {
  return (
    <>
      <div className="">
        <div className="container pt-12">
          <h1 className="font-extrabold text-5xl md:text-6xl">
            <span className="text-primary ">{COMPANY.title}:</span>{" "}
            {`The World's
            Most Transparent Lotto`}
          </h1>
          <div className="max-w-4xl">
            <p className="mt-5 text-lg font-medium">
              Play and win big with the most secure and transparent blockchain
              lottery. Join millions of winners today!
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="mt-7 grid gap-3 w-full sm:inline-flex">
          <Button size="lg">
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
          <Button size="lg" variant="ghost">
            Contact sales team
          </Button>
        </div>
      </div>
      <div className="container mt-10">
        <div className="mb-4">
          <h2 className="font-medium">
            {` Team behind the world's most transparent lottery`}
          </h2>
        </div>
        <div className="flex flex-row items-center mt-6 lg:mt-10 w-full">
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
    </>
  );
}
