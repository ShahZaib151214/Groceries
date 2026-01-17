import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';
import { FiLock, FiCheck } from 'react-icons/fi';

const Checkout = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="text-center mb-12">
         <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Checkout</h1>
         <div className="flex items-center justify-center gap-4 text-sm font-medium">
           <span className="text-emerald-600 flex items-center gap-1"><FiCheck /> Cart</span>
           <span className="w-12 h-px bg-emerald-200"></span>
           <span className="text-emerald-600 flex items-center gap-1"><FiCheck /> Details</span>
           <span className="w-12 h-px bg-gray-200"></span>
           <span className="text-gray-400">Payment</span>
         </div>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-7xl mx-auto">
        {/* Form */}
        <div className="flex-grow">
           <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 mb-8">
               <h2 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                 <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm">1</span>
                 Shipping Details
               </h2>
               <form className="space-y-6">
                 <div className="grid grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-700">First Name</label>
                     <input type="text" className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="John" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-700">Last Name</label>
                     <input type="text" className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="Doe" />
                   </div>
                 </div>

                 <div className="space-y-2">
                   <label className="text-sm font-bold text-gray-700">Email Address</label>
                   <input type="email" className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="john@example.com" />
                 </div>

                 <div className="space-y-2">
                   <label className="text-sm font-bold text-gray-700">Street Address</label>
                   <input type="text" className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="123 Main St" />
                 </div>

                 <div className="grid grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-700">City</label>
                     <input type="text" className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="New York" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Zip Code</label>
                      <input type="text" className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="10001" />
                   </div>
                 </div>
               </form>
           </div>

           <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 opacity-50 pointer-events-none grayscale">
             <h2 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                 <span className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-sm">2</span>
                 Payment Information
               </h2>
               <p className="text-gray-500">Please complete shipping details first.</p>
           </div>
        </div>

        {/* Order Summary Sidebar */}
         <div className="w-full lg:w-[400px] flex-shrink-0">
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xl sticky top-24">
               <h3 className="text-lg font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">Order Summary</h3>
               
               <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                  {[1, 2].map((i) => (
                    <div key={i} className="flex gap-4 items-center">
                       <div className="w-16 h-16 rounded-lg bg-gray-50 overflow-hidden border border-gray-100">
                         <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=200&q=80" alt="Product" className="w-full h-full object-cover" />
                       </div>
                       <div className="flex-grow">
                         <h4 className="font-bold text-sm text-gray-900 line-clamp-1">Organic Premium Product</h4>
                         <p className="text-xs text-gray-500">Qty: 2</p>
                       </div>
                       <div className="font-bold text-gray-900">$24.00</div>
                    </div>
                  ))}
               </div>
               
               <div className="space-y-3 mb-6 pt-4 border-t border-dashed border-gray-200 text-sm">
                  <div className="flex justify-between text-gray-600">
                     <span>Subtotal</span>
                     <span>$48.00</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                     <span>Shipping</span>
                     <span className="text-emerald-500 font-bold">Free</span>
                  </div>
                  <div className="flex justify-between font-bold text-xl text-gray-900 pt-2">
                     <span>Total</span>
                     <span>$48.00</span>
                  </div>
               </div>
               
               <Button variant="primary" className="w-full py-4 text-lg font-bold shadow-lg shadow-emerald-500/20">
                 Pay Now
               </Button>
               
               <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
                  <FiLock /> SSL Secured Payment
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Checkout;
