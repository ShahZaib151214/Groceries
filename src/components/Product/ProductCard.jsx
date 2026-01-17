import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiHeart, FiStar, FiEye } from 'react-icons/fi';
import Button from '../UI/Button';

const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden relative flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-50 p-6">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        
        {/* Floating Badges */}
        {product.discount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide shadow-sm">
            -20%
          </div>
        )}

        {/* Quick Action Buttons (Slide In) */}
        <div className="absolute right-3 top-3 flex flex-col gap-2 translate-x-10 group-hover:translate-x-0 transition-transform duration-300">
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-500 hover:text-red-500 hover:bg-red-50 shadow-md transition-all delay-75 hover:scale-110">
            <FiHeart size={18} />
          </button>
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-500 hover:text-emerald-500 hover:bg-emerald-50 shadow-md transition-all delay-100 hover:scale-110">
            <FiEye size={18} />
          </button>
        </div>

        {/* Add to Cart Overlay (Bottom) */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Button variant="primary" className="w-full shadow-lg shadow-emerald-500/20 text-sm py-2.5">
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <div className="text-xs font-bold text-emerald-600 uppercase tracking-widest">{product.category}</div>
          <div className="flex items-center gap-1 text-amber-400 text-xs font-bold bg-amber-50 px-1.5 py-0.5 rounded">
            <FiStar className="fill-current" /> {product.rating}
          </div>
        </div>

        <Link to={`/product/${product.id}`} className="mb-2 block">
          <h3 className="text-gray-900 font-bold text-lg leading-snug group-hover:text-emerald-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        
        <div className="mt-auto pt-3 flex justify-between items-end border-t border-gray-50">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 line-through">{(product.price * 1.25).toFixed(2)}</span>
            <span className="text-xl font-extrabold text-gray-900">${product.price.toFixed(2)}</span>
          </div>
          <button className="md:hidden w-8 h-8 bg-emerald-100/50 rounded-full flex items-center justify-center text-emerald-600">
            <FiShoppingCart size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
