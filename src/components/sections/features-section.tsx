import COMPANY from "@/constants/company";
import { FaScaleBalanced } from "react-icons/fa6";
import { GoShieldCheck } from "react-icons/go";
import {
  HiCubeTransparent,
  HiOutlineCubeTransparent,
  HiOutlineScale,
  HiOutlineShieldCheck,
} from "react-icons/hi";
import { LuShield } from "react-icons/lu";

type FeaturesSectionProps = {};

export default function FeaturesSection({}: FeaturesSectionProps) {
  return (
    <section className="py-24 pt-12">
      <div className="container">
        <div className="flex flex-col gap-16 mb-16">
          <div className="flex flex-col gap-2">
            <h2 className="mb-2 text-3xl font-extrabold leading-tight text-dark-grey-900 lg:text-4xl">
              Why <span className="text-primary">{COMPANY.title}</span> Stands
              Out?{" "}
            </h2>
            <p className="text-base font-medium leading-7 text-dark-grey-600">
              Our platform combines cutting-edge technology with user-centric
              features to deliver an unparalleled lottery experience.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
          <div className="group relative w-full rounded-2xl transition-all duration-500">
            <div className="bg-primary text-white rounded-md border-2 border-primary p-2 inline-block items-start mb-5 ">
              <HiCubeTransparent size={30} />
            </div>
            <h4 className="text-base font-bold mb-3 capitalize transition-all duration-500">
              Complete Transparency
            </h4>
            <p className="text-base font-medium transition-all duration-500 leading-5">
              All transactions and draws are on the blockchain. Verify every
              draw.
            </p>
          </div>
          <div className="group relative w-full rounded-2xl transition-all duration-500">
            <div className="bg-primary text-white rounded-md border-2 border-primary p-2 inline-block items-start mb-5 ">
              <HiOutlineShieldCheck size={30} />
            </div>
            <h4 className="text-base font-bold mb-3 capitalize transition-all duration-500">
              Top-Notch Security{" "}
            </h4>
            <p className="text-base font-medium transition-all duration-500 leading-5">
              Your funds and data are protected with industry-leading
              encryption.
            </p>
          </div>
          <div className="group relative w-full rounded-2xl transition-all duration-500">
            <div className="bg-primary text-white rounded-md border-2 border-primary p-2 inline-block items-start mb-5 ">
              {/* <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                  className="stroke-white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg> */}
              <HiOutlineScale size={30} />
            </div>
            <h4 className="text-base font-bold mb-3 capitalize transition-all duration-500">
              Guaranteed Fairness
            </h4>
            <p className="text-base font-medium transition-all duration-500 leading-5">
              Blockchain technology ensures every ticket has an equal chance of
              winning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
