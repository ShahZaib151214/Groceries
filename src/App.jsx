import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/groceries" element={<Home />} />
          <Route path="/groceries/shop" element={<Shop />} />
          <Route path="/groceries/about" element={<About />} />
          <Route path="/groceries/contact" element={<Contact />} />
          <Route path="/groceries/login" element={<Login />} />
          <Route path="/groceries/signup" element={<Signup />} />
          <Route path="/groceries/product/:id" element={<ProductDetails />} />
          <Route path="/groceries/cart" element={<Cart />} />
          <Route path="/groceries/checkout" element={<Checkout />} />
          {/* Fallback for 404 */}
          <Route path="*" element={<div className="text-center py-20 text-gray-500">Page Not Found</div>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
