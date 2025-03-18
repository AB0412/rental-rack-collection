
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToInventory = () => {
    const inventorySection = document.getElementById('inventory');
    if (inventorySection) {
      inventorySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className="relative h-[90vh] bg-gradient-to-r from-rental-DEFAULT to-rental-dark flex items-center"
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Quality Rentals for Your Special Events
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            From chairs and tables to tents and stages, we have everything you need to make your event a success.
          </p>
          <div>
            <Button 
              onClick={scrollToInventory} 
              className="bg-rental-accent hover:bg-amber-600 text-white"
              size="lg"
            >
              View Inventory
            </Button>
          </div>
        </div>
      </div>
      <button 
        onClick={scrollToInventory}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
