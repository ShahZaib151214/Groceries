import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiShoppingCart, FiMenu, FiX, FiSearch, FiUser, FiHeart } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
          scrolled || isOpen ? 'bg-white/90 backdrop-blur-md shadow-sm border-gray-100 py-3' : 'bg-white/50 backdrop-blur-sm py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-gray-900 flex items-center gap-2 group">
              <div className="bg-emerald-600 text-white p-2 rounded-xl shadow-lg shadow-emerald-600/20 group-hover:scale-110 transition-transform">
                G
              </div>
              <span className="tracking-tight text-gray-800 group-hover:text-emerald-700 transition-colors">Groceries</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 bg-gray-100/50 px-6 py-2 rounded-full border border-gray-200/50">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`relative font-medium text-sm transition-all hover:text-emerald-600 ${
                    location.pathname === link.path ? 'text-emerald-600 font-bold' : 'text-gray-500'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-600 rounded-full"></span>
                  )}
                </Link>
              ))}
            </nav>

            {/* Icons */}
            <div className="hidden md:flex items-center gap-4">
              <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:bg-emerald-50 hover:text-emerald-600 transition-all">
                <FiSearch size={20} />
              </button>
              <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:bg-red-50 hover:text-red-500 transition-all">
                <FiHeart size={20} />
              </button>
              <Link 
                to="/cart" 
                className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:bg-emerald-50 hover:text-emerald-600 transition-all relative group"
              >
                <FiShoppingCart size={20} />
                <span className="absolute top-1 right-1 bg-emerald-600 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center border-2 border-white transform group-hover:scale-110 transition-transform">
                  2
                </span>
              </Link>
              <Link 
                to="/login"
                className="ml-2 bg-gray-900 text-white px-5 py-2 rounded-full text-sm font-medium shadow-lg shadow-gray-900/20 hover:bg-gray-800 hover:shadow-xl transition-all hover:-translate-y-0.5"
              >
                Login
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700 p-2 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white/95 backdrop-blur-lg z-40 transition-all duration-300 md:hidden flex items-center justify-center ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-8 text-center">
           {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-2xl font-bold transition-colors ${
                location.pathname === link.path ? 'text-emerald-600' : 'text-gray-400 hover:text-gray-900'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex gap-6 mt-8">
            <Link to="/cart" className="relative p-3 bg-gray-100 rounded-full text-gray-800">
               <FiShoppingCart size={24} />
               <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">2</span>
            </Link>
            <button className="p-3 bg-gray-100 rounded-full text-gray-800"><FiSearch size={24} /></button>
            <button className="p-3 bg-gray-100 rounded-full text-gray-800"><FiUser size={24} /></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
