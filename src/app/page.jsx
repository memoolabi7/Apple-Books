import { FAQ } from "@/components/FAQ";
import { Filter } from "@/components/Filter";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";

export default function Page() {
  return (
    <>
      <Hero />
      <Gallery />
      <Filter />
      <FAQ />
    </>
  );
}