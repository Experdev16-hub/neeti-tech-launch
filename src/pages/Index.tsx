import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductTeasers from "@/components/ProductTeasers";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProductTeasers />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
