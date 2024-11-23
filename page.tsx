import { Herosection, SectionThree, SectionTwo } from "@/components";

export default function Home() {
  return (
    <main className="px-8 max-w-[1440px] mx-auto h-[500vh]">
      <Herosection />
      <SectionTwo />
      <SectionThree />
    </main>
  );
}
