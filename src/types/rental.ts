
import { ReactElement } from "react";

export type RentalItem = {
  id: number;
  name: string;
  price: number;
  icon: ReactElement;
  category: 'furniture' | 'tent' | 'stage';
  description: string;
  image?: string;
  additionalImages?: string[];
};
