import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <span className="bg-emerald-500 text-white p-1.5 rounded-lg">G</span>
              <span>Groceries</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Fresh, high-quality groceries delivered right to your doorstep. We take pride in sourcing the best products for your family.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all"><FiFacebook /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all"><FiTwitter /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all"><FiInstagram /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Shop', 'About Us', 'Contact', 'FAQ'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-gray-500 hover:text-emerald-500 transition-colors text-sm">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-6">Categories</h3>
            <ul className="space-y-3">
              {['Fresh Fruits', 'Vegetables', 'Dairy & Eggs', 'Bakery', 'Meat & Seafood'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-gray-500 hover:text-emerald-500 transition-colors text-sm">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-500 text-sm">
                <FiMapPin className="mt-1 text-emerald-500 flex-shrink-0" />
                <span>123 Grocery Street, Fresh Market City, 10010</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <FiPhone className="text-emerald-500 flex-shrink-0" />
                <span>+1 (234) 567-8900</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <FiMail className="text-emerald-500 flex-shrink-0" />
                <span>support@groceries-app.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">© 2026 Groceries App. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-gray-600 text-xs">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-gray-600 text-xs">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
