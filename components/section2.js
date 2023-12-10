import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";
import Loading from "./_child/loading";
import Error from "./_child/error";

export default function Section({ api, title }) {
  if (!api) return <Loading />;
  if (api != api) return <Error />;
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">{title}</h1>

      {/* Grid Columns */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {api.slice(0, 8).map((value, index) => (
          <div key={index.id} className="item">
            <div className="images">
              <Link href={"/"}>
                <Image
                  className="rounded"
                  alt=""
                  src={"https://placehold.co/800x800.png"}
                  width={500}
                  height={350}
                />
              </Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
              <div className="cat">
                <Link
                  href={"/"}
                  className="text-orange-600 hover:text-orange-800">
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
                  {value.title}
                </Link>
              </div>
              <p className="text-gray-500 py-3">{value.body}</p>
              <Author />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
