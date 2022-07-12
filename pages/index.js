import Image from "next/image";
import CTA_section from "../components/landing-page/CTA-section";
import FAQ from "../components/landing-page/FAQ";
import Hero from "../components/landing-page/Hero";
import Illustrations from "../components/landing-page/Illustrations";
import Security from "../components/landing-page/Security";

export default function Home() {
  return (
    <>
      <Hero />
      <Illustrations />
      <CTA_section />
      <Security />
      <FAQ />
    </>
  );
}
