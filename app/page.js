import Header from "@/components/custom/Header";
import Hero from "@/components/custom/Hero";
import FeaturesSec from "@/components/custom/FeaturesSec";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturesSec />
    </div>
  );
}
