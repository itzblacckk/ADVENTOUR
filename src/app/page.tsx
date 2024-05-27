import React from 'react';
import Head from 'next/head';

const Home = () => {
  return (
    <div className="bg-white">
      <Head>
        <title>ADVENTOUR</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/* Add any other meta tags or links here */}
      </Head>

      <nav className="bg-white fixed w-full top-0 left-0 z-10">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center">
            <p className="font-bold text-lg text-black">Adventour<span className="text-primary">.</span></p>
          </div>
          <input type="checkbox" id="check" className="hidden" />
          <ul className="md:flex space-x-8">
            <li><a href="#home" className="text-base text-black">Home</a></li>
            <li><a href="#destination" className="text-base text-black">Destinations</a></li>
            <li><a href="#subscribe" className="text-base text-black">Subscribe</a></li>
            <li><a href="https://bhushan-anil-mah.formaloo.co/vi7had" className="text-base text-black">Reviews</a></li>
            {/* Uncomment to add login link */}
            {/* <li><a href="/" className="text-base text-white">login</a></li> */}
          </ul>
          <label htmlFor="check" className="md:hidden cursor-pointer text-white">
            <i className="fas fa-bars"></i>
          </label>
          <button className="btn bg-purple-500 font-semibold rounded-[50px] h-10 px-2"><a href="/Auth" className="text-white">Login</a></button>
        </div>
      </nav>

      <header className="bg-white">
        <div className="container mx-auto px-4 py-24 grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="relative">
            <img src="/header-1.jpg" alt="header" className=" flex relative left-[70px] w-100 h-100 justify-center  object-cover rounded-lg shadow-xl" />
          </div>
          <div className="text-center md:text-left">
            <p className="font-semibold text-purple-500">Book Now</p>
            <h1 className="text-4xl md:text-5xl text-black font-bold mb-4">The Smiling 😊<br />Agent for Travel</h1>
            <p className="text-lg mb-8 text-black">
              Make your travel more enjoyable with us. We are the best travel agency and we are providing the best travel services for our clients.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <a href="/suggest" className="font-bold btn bg-purple-500 rounded-[50px] p-2 ">Plan a Trip</a>
              <a href="#destination" className="btn bg-purple-500 font-bold rounded-[50px] p-2 ">Book a Trip</a>
              
              {/* <div className="story">
                <div className="video__image">
                  <img src="/story.jpg" alt="story" />
                  <span><i className="ri-play-fill"></i></span>
                </div>
                <span>Watch our story</span>
              </div> */}
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto bg-white  gap-6 " id="destination">
        <div className="flex flex-col mb-8">
          <h2 className="text-3xl text-center font-semibold text-black mb-4">Explore Top Destinations</h2>
          <p className="text-lg text-black text-center mb-8">Explore your suitable and dream places around the world. Here you can find your right destination.</p>
        </div>
        <div className="grid m-8 bg-white  grid-cols-1 md:grid-cols-3 gap-8">
          <div className="destination__card">
            <a href="/solo">
              <img src="/destination-1.jpg" alt="destination" className="rounded-lg" />
            </a>
          </div>
          <div className="destination__card">
            <a href="/groups">
              <img src="/destination-2.jpg" alt="destination" className="rounded-lg" />
            </a>
          </div>
          <div className="destination__card">
            <a href="/female">
              <img src="/destination-3.jpg" alt="destination" className="rounded-lg" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-16" id="subscribe">
        <div className="container bg-white mx-auto px-4">
          <h2 className="text-3xl font-semibold text-black mb-4 text-center">Subscribe to Get Special Prize</h2>
          <p className="text-lg text-black text-center mb-8">Subscribe to our newsletter and get special offers on your dream destinations.</p>
          <form className="flex items-center justify-center ">
            <input type="email" placeholder="Your email here" className="shadow-lg text-black shadow-blue-500/50 w-full md:w-auto px-4 py-2 rounded-l-lg border-none outline-none" />
            <button type="submit" className="btn px-6 py-2  rounded-r-lg shadow-lg shadow-blue-500/50 text-black">Send</button>
          </form>
        </div>
      </section>

      <footer className="bg-white text-black py-16" id="Contact">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-secondary">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Adventour<span className="text-primary">.</span></h3>
            <p>
              Explore your suitable and dream places around the world. Here you can find your right destination.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Support</h4>
            <ul>
              <li>FAQs</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Address</h4>
            <p>
              <span>Address:</span> 280 Wilson Street, Cima, California, 92323, United States
            </p>
            <p><span>Email:</span> info@Adventour.com</p>
            <p><span>Phone:</span> +91 9876543210</p>
          </div>
        </div>
        <div className="text-secondary text-center py-4">
          Copyright © 2024 yashmhatre_625. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;


