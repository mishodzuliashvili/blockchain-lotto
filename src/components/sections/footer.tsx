import COMPANY from "@/constants/company";
import FOOTER from "@/constants/footer";
import { Button } from "../ui/button";

type FooterProps = {};

export default function Footer({}: FooterProps) {
  return (
    <footer className="container py-4 md:py-8 mt-5 md:mt-10">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a
          href="https://flowbite.com/"
          className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            {COMPANY.title}
          </span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0">
          {FOOTER.nav.items.map((item) => (
            <li key={item.name}>
              <Button href={item.path} className="me-4 md:me-6 text-sm">
                {item.name}
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <hr className="my-6 sm:mx-auto lg:my-8" />
      <span className="block text-sm sm:text-center">
        © {new Date().getFullYear()}{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          {COMPANY.title}™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}
