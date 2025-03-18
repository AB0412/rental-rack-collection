
import { RentalItem } from "@/types/rental";
import RentalItemCard from "./RentalItemCard";

interface FurnitureSectionProps {
  items: RentalItem[];
}

const FurnitureSection = ({ items }: FurnitureSectionProps) => {
  return (
    <section id="inventory" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-rental-dark mb-4">Our Rental Inventory</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Browse our quality rental items for your next event. All items are well-maintained and available at competitive prices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <RentalItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FurnitureSection;
