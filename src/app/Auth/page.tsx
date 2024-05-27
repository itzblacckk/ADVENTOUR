"use client";
import React, { useState } from 'react';

const Auth: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="relative flex items-center justify-center w-full min-h-screen bg-gradient-to-r from-gray-200 to-blue-200 overflow-hidden">
      <div className="relative w-full max-w-2xl min-h-[480px] bg-white rounded-3xl shadow-lg overflow-hidden flex">
        {/* Sign In form */}
        <div className={`absolute top-0 left-0 h-full w-1/2 transition-transform duration-[600ms] ${isActive ? 'transform translate-x-full' : ''}`}>
          <form className="bg-white flex flex-col items-center justify-center h-full px-10">
            <h1 className="text-2xl font-bold mb-4">Sign In</h1>
            <input type="text" name="username" placeholder="Email" className="w-full bg-gray-200 p-3 rounded-md mb-4 outline-none" />
            <input type="password" name="password" placeholder="Password" className="w-full bg-gray-200 p-3 rounded-md mb-4 outline-none" />
            <button type="submit" className="bg-purple-600 text-white py-3 px-8 rounded-md">Sign In</button>
          </form>
        </div>
        {/* Sign Up form */}
        <div className={`absolute top-0 left-0 h-full w-1/2 transition-transform duration-[600ms] ${isActive ? '' : 'transform -translate-x-full opacity-0 z-10'}`}>
          <form className="bg-white flex flex-col items-center justify-center h-full px-10">
            <h1 className="text-2xl font-bold mb-4">Create Account</h1>
            <input type="text" name="username" placeholder="Name" className="w-full bg-gray-200 p-3 rounded-md mb-4 outline-none" />
            <input type="email" name="email" placeholder="Email" className="w-full bg-gray-200 p-3 rounded-md mb-4 outline-none" />
            <input type="password" name="password" placeholder="Password" className="w-full bg-gray-200 p-3 rounded-md mb-4 outline-none" />
            <button type="submit" className="bg-purple-600 text-white py-3 px-8 rounded-md">Sign Up</button>
          </form>
        </div>
        {/* Overlay */}
        <div className="absolute top-0 left-1/2 w-1/2 h-full bg-purple-600 flex flex-col items-center justify-center text-white p-8 transition-transform duration-[600ms]">
          <div className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-8 transition-transform duration-[600ms] ${isActive ? 'opacity-100 z-20' : 'transform -translate-x-full opacity-0'}`}>
            <h1 className="text-3xl font-bold">Welcome Back!</h1>
            <p className="mb-8">Enter your personal details to use all of site features</p>
            <button onClick={toggleActive} className="bg-white text-purple-600 py-2 px-6 rounded-md">Sign In</button>
          </div>
          <div className={`transform transition-transform duration-[600ms] ${isActive ? 'opacity-0 transform -translate-x-[800px]' : '  opacity-100'}`}>
            <h1 className="text-3xl font-bold">Hello, Friend!</h1>
            <p className="mb-8">Register with your personal details to use all of site features</p>
            <button onClick={toggleActive} className="bg-white text-purple-600 py-2 px-6 rounded-md">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
