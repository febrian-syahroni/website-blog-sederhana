import Link from "next/link";
import Image from "next/image";
import Author from "./author";

export default function Related() {
  return (
    <section className="pt-20">
      <h1 className="font-bold text-4xl py-10">Related</h1>
      <div className="flex flex-col gap-10">
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
      </div>
    </section>
  );
}

function Post() {
  return (
    <div className="flex gap-5">
      <div className="images flex flex-col justify-start">
        <Link href={"/"}>
          <Image
            className="rounded"
            src={"https://placehold.co/300x200.png"}
            width={300}
            height={200}
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={"/"} className="text-orange-600 hover:text-orange-800">
            Businness, Travel,
          </Link>
          <Link href={"/"} className="text-gray-800 hover:text-gray-600">
            - July,3 2021
          </Link>
        </div>
        <div className="title">
          <Link
            className="text-xl font-bold text-gray-800 hover:text-gray-600"
            href={"/"}>
            Your most unhappy customers are your greatest source of learning
          </Link>
        </div>
        <Author />
      </div>
    </div>
  );
}
