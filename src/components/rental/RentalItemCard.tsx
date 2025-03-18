
import { RentalItem } from "@/types/rental";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import RentalItemGallery from "./RentalItemGallery";

interface RentalItemCardProps {
  item: RentalItem;
  showImages?: boolean;
}

const RentalItemCard = ({ item, showImages = false }: RentalItemCardProps) => {
  return (
    <Card key={item.id} className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        {showImages && item.image ? (
          <RentalItemGallery 
            image={item.image} 
            name={item.name} 
            additionalImages={item.additionalImages} 
          />
        ) : (
          <div className="flex justify-center">{item.icon}</div>
        )}
        <CardTitle className="text-center mt-2">{item.name}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <CardDescription className="mb-4">{item.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-center border-t pt-4">
        <p className="text-2xl font-bold text-rental-DEFAULT">${item.price}</p>
        {item.category === 'furniture' && <span className="text-gray-600 ml-1 self-end">each</span>}
      </CardFooter>
    </Card>
  );
};

export default RentalItemCard;
