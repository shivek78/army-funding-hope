
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-navy text-white shadow-md py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-navy font-bold text-xl">AF</span>
          </div>
          <span className="font-bold text-xl">ArmyFund</span>
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <Link to="/campaigns" className="hover:text-gold transition-colors">
            Campaigns
          </Link>
          <Link to="/about" className="hover:text-gold transition-colors">
            About Us
          </Link>
          <Link to="/donate">
            <Button className="bg-deepred hover:bg-red-700 text-white">
              Donate Now
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-navy border-t border-blue-800 pt-2 pb-4 px-6 animate-fade-in">
          <div className="flex flex-col space-y-3">
            <Link
              to="/"
              className="p-2 rounded hover:bg-blue-800 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/campaigns"
              className="p-2 rounded hover:bg-blue-800 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Campaigns
            </Link>
            <Link
              to="/about"
              className="p-2 rounded hover:bg-blue-800 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/donate"
              className="bg-deepred hover:bg-red-700 text-white p-2 rounded text-center"
              onClick={() => setIsOpen(false)}
            >
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
