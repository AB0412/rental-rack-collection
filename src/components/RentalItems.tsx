
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Armchair, CircleOff, Table, TableProperties, Tent } from "lucide-react";

type RentalItem = {
  id: number;
  name: string;
  price: number;
  icon: JSX.Element;
  category: 'furniture' | 'tent' | 'stage';
  description: string;
  image?: string;
  additionalImages?: string[];
};

const rentalItems: RentalItem[] = [
  {
    id: 1,
    name: "Chair",
    price: 1,
    icon: <Armchair className="h-10 w-10 text-rental-DEFAULT" />,
    category: 'furniture',
    description: "Standard folding chair, perfect for any event."
  },
  {
    id: 2,
    name: "Rectangular Table",
    price: 7,
    icon: <Table className="h-10 w-10 text-rental-DEFAULT" />,
    category: 'furniture',
    description: "Sturdy rectangular table, seats 6-8 people."
  },
  {
    id: 3,
    name: "4ft Round Table",
    price: 10,
    icon: <TableProperties className="h-10 w-10 text-rental-DEFAULT" />,
    category: 'furniture',
    description: "4 feet round table, seats 4-6 people."
  },
  {
    id: 4,
    name: "5ft Round Table",
    price: 15,
    icon: <TableProperties className="h-10 w-10 text-rental-DEFAULT" />,
    category: 'furniture',
    description: "5 feet round table, seats 6-8 people."
  },
  {
    id: 5,
    name: "Cocktail Table with Cover",
    price: 12,
    icon: <TableProperties className="h-10 w-10 text-rental-DEFAULT" />,
    category: 'furniture',
    description: "Cocktail table with elegant cover, perfect for receptions."
  },
  {
    id: 6,
    name: "10×30 Rectangular Tent",
    price: 200,
    icon: <Tent className="h-10 w-10 text-rental-DEFAULT" />,
    category: 'tent',
    description: "10×30 rectangular tent, provides shelter for medium-sized gatherings."
  },
  {
    id: 7,
    name: "20×30 Gazebo Style Tent",
    price: 300,
    icon: <Tent className="h-10 w-10 text-rental-DEFAULT" />,
    category: 'tent',
    description: "20×30 gazebo style tent, elegant option for special events.",
    image: "/lovable-uploads/f935d5e3-5a78-4b5e-9321-81cfdf7492db.png",
    additionalImages: [
      "/lovable-uploads/98ff5a62-d9c4-44ee-b572-d42184196aff.png",
      "/lovable-uploads/3827f801-7ca5-4425-bb39-8373294608db.png"
    ]
  },
  {
    id: 8,
    name: "20×40 Rectangular Tent",
    price: 400,
    icon: <Tent className="h-10 w-10 text-rental-DEFAULT" />,
    category: 'tent',
    description: "20×40 rectangular tent, our largest tent option for big events."
  },
  {
    id: 9,
    name: "20×20 Stage",
    price: 400,
    icon: <CircleOff className="h-10 w-10 text-rental-DEFAULT" />,
    category: 'stage',
    description: "20×20 professional stage platform, sturdy and safe for performances."
  }
];

const RentalItems = () => {
  const furnitureItems = rentalItems.filter(item => item.category === 'furniture');
  const tentAndStageItems = rentalItems.filter(item => item.category === 'tent' || item.category === 'stage');

  return (
    <>
      <section id="inventory" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-rental-dark mb-4">Our Rental Inventory</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Browse our quality rental items for your next event. All items are well-maintained and available at competitive prices.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {furnitureItems.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-center">{item.icon}</div>
                  <CardTitle className="text-center mt-2">{item.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4">{item.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-center border-t pt-4">
                  <p className="text-2xl font-bold text-rental-DEFAULT">${item.price}</p>
                  <span className="text-gray-600 ml-1 self-end">each</span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tents" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-rental-dark mb-4">Tents & Stages</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Create the perfect event space with our premium tents and stage options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {tentAndStageItems.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  {item.image ? (
                    <div className="flex flex-col justify-center">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="h-48 object-contain mb-4"
                      />
                      {item.additionalImages && item.additionalImages.length > 0 && (
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          {item.additionalImages.map((img, index) => (
                            <img 
                              key={index}
                              src={img} 
                              alt={`${item.name} view ${index + 1}`} 
                              className="h-24 w-full object-cover rounded-md"
                            />
                          ))}
                        </div>
                      )}
                    </div>
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
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RentalItems;
