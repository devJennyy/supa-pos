import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import WhyPOS from "@/components/home/WhyPOS";
import Footer from "@/components/layout/Footer";

export default function Home() {  
  return (
    <main className="bg-background transition-default">
      <Navbar />
      <Hero />
      <Features />
      <WhyPOS />
      <Footer />
    </main>
  );
}
