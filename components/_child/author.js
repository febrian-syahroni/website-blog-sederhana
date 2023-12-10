import Image from "next/image";
import Link from "next/link";

export default function Author() {
  return (
    <div className="author flex py-5">
      <Image
        alt=""
        className="rounded-full"
        src={"https://placehold.co/60x60.png"}
        width={60}
        height={60}></Image>
      <div className="flex flex-col justify-center px-4">
        <Link
          className="text-md font-bold text-gray-800 hover:text-gray-600"
          href={"/"}>
          flying light
        </Link>
        <span className="text-sm text-gray-500">CEO and Founder</span>
      </div>
    </div>
  );
}
