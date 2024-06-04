type TestimonialsProps = {};

export default function Testimonials({}: TestimonialsProps) {
  return (
    <div className="mt-28 container">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-2">
          <h2 className="mb-2 text-3xl font-extrabold leading-tight text-dark-grey-900 lg:text-4xl">
            Testimonials
          </h2>
          <p className="text-base font-medium leading-7 text-dark-grey-600">
            Hear from our satisfied customers.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-16">
        <div className="w-full flex flex-col border-b-4 border-primary pb-3">
          <h3 className="mb-2 text-base font-bold leading-tight">
            Luka Gorgadze
          </h3>
          <p className="text-base font-medium leading-7 text-dark-grey-600">
            {`"The most exciting and transparent lottery I've ever played! Winning has never felt so fair and secure."`}
          </p>
        </div>
        <div className="w-full flex flex-col border-b-4 border-primary pb-3">
          <h3 className="mb-2 text-base font-bold leading-tight">
            Zurab Kentchuashvili
          </h3>
          <p className="text-base font-medium leading-7 text-dark-grey-600">
            {`"Playing on this platform is a fantastic experience. The transparency and instant payouts make it my favorite lottery."`}
          </p>
        </div>
        <div className="w-full flex flex-col border-b-4 border-primary pb-3">
          <h3 className="mb-2 text-base font-bold leading-tight">
            Giga Samkharadze
          </h3>
          <p className="text-base font-medium leading-7 text-dark-grey-600">
            {`"I've tried many lotteries, but this one stands out for its security and fairness. Highly recommend!"`}
          </p>
        </div>
      </div>
    </div>
  );
}
