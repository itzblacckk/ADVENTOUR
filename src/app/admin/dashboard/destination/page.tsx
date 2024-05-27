import Head from 'next/head';
import React from 'react';

const Destination: React.FC = () => {
  return (
    <>
      <Head>
        <title>Destination Form</title>
      </Head>
      <nav className="bg-white fixed w-full top-0 left-0 z-10">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center">
            <p className="font-bold text-lg text-black">Adventour<span className="text-primary">.</span></p>
          </div>
          <input type="checkbox" id="check" className="hidden" />
          <ul className="md:flex space-x-8 hidden md:block">
            <li><a href="#home" className="text-base text-black">Home</a></li>
            <li><a href="#destination" className="text-base text-black">Destinations</a></li>
            <li><a href="#subscribe" className="text-base text-black">Subscribe</a></li>
            <li><a href="https://bhushan-anil-mah.formaloo.co/vi7had" className="text-base text-black">Reviews</a></li>
          </ul>
          <label htmlFor="check" className="md:hidden cursor-pointer text-black">
            <i className="fas fa-bars"></i>
          </label>
        </div>
      </nav>
      <section className="bg-white text-black h-[110vh] flex items-center justify-center">
        <div className=" p-8 rounded shadow-xl shadow-blue-500  w-full max-w-md">
          <h3 className="text-lg mb-2">Name</h3>
          <input className="w-full mb-4 p-2 border shadow-sm shadow-blue-500 rounded" />
          <h3 className="text-lg mb-2">Country</h3>
          <input className="w-full mb-4 p-2 border rounded shadow-sm shadow-blue-500" />
          <h3 className="text-lg mb-2">Region</h3>
          <input className="w-full mb-4 p-2 border rounded shadow-sm shadow-blue-500" />
          <h3 className="text-lg mb-2">Description</h3>
          <textarea className="w-full mb-4 p-2 border rounded shadow-sm shadow-blue-500" />
          
          <h3 className="text-lg mb-2">Image</h3>
          <input type="file" className=" shadow-sm shadow-blue-500 w-full mb-4 p-2 border rounded" />
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
        </div>
      </section>
    </>
  );
};

export default Destination;
