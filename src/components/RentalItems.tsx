
import { getFurnitureItems, getTentAndStageItems } from "@/data/rentalData";
import FurnitureSection from "./rental/FurnitureSection";
import TentsStagesSection from "./rental/TentsStagesSection";

const RentalItems = () => {
  const furnitureItems = getFurnitureItems();
  const tentAndStageItems = getTentAndStageItems();

  return (
    <>
      <FurnitureSection items={furnitureItems} />
      <TentsStagesSection items={tentAndStageItems} />
    </>
  );
};

export default RentalItems;
