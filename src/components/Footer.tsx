
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Freelance Services</h3>
            <p className="text-gray-300 mb-4">
              Find the perfect freelance services for your business or project. Connect with skilled professionals from around the world.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" className="text-gray-300 hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-300 hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com" className="text-gray-300 hover:text-accent transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services?category=design" className="text-gray-300 hover:text-accent transition-colors flex items-center gap-2">
                  <ExternalLink size={16} />
                  <span>Design & Creative</span>
                </Link>
              </li>
              <li>
                <Link to="/services?category=development" className="text-gray-300 hover:text-accent transition-colors flex items-center gap-2">
                  <ExternalLink size={16} />
                  <span>Web Development</span>
                </Link>
              </li>
              <li>
                <Link to="/services?category=writing" className="text-gray-300 hover:text-accent transition-colors flex items-center gap-2">
                  <ExternalLink size={16} />
                  <span>Writing & Translation</span>
                </Link>
              </li>
              <li>
                <Link to="/services?category=marketing" className="text-gray-300 hover:text-accent transition-colors flex items-center gap-2">
                  <ExternalLink size={16} />
                  <span>Digital Marketing</span>
                </Link>
              </li>
              <li>
                <Link to="/services?category=video" className="text-gray-300 hover:text-accent transition-colors flex items-center gap-2">
                  <ExternalLink size={16} />
                  <span>Video & Animation</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-accent transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-accent mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">123 Freelance Street, Creative District, 10001, USA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-accent flex-shrink-0" size={18} />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-accent flex-shrink-0" size={18} />
                <span className="text-gray-300">support@freelancers.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Freelance Services. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-gray-400 hover:text-accent text-sm transition-colors">
                Terms
              </Link>
              <Link to="/privacy" className="text-gray-400 hover:text-accent text-sm transition-colors">
                Privacy
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-accent text-sm transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
