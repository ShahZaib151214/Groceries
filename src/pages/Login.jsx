import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/UI/Button';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate credentials (mock)
    // On success:
    navigate('/');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-10 px-4">
      <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl w-full max-w-md border border-gray-100">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-500">Sign in to continue your grocery shopping</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-900">Email Address</label>
            <input 
              type="email" 
              required
              className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-gray-50 focus:bg-white" 
              placeholder="you@example.com" 
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold text-gray-900">Password</label>
              <a href="#" className="text-xs text-emerald-600 font-bold hover:underline">Forgot?</a>
            </div>
            <input 
              type="password" 
              required
              className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-gray-50 focus:bg-white" 
              placeholder="••••••••" 
            />
          </div>

          <Button variant="primary" className="w-full py-3.5 text-lg shadow-emerald-500/20">
            Sign In
          </Button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-500">
          Don't have an account?{' '}
          <Link to="/signup" className="text-emerald-600 font-bold hover:underline">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
