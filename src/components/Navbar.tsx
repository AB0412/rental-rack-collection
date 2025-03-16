
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-rental-DEFAULT text-2xl font-bold">
              Rental Rack
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-rental-DEFAULT transition-colors">
              Home
            </a>
            <a href="#inventory" className="text-gray-700 hover:text-rental-DEFAULT transition-colors">
              Inventory
            </a>
            <a href="#tents" className="text-gray-700 hover:text-rental-DEFAULT transition-colors">
              Tents & Stages
            </a>
            <a href="#contact" className="text-gray-700 hover:text-rental-DEFAULT transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-rental-DEFAULT"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 mt-4 pb-4">
              <a 
                href="#home" 
                className="text-gray-700 hover:text-rental-DEFAULT transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#inventory" 
                className="text-gray-700 hover:text-rental-DEFAULT transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inventory
              </a>
              <a 
                href="#tents" 
                className="text-gray-700 hover:text-rental-DEFAULT transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Tents & Stages
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-rental-DEFAULT transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
