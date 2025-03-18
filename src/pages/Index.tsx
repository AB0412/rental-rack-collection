
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RentalItems from "@/components/RentalItems";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <RentalItems />
      <Footer />
    </div>
  );
};

export default Index;
