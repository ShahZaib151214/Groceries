import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/Product/ProductCard';
import Button from '../components/UI/Button';
import { featuredProducts, categories } from '../data/products';
import { banner1, banner2 } from '../assets/ProductPics';
import { FiArrowRight, FiCheckCircle, FiTruck, FiShield } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="animate-fade-in-up">
      {/* Modern Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-gray-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
           {banner1 ? (
             <img src={banner1} alt="Fresh Groceries" className="w-full h-full object-cover object-center opacity-60" />
           ) : (
             <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800" />
           )}
           <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-10">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 backdrop-blur-sm border border-white/20 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Fresh Harvest Season is Here
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight">
              Eating well <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">never tasted</span> <br/>
              so good.
            </h1>
            
            <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
              Discover the freshest organic produce, sourced directly from local farmers and delivered to your doorstep with care.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/shop">
                <Button variant="primary" className="!px-8 !py-4 text-lg shadow-emerald-900/50 hover:shadow-emerald-500/50 hover:-translate-y-1">
                  Start Shopping
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="!px-8 !py-4 text-lg border-white/30 text-white hover:bg-white hover:text-gray-900 hover:border-white transition-all">
                  Our Story
                </Button>
              </Link>
            </div>
            
            <div className="pt-8 flex items-center gap-8 text-white/60 text-sm font-medium">
              <div className="flex items-center gap-2"><FiCheckCircle className="text-emerald-500" /> Free Shipping</div>
              <div className="flex items-center gap-2"><FiCheckCircle className="text-emerald-500" /> 100% Organic</div>
              <div className="flex items-center gap-2"><FiCheckCircle className="text-emerald-500" /> Support 24/7</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="flex items-center gap-4 group">
               <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                 <FiTruck />
               </div>
               <div>
                 <h3 className="font-bold text-lg text-gray-900">Free Home Delivery</h3>
                 <p className="text-sm text-gray-500">For all orders over $50</p>
               </div>
             </div>
             <div className="flex items-center gap-4 group">
               <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                 <FiCheckCircle />
               </div>
               <div>
                 <h3 className="font-bold text-lg text-gray-900">Quality Guarantee</h3>
                 <p className="text-sm text-gray-500">100% Organic certified</p>
               </div>
             </div>
             <div className="flex items-center gap-4 group">
               <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                 <FiShield />
               </div>
               <div>
                 <h3 className="font-bold text-lg text-gray-900">Secure Payment</h3>
                 <p className="text-sm text-gray-500">100% Secure transaction</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-2 block">Collections</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-gray-500">Browse our curated selection of fresh, organic products organized for your convenience.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {categories.map((cat, idx) => (
              <Link key={cat.id} to={`/shop?category=${cat.name}`} className="group relative overflow-hidden rounded-3xl aspect-[4/5] shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-gray-200 skeleton-loader"> {/* Placeholder */}
                   <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 transition-opacity">
                   <h3 className="text-white text-2xl font-bold mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{cat.name}</h3>
                   <span className="text-emerald-300 font-medium text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                     View {cat.count} Products <FiArrowRight />
                   </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
           <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-2 block">Trending</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Featured Products</h2>
              </div>
              <Link to="/shop">
                <Button variant="outline" className="group">View All Products <FiArrowRight className="inline ml-2 transition-transform group-hover:translate-x-1" /></Button>
              </Link>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
             {featuredProducts.map((product) => (
               <ProductCard key={product.id} product={product} />
             ))}
           </div>
        </div>
      </section>
      
      {/* Promo Banner */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="bg-emerald-900 rounded-[2.5rem] p-8 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-3xl -mr-32 -mt-64"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-3xl -ml-32 -mb-64"></div>
            
            <div className="relative z-10 w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
               <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-800 text-emerald-200 text-sm font-bold mb-6 border border-emerald-700">Limited Time Offer</span>
               <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">Get <span className="text-amber-400">20% Off</span> <br/> Your First Order</h2>
               <p className="text-emerald-200 text-lg mb-10 max-w-md">Join our newsletter and get exclusive deals, new arrivals, and more directly to your inbox.</p>
               
               <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto md:mx-0">
                 <input 
                   type="email" 
                   placeholder="Enter your email" 
                   className="flex-grow px-6 py-4 rounded-full bg-white/10 border border-emerald-700/50 text-white placeholder-emerald-200/50 focus:outline-none focus:bg-white/20 focus:border-emerald-500 transition-all backdrop-blur-sm"
                 />
                 <Button variant="secondary" className="py-4 px-8 shadow-xl shadow-amber-900/20 font-bold whitespace-nowrap">Subscribe</Button>
               </form>
            </div>
            
            <div className="relative z-10 w-full md:w-1/2 flex justify-center md:justify-end">
               {banner2 && (
                 <div className="relative">
                    <div className="absolute inset-0 bg-emerald-500/30 blur-2xl rounded-full scale-90"></div>
                     <img 
                      src={banner2} 
                      alt="Promo" 
                      className="relative w-full max-w-md object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700" 
                    />
                 </div>
               )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
