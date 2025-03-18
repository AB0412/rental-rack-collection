
import { Armchair, CircleOff, Table, TableProperties, Tent } from "lucide-react";
import { RentalItem } from "@/types/rental";

export const rentalItems: RentalItem[] = [
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
    description: "10×30 rectangular tent, provides shelter for medium-sized gatherings.",
    image: "/lovable-uploads/7f8538bf-e3e6-4936-b7f6-2c2e85f6ca1c.png",
    additionalImages: [
      "/lovable-uploads/77dabfc7-3ff3-4f93-a4e8-7d0c5876b0d1.png"
    ]
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
    description: "20×40 rectangular tent, our largest tent option for big events.",
    image: "/lovable-uploads/236a3b81-fffa-4db6-abe5-9ee6cd5921e6.png"
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

export const getFurnitureItems = () => rentalItems.filter(item => item.category === 'furniture');
export const getTentAndStageItems = () => rentalItems.filter(item => item.category === 'tent' || item.category === 'stage');
