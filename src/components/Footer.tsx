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
  // Consolidated footer links for a more compact design
  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Home Services", href: "/services?category=home-services" },
        {
          name: "Security Services",
          href: "/services?category=security-services",
        },
        {
          name: "Boda Boda Services",
          href: "/services?category=boda-boda-services",
        },
        { name: "Solar Power", href: "/services?category=solar-power" },
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
    <footer className="bg-gradient-to-r from-background to-background/95 border-t border-border/20">
      {/* Subtle top decoration - smaller than before */}
      <div className="w-full overflow-hidden">
        <svg
          className="w-full h-8 -mb-px" /* Reduced height from 12 to 8 */
          viewBox="0 0 1440 50" /* Adjusted viewBox for smaller height */
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,25 C240,8 480,42 720,25 C960,8 1200,42 1440,25 L1440,50 L0,50 Z"
            fill="currentColor"
            className="text-background"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-6">
        {" "}
        {/* Reduced padding from py-12 to py-6 */}
        {/* Compact footer content */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {" "}
          {/* Reduced gap from 12 to 8 */}
          {/* Brand section - more compact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/3 space-y-3" /* Reduced space-y from 6 to 3 */
          >
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center">
                {" "}
                {/* Reduced size */}
                <ArrowUpRight size={14} className="text-white" />{" "}
                {/* Reduced icon size */}
              </div>
              <h2 className="text-lg font-bold text-white">u-serve</h2>{" "}
              {/* Reduced text size */}
            </div>
            {/* Combined the two paragraphs into one more concise description */}
            <p className="text-muted-foreground text-sm">
              Connecting local service providers with clients in Uganda and
              South Africa. Find reliable professionals with secure payments,
              ratings and reviews.
            </p>

            <div className="flex space-x-2">
              {" "}
              {/* Reduced spacing */}
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -2 }} /* Reduced animation distance */
                  href={social.href}
                  className="w-8 h-8 rounded-full bg-card/80 flex items-center justify-center hover:bg-accent transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          {/* Links section - more compact grid */}
          <div className="grid grid-cols-3 gap-6 md:gap-8">
            {" "}
            {/* Changed to 3 columns on all screens, reduced gap */}
            {footerLinks.map((column, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }} /* Reduced animation distance */
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <h3 className="text-white text-sm font-medium mb-2">
                  {column.title}
                </h3>{" "}
                {/* Reduced text and margin */}
                <ul className="space-y-1">
                  {" "}
                  {/* Reduced spacing between links */}
                  {column.links.map((link, linkIdx) => (
                    <motion.li
                      key={linkIdx}
                      whileHover={{ x: 3 }} /* Reduced animation distance */
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-accent text-xs flex items-center group transition-colors duration-300"
                      >
                        <ChevronRight
                          size={12} /* Reduced icon size */
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

      {/* Streamlined bottom copyright section */}
      <div className="bg-background/60 backdrop-blur-sm border-t border-border/10">
        <div className="container mx-auto px-4 py-3">
          {" "}
          {/* Reduced padding */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-row justify-between items-center text-xs" /* Changed to always be flex-row */
          >
            <p className="text-gray-500">
              © {new Date().getFullYear()} u-serve
            </p>

            <div className="flex items-center space-x-3">
              {" "}
              {/* Reduced spacing */}
              <Link
                to="/terms"
                className="text-gray-500 hover:text-accent transition-colors"
              >
                Terms
              </Link>
              <div className="w-1 h-1 rounded-full bg-gray-700"></div>
              <Link
                to="/privacy"
                className="text-gray-500 hover:text-accent transition-colors"
              >
                Privacy
              </Link>
              <div className="w-1 h-1 rounded-full bg-gray-700"></div>
              <Link
                to="/cookies"
                className="text-gray-500 hover:text-accent transition-colors"
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
