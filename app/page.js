import Format from "@/layout/format";
import Section1 from "@/components/section1";
import Section3 from "@/components/section3";
import Section2 from "@/components/section2";
import Section4 from "@/components/section4";
import Section from "@/components/section";
import { getAllData, getDataByLimit, reproduce } from "@/libs/api-libs";

export default async function Page() {
  const listData = await getAllData("/posts");
  return (
    <Format>
      <Section1 api={listData} title={"Trending"} />
      <Section2 api={listData} title={"Latest Post"} />
      <Section3 api={listData} title={"Most Populer"} />
      <Section4 api={listData} title={"Businness"} />
    </Format>
  );
}
