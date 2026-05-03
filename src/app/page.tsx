import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { WhyCemeresi } from "@/components/sections/WhyCemeresi";
import { CtaDual } from "@/components/sections/CtaDual";
import { Testimonial } from "@/components/sections/Testimonial";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyCemeresi />
        <CtaDual />
        <Testimonial />
      </main>
      <Footer />
    </>
  );
}