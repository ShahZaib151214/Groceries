import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import Button from '../components/UI/Button';

const About = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-2 block">Our Story</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">We're on a Mission to Change the Way You Eat.</h1>
        <p className="text-lg text-gray-500 leading-relaxed">
          Founded in 2020, Groceries App started with a simple vision: to make fresh, high-quality food accessible to everyone. We believe that what you eat matters, and that's why we partner directly with local farmers to bring you the best produce available.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20 bg-emerald-50 rounded-3xl p-8 md:p-12">
        <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl skew-y-3 transform rotate-2 hover:rotate-0 transition-all duration-500">
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Farmers Market" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Farm to Table, Literally.</h2>
          <p className="text-gray-600">
            We cut out the middlemen. No warehouses holding food for weeks. We pick it up from the farm and bring it straight to your door.
          </p>
          <ul className="space-y-3">
             {['100% Organic Certified', 'Zero Waste Initiatives', 'Supporting Local Communities', 'Carbon Neutral Delivery'].map((item, idx) => (
               <li key={idx} className="flex items-center gap-3 font-medium text-gray-800">
                 <FiCheckCircle className="text-emerald-500 text-xl" /> {item}
               </li>
             ))}
          </ul>
          <Button variant="primary" className="mt-4">Join Our Journey</Button>
        </div>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-gray-100 pt-16">
        {[
          { label: 'Happy Customers', value: '50k+' },
          { label: 'Farmers Supported', value: '120+' },
          { label: 'Orders Delivered', value: '1M+' },
          { label: 'Cities Covered', value: '25+' },
        ].map((stat, idx) => (
          <div key={idx}>
            <div className="text-4xl font-extrabold text-emerald-600 mb-2">{stat.value}</div>
            <div className="text-gray-500 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
