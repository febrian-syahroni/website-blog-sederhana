import Image from "next/image";
import Author from "@/components/_child/author";
import Format from "@/layout/format";
import Related from "@/components/_child/related";

export default function Page() {
  return (
    <Format>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          <Author />
        </div>
        <div className="post py-10">
          <h1 className="font-bold text-4xl text-center pb-5">
            Your most unhappy customers are your greatest source of learning
          </h1>
          <p className="text-gray-500 text-xl text-center">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <div className="py-10">
            <Image
              src={"https://placehold.co/900x600.png"}
              width={900}
              height={600}
            />
          </div>
          <div className="content text-gray-600 text-lg flex flex-col gap-4">
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
        <Related />
      </section>
    </Format>
  );
}
