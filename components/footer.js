import Link from "next/link";
import { ImFacebook2, ImYoutube } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import Newslatter from "./_child/newslatter";

export default function Footer() {
  const bg = {
    backgroundImage: "url('')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom left",
  };

  return (
    <footer className="bg-gray-50" style={bg}>
      <Newslatter />
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
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
          <p className="py-5 text-gray-400">
            Copyright 2023 All right reserved | This template is made by Febrian
            Syahroni
          </p>
          <p className="text-gray-400 text-center">Terms & Condition</p>
        </div>
      </div>
    </footer>
  );
}
