import { Navbar } from "../components/sections/Navbar";
import { Hero } from "../components/sections/Hero";
import { SignatureCollection } from "../components/sections/SignatureCollection";
import { CraftSection } from "../components/sections/CraftSection";
import { InteriorsSection } from "../components/sections/InteriorsSection";
import { FeaturedStatement } from "../components/sections/FeaturedStatement";
import { FinalCTA } from "../components/sections/FinalCTA";
import { Footer } from "../components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SignatureCollection />
        <CraftSection />
        <InteriorsSection />
        <FeaturedStatement />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
