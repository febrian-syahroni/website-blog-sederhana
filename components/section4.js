"use client";

import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";

export default function Section4({ api, title }) {
  return (
    <section className="container mx-auto md:px-20 py-16">
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h1 className="font-bold text-4xl py-12">{title}</h1>
          <div className="flex flex-col gap-6">
            {api.slice(0, 5).map((value, index) => (
              <Post key={index} api={value} />
            ))}
          </div>
        </div>
        <div className="item">
          <h1 className="font-bold text-4xl py-12">Travel</h1>
          <div className="flex flex-col gap-6">
            {api.slice(0, 5).map((value, index) => (
              <Post key={index} api={value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Post({ api }) {
  const { id, title } = api;
  return (
    <div className="flex gap-5">
      <div className="images flex flex-col justify-start">
        <Link href={"/"}>
          <Image
            className="rounded"
            alt="placeholder"
            src={"https://placehold.co/300x250.png"}
            width={300}
            height={250}
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
            {title}
          </Link>
        </div>
        <Author />
      </div>
    </div>
  );
}
