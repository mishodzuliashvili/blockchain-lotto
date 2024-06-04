import Link from "next/link";
import { Button } from "../ui/button";

type CTAProps = {};
const DEMO_VIDEO_URL = "blal";
export default function CTA({}: CTAProps) {
  return (
    <div className="container">
      <div className="px-4 gap-2 py-3 flex sm:flex-row flex-col items-center justify-between mt-20 rounded-lg bg-gradient-to-r from-primary to-orange-500">
        <Button
          // target="_blank"
          href={DEMO_VIDEO_URL}
          className="py-2 w-full sm:w-auto px-3 inline-flex justify-center items-center gap-2 rounded-lg font-medium text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all text-sm"
          // variant="light"
        >
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
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
          Watch demo
        </Button>
        <div className="flex sm:flex-row items-center flex-col gap-4 w-full sm:w-auto">
          <p className="inline-block min-w-fit text-sm font-semibold text-white">
            Ready to get started?
          </p>
          <Button>Start Now</Button>
        </div>
      </div>
    </div>
  );
}
