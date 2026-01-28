import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import FeaturedWork from "@/components/featured-work";
import WhyChooseUs from "@/components/why-choose-us";
import Tools from "@/components/tools";
import Testimonials from "@/components/testimonials";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <Services />
        <FeaturedWork />
        <WhyChooseUs />
        <Tools />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
