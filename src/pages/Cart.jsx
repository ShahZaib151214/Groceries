import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2, FiMinus, FiPlus, FiArrowRight, FiShoppingCart } from 'react-icons/fi';
import Button from '../components/UI/Button';
import { products } from '../data/products';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { ...products[0], quantity: 2 },
    { ...products[1], quantity: 1 },
    { ...products[4], quantity: 3 },
  ]);

  const updateQuantity = (id, delta) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 10;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-32 text-center animate-fade-in-up">
        <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
           <FiShoppingCart size={40} />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">Looks like you haven't made your choice yet. Browse our shop to find the best fresh products.</p>
        <Link to="/Groceries/shop">
          <Button variant="primary" className="px-8 py-3">Start Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10">Shopping Cart <span className="text-lg font-medium text-gray-500 ml-2">({cartItems.length} items)</span></h1>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Cart Items List */}
        <div className="flex-grow space-y-6">
          <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-gray-200 text-gray-500 text-sm font-bold uppercase tracking-wider">
            <div className="col-span-6">Product</div>
            <div className="col-span-2 text-center">Price</div>
            <div className="col-span-2 text-center">Quantity</div>
            <div className="col-span-2 text-right">Total</div>
          </div>

          {cartItems.map((item) => (
            <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 items-center bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              {/* Product Info */}
              <div className="col-span-1 md:col-span-6 flex items-center gap-6">
                <div className="w-24 h-24 rounded-xl bg-gray-50 overflow-hidden flex-shrink-0 border border-gray-100 p-2">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{item.name}</h3>
                  <div className="text-xs font-bold text-emerald-600 bg-emerald-50 inline-block px-2 py-1 rounded">{item.category}</div>
                  <button onClick={() => removeItem(item.id)} className="text-gray-400 text-sm flex items-center gap-1 mt-3 hover:text-red-500 transition-colors group">
                    <FiTrash2 size={14} className="group-hover:scale-110 transition-transform"/> Remove
                  </button>
                </div>
              </div>

              {/* Price */}
              <div className="col-span-1 md:col-span-2 md:text-center text-gray-900 font-medium text-lg">
                <span className="md:hidden text-gray-500 mr-2 text-sm">Price:</span>
                ${item.price.toFixed(2)}
              </div>

              {/* Quantity */}
              <div className="col-span-1 md:col-span-2 flex justify-start md:justify-center">
                <div className="flex items-center bg-gray-50 rounded-lg p-1 border border-gray-200">
                  <button onClick={() => updateQuantity(item.id, -1)} className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-white hover:text-emerald-600 hover:shadow-sm rounded-md transition-all"><FiMinus size={14} /></button>
                  <span className="w-10 text-center font-bold text-gray-900">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-white hover:text-emerald-600 hover:shadow-sm rounded-md transition-all"><FiPlus size={14} /></button>
                </div>
              </div>

              {/* Total */}
              <div className="col-span-1 md:col-span-2 md:text-right font-bold text-xl text-emerald-600">
                <span className="md:hidden text-gray-500 mr-2 text-sm font-normal">Total:</span>
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
          
          <div className="flex justify-between items-center pt-6">
             <Link to="/Groceries/shop" className="text-gray-500 font-medium hover:text-emerald-600 flex items-center gap-2 transition-colors">
               ← Continue Shopping
             </Link>
          </div>
        </div>

        {/* Summary Card */}
        <div className="w-full lg:w-96 flex-shrink-0">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl sticky top-24">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-gray-600 font-medium">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600 font-medium">
                <span>Shipping</span>
                <span>{shipping === 0 ? <span className="text-emerald-500 font-bold">Free</span> : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-gray-600 font-medium">
                <span>Tax (Estimated)</span>
                <span>$0.00</span>
              </div>
              
              <div className="my-4 border-t border-dashed border-gray-200"></div>
              
              <div className="flex justify-between items-end">
                <span className="font-bold text-gray-900 text-lg">Total</span>
                <span className="font-extrabold text-3xl text-emerald-600">${total.toFixed(2)}</span>
              </div>
            </div>
            
            <Link to="/Groceries/checkout">
              <Button variant="primary" className="w-full py-4 text-lg flex justify-center items-center gap-2 shadow-lg shadow-emerald-500/30 hover:scale-[1.02]">
                Proceed to Checkout <FiArrowRight />
              </Button>
            </Link>

            <div className="mt-6 flex flex-col items-center gap-3 text-center">
              <div className="flex gap-2 opacity-50 grayscale hover:grayscale-0 transition-all">
                {/* Payment Icons Placeholders */}
                <div className="w-10 h-6 bg-gray-200 rounded"></div>
                <div className="w-10 h-6 bg-gray-200 rounded"></div>
                <div className="w-10 h-6 bg-gray-200 rounded"></div>
                <div className="w-10 h-6 bg-gray-200 rounded"></div>
              </div>
              <span className="text-xs text-center text-gray-400 font-medium">100% Secure Checkout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
