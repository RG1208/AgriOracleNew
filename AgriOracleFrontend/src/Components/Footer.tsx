import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2F4F3F] text-white pt-12 pb-6 font-sans">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">AGRI ORACLE</h3>
            <p className="text-gray-300">
              Empowering farmers with AI-driven solutions for better crop management and market decisions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/our-services" className="hover:text-white">Our Services</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center"><Phone size={16} className="mr-2" /> +91 XXXXXXXXXX</li>
              <li className="flex items-center"><Mail size={16} className="mr-2" /> agrioracle@gmail.com</li>
              <li className="flex items-center"><MapPin size={16} className="mr-2" /> VIPS-TC, Pitampura</li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300"><Facebook size={24} /></a>
              <a href="#" className="text-white hover:text-gray-300"><Twitter size={24} /></a>
              <a href="#" className="text-white hover:text-gray-300"><Instagram size={24} /></a>
              <a href="#" className="text-white hover:text-gray-300"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-4 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} AGRI ORACLE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
