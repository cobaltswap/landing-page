import Head from "next/head";
import Footer from "../components/footer";
import CTA_section from "../components/landing-page/cta-section";
import FAQ from "../components/landing-page/faq";
import Hero from "../components/landing-page/hero";
import Illustrations from "../components/landing-page/illustrations";
import Security from "../components/landing-page/security";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Buy, Sell and Swap FX - CobaltSwap</title>
      </Head>
      <div className="position-relative">
        <Navbar />
        <Hero />
        <Illustrations />
        <CTA_section />
        <Security />
        <FAQ />
      </div>
      <Footer />
    </>
  );
}
