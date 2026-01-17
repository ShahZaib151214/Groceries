import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/Product/ProductCard';
import Button from '../components/UI/Button';
import { products, categories } from '../data/products';
import { FiFilter, FiChevronDown, FiSearch } from 'react-icons/fi';

const Shop = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category') || 'All';
  
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState(100);
  
  // Filter products
  const filteredProducts = products.filter(p => {
    const matchCategory = activeCategory === 'All' || p.category === activeCategory || p.type === activeCategory;
    const matchPrice = p.price <= priceRange;
    return matchCategory && matchPrice;
  });

  return (
    <div className="">
      {/* Header Banner */}
      <div className="bg-emerald-900 py-16 px-4 md:px-6 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-20"></div>
         <div className="container mx-auto relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Shop Our Collection</h1>
            <p className="text-emerald-100 max-w-xl mx-auto text-lg">Browse our hand-picked selection of fresh, organic groceries sourced from local farms.</p>
         </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-72 flex-shrink-0 space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <div className="flex items-center gap-2 mb-6 text-gray-900 border-b border-gray-100 pb-4">
                <FiFilter className="text-emerald-500" />
                <h3 className="font-bold text-lg">Filters</h3>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Categories</h4>
                <ul className="space-y-2">
                  <li>
                    <button 
                      onClick={() => setActiveCategory('All')}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all ${activeCategory === 'All' ? 'bg-emerald-50 text-emerald-700 font-bold translate-x-1' : 'text-gray-600 hover:bg-gray-50 hover:pl-4'}`}
                    >
                      All Products
                    </button>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button 
                        onClick={() => setActiveCategory(cat.name)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-all ${activeCategory === cat.name ? 'bg-emerald-50 text-emerald-700 font-bold translate-x-1' : 'text-gray-600 hover:bg-gray-50 hover:pl-4'}`}
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Range */}
              <div>
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Price Range</h4>
                <div className="px-1">
                   <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="w-full accent-emerald-500 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" 
                  />
                   <div className="flex justify-between text-sm font-medium text-gray-600 mt-3">
                     <span>$0</span>
                     <span className="text-emerald-600 font-bold">${priceRange}</span>
                     <span>$100+</span>
                   </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-grow">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
               <div className="relative w-full sm:w-auto">
                 <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                 <input 
                   type="text" 
                   placeholder="Search products..." 
                   className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none w-full sm:w-64 transition-all"
                 />
               </div>
               <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>Sort by:</span>
                  <select className="bg-transparent font-bold text-gray-900 cursor-pointer outline-none focus:text-emerald-600">
                    <option>Recommended</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                  </select>
               </div>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-500 max-w-xs mx-auto">We couldn't find any products matching your current filters.</p>
                <Button 
                  variant="outline" 
                  className="mt-6"
                  onClick={() => { setActiveCategory('All'); setPriceRange(100); }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
            
            {/* Pagination */}
            {filteredProducts.length > 0 && (
              <div className="flex justify-center mt-12 gap-2">
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:border-emerald-500 hover:text-emerald-500 hover:shadow-md transition-all">&lt;</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 transform scale-110 font-bold">1</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:border-emerald-500 hover:text-emerald-500 hover:shadow-md transition-all">2</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:border-emerald-500 hover:text-emerald-500 hover:shadow-md transition-all">3</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:border-emerald-500 hover:text-emerald-500 hover:shadow-md transition-all">&gt;</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
