"use client";

import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";
import { Swiper, SwiperSlide } from "swiper/react";
import Loading from "./_child/loading";
import Error from "./_child/error";

export default function Section3({ api, title }) {
  if (!api) return <Loading />;
  if (api != api) return <Error />;
  return (
    <section className="container mx-auto md:px-20 py-16">
      <h1 className="font-bold text-4xl py-12 text-center">{title}</h1>

      {/* Swiper */}
      <Swiper slidesPerView={2}>
        {api?.map((value, index) => (
          <SwiperSlide key={index}>
            <Post api={value} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

function Post({ api }) {
  const { id, title, body } = api;
  return (
    <div className="grid px-5">
      <div className="images">
        <Link href={"/"}>
          <Image
            alt="placeholder"
            src={"https://placehold.co/600x400.png"}
            width={600}
            height={400}
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
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
            className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600"
            href={"/"}>
            {title}
          </Link>
        </div>
        <p className="text-gray-500 py-3">{body}</p>
        <Author />
      </div>
    </div>
  );
}
