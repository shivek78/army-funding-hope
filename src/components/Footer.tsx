
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-12 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ArmyFund</h3>
            <p className="mb-4 text-gray-300">
              Supporting our troops through community-driven funding initiatives.
              Together we can make a difference for those who serve.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gold">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gold">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/campaigns" className="text-gray-300 hover:text-gold">
                  Campaigns
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gold">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-300 hover:text-gold">
                  Donate
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <span>contact@armyfund.org</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span>(123) 456-7890</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} ArmyFund. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
