import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Design & Creative", href: "/services?category=design" },
        { name: "Web Development", href: "/services?category=development" },
        { name: "Writing & Translation", href: "/services?category=writing" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Terms", href: "/terms" },
        { name: "Privacy", href: "/privacy" },
        { name: "Cookies", href: "/cookies" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <Facebook size={18} />,
      href: "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: <Twitter size={18} />,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: <Instagram size={18} />,
      href: "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: <Linkedin size={18} />,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-background border-t border-border/20">
      {/* Top wave decoration */}
      <div className="w-full overflow-hidden">
        <svg
          className="w-full h-12 -mb-px"
          viewBox="0 0 1440 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,37.5 C240,12.5 480,62.5 720,37.5 C960,12.5 1200,62.5 1440,37.5 L1440,74 L0,74 Z"
            fill="currentColor"
            className="text-background"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/3 space-y-6"
          >
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <ArrowUpRight size={16} className="text-white" />
              </div>
              <h2 className="text-xl font-bold text-white">u-serve</h2>
            </div>

            <p className="text-gray-400 text-sm max-w-md">
              Connect with skilled professionals from around the world. Find the
              perfect freelance services for your business or project.
            </p>

            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -3 }}
                  href={social.href}
                  className="w-9 h-9 rounded-full bg-card flex items-center justify-center hover:bg-accent transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {footerLinks.map((column, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-medium mb-4">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIdx) => (
                    <motion.li
                      key={linkIdx}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-accent text-sm flex items-center group transition-colors duration-300"
                      >
                        <ChevronRight
                          size={14}
                          className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Separate bottom copyright section with distinct styling */}
      <div className="bg-background/80 backdrop-blur-sm border-t border-border/20 mt-12">
        <div className="container mx-auto px-4 py-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <p className="text-gray-500 text-xs mb-3 md:mb-0">
              © {new Date().getFullYear()} u-serve. All rights reserved.
            </p>

            <div className="flex items-center space-x-4">
              <Link
                to="/terms"
                className="text-gray-500 hover:text-accent text-xs transition-colors"
              >
                Terms
              </Link>
              <div className="w-1 h-1 rounded-full bg-gray-700"></div>
              <Link
                to="/privacy"
                className="text-gray-500 hover:text-accent text-xs transition-colors"
              >
                Privacy
              </Link>
              <div className="w-1 h-1 rounded-full bg-gray-700"></div>
              <Link
                to="/cookies"
                className="text-gray-500 hover:text-accent text-xs transition-colors"
              >
                Cookies
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
