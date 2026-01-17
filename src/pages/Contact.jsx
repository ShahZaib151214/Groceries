import React from 'react';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import Button from '../components/UI/Button';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
       <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-2 block">Get in Touch</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">We'd Love to Hear From You</h1>
        <p className="text-gray-500">Have a question? Need help with an order? Just want to say hi? We're all ears.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className="w-full lg:w-1/3 space-y-8 bg-gray-900 text-white p-10 rounded-3xl">
           <div>
             <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
             <p className="text-gray-400 mb-8">Fill up the form and our team will get back to you within 24 hours.</p>
           </div>
           
           <div className="space-y-6">
             <div className="flex items-start gap-4">
               <FiPhone className="text-emerald-400 text-xl mt-1" />
               <div>
                 <h4 className="font-bold text-lg">Phone</h4>
                 <p className="text-gray-400">+1 (555) 123-4567</p>
               </div>
             </div>
             <div className="flex items-start gap-4">
               <FiMail className="text-emerald-400 text-xl mt-1" />
               <div>
                 <h4 className="font-bold text-lg">Email</h4>
                 <p className="text-gray-400">hello@groceries.com</p>
               </div>
             </div>
             <div className="flex items-start gap-4">
               <FiMapPin className="text-emerald-400 text-xl mt-1" />
               <div>
                 <h4 className="font-bold text-lg">Headquarters</h4>
                 <p className="text-gray-400">123 Green Way, Eco City, Earth 10101</p>
               </div>
             </div>
           </div>
        </div>

        {/* Form */}
        <div className="w-full lg:w-2/3 bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
           <form className="space-y-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-2">
                 <label className="text-sm font-bold text-gray-900">First Name</label>
                 <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="John" />
               </div>
               <div className="space-y-2">
                 <label className="text-sm font-bold text-gray-900">Last Name</label>
                 <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="Doe" />
               </div>
             </div>

             <div className="space-y-2">
               <label className="text-sm font-bold text-gray-900">Email Address</label>
               <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="john@example.com" />
             </div>

             <div className="space-y-2">
               <label className="text-sm font-bold text-gray-900">Message</label>
               <textarea rows="5" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="How can we help you?"></textarea>
             </div>

             <Button variant="primary" className="w-full py-4 text-lg">Send Message</Button>
           </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
