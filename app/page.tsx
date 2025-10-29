import Navbar from "@/components/section/Navbar";
import About from "@/components/section/About";
import Services from "@/components/section/Services";
import Hero from "@/components/section/Hero";
import Contact from "@/components/section/Contact";
import Footer from "@/components/section/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
