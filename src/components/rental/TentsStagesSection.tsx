
import { RentalItem } from "@/types/rental";
import RentalItemCard from "./RentalItemCard";

interface TentsStagesSectionProps {
  items: RentalItem[];
}

const TentsStagesSection = ({ items }: TentsStagesSectionProps) => {
  return (
    <section id="tents" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-rental-dark mb-4">Tents & Stages</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Create the perfect event space with our premium tents and stage options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {items.map((item) => (
            <RentalItemCard key={item.id} item={item} showImages={true} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TentsStagesSection;
