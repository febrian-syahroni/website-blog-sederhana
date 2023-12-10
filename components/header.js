import Link from "next/link";
import { ImFacebook2, ImYoutube } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="w-full z-5 bg-gray-50">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between py-3 text-center">
        <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
          <input className="input-text" type="text" placeholder="search..." />
        </div>
        <div className="shrink w-80 sm:order-2">
          <Link className="font-bold uppercase text-3xl" href={"/"}>
            Design
          </Link>
        </div>
        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-6">
            <Link href={"/"}>
              <ImFacebook2 color="#888" />
            </Link>
            <Link href={"/"}>
              <FaXTwitter color="#888" />
            </Link>
            <Link href={"/"}>
              <ImYoutube color="#888" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
