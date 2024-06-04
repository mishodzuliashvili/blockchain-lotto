import COMPANY from "@/constants/company";

type HowItWorksSectionProps = {};

export default function HowItWorksSection({}: HowItWorksSectionProps) {
  return (
    <div className="mt-10">
      <div className="container mx-auto flex flex-col items-start gap-16">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-2">
            <h2 className="mb-2 text-3xl font-extrabold leading-tight text-dark-grey-900 lg:text-4xl">
              How <span className="text-primary">{COMPANY.title}</span> works?
            </h2>
            <p className="text-base font-medium leading-7 text-dark-grey-600">
              Purchase your lottery ticket using cryptocurrency. We accept
              multiple cryptocurrencies for your convenience.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="flex items-start">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-white bg-primary border-primary border-2 border-solid border-purple-blue-500 text-purple-blue-500">
                <span className="text-base font-bold leading-7">1</span>
              </div>
              <div className="flex flex-col">
                <h3 className="mb-2 text-base font-bold leading-tight text-dark-grey-900">
                  Buy a Ticket
                </h3>
                <p className="text-base font-medium leading-7 text-dark-grey-600">
                  Purchase your lottery ticket using cryptocurrency.
                </p>
              </div>
            </div>
            <div className="hidden lg:block rotate-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="42"
                viewBox="0 0 43 42"
                fill="none"
              >
                <g clipPath="url(#clip0_3346_6663)">
                  <path
                    d="M16.9242 11.7425C16.2417 12.425 16.2417 13.5275 16.9242 14.21L23.7142 21L16.9242 27.79C16.2417 28.4725 16.2417 29.575 16.9242 30.2575C17.6067 30.94 18.7092 30.94 19.3917 30.2575L27.4242 22.225C28.1067 21.5425 28.1067 20.44 27.4242 19.7575L19.3917 11.725C18.7267 11.06 17.6067 11.06 16.9242 11.7425Z"
                    // fill="#68769F"
                    className="fill-foreground"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3346_6663">
                    <rect
                      width="42"
                      height="42"
                      fill="white"
                      transform="translate(0.666748)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-white bg-primary border-primary border-2 border-solid border-purple-blue-500 text-purple-blue-500">
                <span className="text-base font-bold leading-7">2</span>
              </div>
              <div className="flex flex-col">
                <h3 className="mb-2 text-base font-bold leading-tight text-dark-grey-900">
                  Choose Your Numbers
                </h3>
                <p className="text-base font-medium leading-7 text-dark-grey-600">
                  Select your lucky numbers or use our random number generator.
                </p>
              </div>
            </div>
            <div className="hidden lg:block rotate-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="42"
                viewBox="0 0 43 42"
                fill="none"
              >
                <g clipPath="url(#clip0_3346_6663)">
                  <path
                    d="M16.9242 11.7425C16.2417 12.425 16.2417 13.5275 16.9242 14.21L23.7142 21L16.9242 27.79C16.2417 28.4725 16.2417 29.575 16.9242 30.2575C17.6067 30.94 18.7092 30.94 19.3917 30.2575L27.4242 22.225C28.1067 21.5425 28.1067 20.44 27.4242 19.7575L19.3917 11.725C18.7267 11.06 17.6067 11.06 16.9242 11.7425Z"
                    // fill="#68769F"
                    className="fill-foreground"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3346_6663">
                    <rect
                      width="42"
                      height="42"
                      fill="white"
                      transform="translate(0.666748)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-white bg-primary border-primary border-2 border-solid border-purple-blue-500 text-purple-blue-500">
              <span className="text-base font-bold leading-7">3</span>
            </div>
            <div className="flex flex-col">
              <h3 className="mb-2 text-base font-bold leading-tight text-dark-grey-900">
                Win Big
              </h3>
              <p className="text-base font-medium leading-7 text-dark-grey-600">
                Wait for the draw and see if you are the lucky winner!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
