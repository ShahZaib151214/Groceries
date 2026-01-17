import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiStar, FiMinus, FiPlus, FiShoppingCart, FiHeart, FiShare2 } from 'react-icons/fi';
import Button from '../components/UI/Button';
import ProductCard from '../components/Product/ProductCard';
import { products, featuredProducts } from '../data/products';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className="text-center py-20 text-xl">Product not found.</div>;
  }

  const handleQuantityChange = (delta) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-10">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:text-emerald-600">Home</Link> / 
        <Link to="/shop" className="hover:text-emerald-600 mx-2">Shop</Link> / 
        <span className="text-gray-900 font-medium ml-2">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-20">
        {/* Image Gallery (Simplified for now) */}
        <div className="space-y-4">
           {/* Main Image */}
           <div className="bg-white rounded-2xl shadow-sm border border-gray-100 aspect-square overflow-hidden p-6 flex items-center justify-center relative group">
             <img src={product.image} alt={product.name} className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500" />
             <div className="absolute top-4 right-4 flex flex-col gap-2">
               <button className="bg-white p-3 rounded-full text-gray-400 hover:text-red-500 shadow-sm border border-gray-100 hover:border-red-100 transition-all"><FiHeart size={20} /></button>
               <button className="bg-white p-3 rounded-full text-gray-400 hover:text-blue-500 shadow-sm border border-gray-100 hover:border-blue-100 transition-all"><FiShare2 size={20} /></button>
             </div>
           </div>
           {/* Thumbnails */}
           <div className="grid grid-cols-4 gap-4">
             {[product.image, product.image, product.image, product.image].map((img, idx) => (
                <div key={idx} className={`rounded-xl border-2 ${idx === 0 ? 'border-emerald-500' : 'border-transparent'} overflow-hidden cursor-pointer hover:border-emerald-300`}>
                   <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </div>
             ))}
           </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
           <div>
             <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm bg-emerald-50 px-3 py-1 rounded-full">{product.category}</span>
             <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-2">{product.name}</h1>
             <div className="flex items-center gap-4">
               <div className="flex text-yellow-400 text-sm">
                 {[...Array(5)].map((_, i) => <FiStar key={i} className="fill-current" />)}
               </div>
               <span className="text-gray-500 text-sm">(120 Reviews)</span>
               <span className="text-gray-300">|</span>
               <span className="text-emerald-600 text-sm font-medium">In Stock</span>
             </div>
           </div>

           <div className="text-3xl font-bold text-gray-900">
             ${product.price.toFixed(2)}
             <span className="text-lg text-gray-400 font-normal line-through ml-3">${(product.price * 1.2).toFixed(2)}</span>
           </div>

           <p className="text-gray-600 leading-relaxed text-lg">
             {product.description || "Fresh and organic produce sourced directly from local farms. Packed with nutrients and flavor, perfect for your daily healthy diet."}
           </p>

           <div className="pt-6 border-t border-gray-100 space-y-6">
             <div className="flex items-center gap-6">
               <div className="flex items-center border border-gray-200 rounded-full">
                 <button onClick={() => handleQuantityChange(-1)} className="w-12 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-l-full transition-colors"><FiMinus /></button>
                 <span className="w-12 text-center font-bold text-gray-900">{quantity}</span>
                 <button onClick={() => handleQuantityChange(1)} className="w-12 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-r-full transition-colors"><FiPlus /></button>
               </div>
               
               <Button variant="primary" className="flex-grow py-3 text-lg flex items-center justify-center gap-2">
                 <FiShoppingCart /> Add to Cart
               </Button>
             </div>
           </div>

           <div className="grid grid-cols-2 gap-4 mt-8">
             <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
               <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-xl">🚚</div>
               <div>
                 <h4 className="font-bold text-gray-900">Free Delivery</h4>
                 <p className="text-xs text-gray-500">Orders over $50</p>
               </div>
             </div>
             <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
               <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-xl">🛡️</div>
               <div>
                 <h4 className="font-bold text-gray-900">100% Organic</h4>
                 <p className="text-xs text-gray-500">Certified products</p>
               </div>
             </div>
           </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="pt-10 border-t border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.slice(0, 4).map((p) => (
             <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
