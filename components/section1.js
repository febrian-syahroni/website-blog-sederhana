"use client";

import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Loading from "./_child/loading";
import Error from "./_child/error";

export default function Section1({ api, title }) {
  if (!api) return <Loading />;
  if (api != api) return <Error />;

  const bg = {
    background: "url('') no-repeat",
    backgroundPosition: "right",
  };
  return (
    <section className="py-16" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">{title}</h1>
        <Swiper
          slidesPerView={1}
          autoplay={{
            delay: 2000,
          }}>
          {api?.map((value, index) => (
            <SwiperSlide key={index}>
              <Slide api={value} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function Slide({ api }) {
  const { id, title, body } = api;
  return (
    <div>
      <div href={"/"} className="grid md:grid-cols-2">
        <div className="flex justify-center items-center p-8">
          <Link href={"/posts"}>
            <Image
              alt="placeholder"
              src={"https://placehold.co/800x800.png"}
              width={800}
              height={800}
            />
          </Link>
        </div>
        <div className="info flex justify-center flex-col">
          <div className="cat">
            <Link href={"/"} className="text-orange-600 hover:text-orange-800">
              Businness, Travel,
            </Link>
            <Link href={"/posts"} className="text-gray-800 hover:text-gray-600">
              - July,3 2021
            </Link>
          </div>
          <div className="title">
            <Link
              href={"/"}
              className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">
              {title}
            </Link>
          </div>
          <Link href={"/"}>
            <p className="text-gray-500 py-3">{body}</p>
          </Link>

          <Author />
        </div>
      </div>
    </div>
  );
}
