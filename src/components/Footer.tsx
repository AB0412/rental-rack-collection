
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-rental-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Rental Rack</h3>
            <p className="mb-4 text-gray-300">
              Quality rental equipment for events of all sizes. From chairs and tables to tents and stages, 
              we have everything you need to make your event a success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-rental-light transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-rental-light transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-rental-light transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#inventory" className="text-gray-300 hover:text-white transition-colors">Inventory</a>
              </li>
              <li>
                <a href="#tents" className="text-gray-300 hover:text-white transition-colors">Tents & Stages</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li>+1 (954) 464-3378</li>
              <li>+1 603 866 027</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} Rental Rack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
