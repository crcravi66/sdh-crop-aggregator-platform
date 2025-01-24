import React from 'react';
import { IoIosNotifications } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { Link } from 'react-router-dom';

const index = () => {
  return (
    <div className="min-h-screen items-center w-full flex flex-col bg-[#4a3aff] text-white">
      {/* Status Bar
      <div className="h-10 bg-white flex items-center justify-between px-4">
        <img src="https://dashboard.codeparrot.ai/api/image/Z5EBh3hIZI-ZK8b7/system-2.png" alt="Status Bar" />
      </div> */}

      <div className='sm:mx-auto mx-1 flex-col min-w-72   sm:w-96 flex justify-around '>
        {/* User Info */}
        <div className="flex items-center px-2 sm:px-6 py-3">
          <img src="https://dashboard.codeparrot.ai/api/image/Z5EBh3hIZI-ZK8b7/avatar.png" alt="Avatar" className="w-12 h-12 rounded-full" />
          <div className="ml-4">
            <p className="text-sm">Welcome back, <span className="font-semibold">Ramesh</span></p>
            <p className="text-xs">Hyderabad</p>
          </div>
          <div className="ml-auto">
            <IoIosNotifications style={{ fontSize: '2rem'}} />
          </div>
        </div>

        <div className='bg-white rounded-xl'>
          {/* Search Field */}
          <div className="relative my-2 sm:my-4 flex items-center w-full px-2 sm:px-6">
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full h-[44px] px-3 py-[11px] rounded-[15px] border border-[#cbcbcb] text-[14px] font-medium leading-[150%] text-[#8e8e8e] focus:outline-none focus:border-[#5655b9]"
            />
            <img src="https://dashboard.codeparrot.ai/api/image/Z5EDX73tvuKvN6XS/icon.png" alt="search" className="absolute right-4 sm:right-8 w-6 h-6" />
          </div>

          {/* Category Items */}
          <div className="flex flex-row gap-4 sm:gap-6 w-full px-2 sm:px-6">
            {/* Exchange */}   
              <div className="flex-1">
                <Link to="/home/exchangelayout">
                  <div className="w-full h-full py-4 bg-white rounded-2xl flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-200">
                    <img src="https://dashboard.codeparrot.ai/api/image/Z5EDX73tvuKvN6XS/icon-c.png" alt="exchange" className="w-7 h-7 mb-2" />
                    <span className="font-medium text-xs text-[#979797] text-center leading-4">Exchange</span>
                  </div>
                </Link>
              </div>

            {/* My Quotes */}
            <div className="flex-1">
              <div className="w-full h-full py-4 bg-white rounded-2xl flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-200">
                <img src="https://dashboard.codeparrot.ai/api/image/Z5EDX73tvuKvN6XS/icon-c-2.png" alt="quotes" className="w-7 h-7 mb-2" />
                <span className="font-medium text-xs text-[#979797] text-center leading-4">My<br />Quotes</span>
              </div>
            </div>

            {/* Market Trends */}
            <div className="flex-1">
              <div className="w-full h-full py-4 bg-white rounded-2xl flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="mb-2">
                  <svg width="27" height="15" viewBox="0 0 27 15" fill="none">
                    <path d="M1 13.5L9.5 5L15.5 11L25.5 1" stroke="#5655B9" strokeWidth="2"/>
                  </svg>
                </div>
                <span className="font-medium text-xs text-[#979797] text-center leading-4">Market<br />Trends</span>
              </div>
            </div>
          </div>

          {/* Available Nearby */}
          <div className="px-2 sm:px-6 pt-4">
            <Link to="/home/allcropspage">
              <div className="flex justify-between items-center">
                <p className="font-semibold text-gray-600">Available Nearby</p>
                <p className="text-xs text-blue-600 font-semibold px-2">See all</p>
              </div>
            </Link>
            <div className="flex space-x-2 mt-4">
              <button className="px-4 py-1 bg-blue-500 rounded-full text-xs">100km</button>
              <button className="px-4 py-1 bg-gray-200 rounded-full text-xs text-black">10km</button>
              <button className="px-4 py-1 bg-gray-200 rounded-full text-xs text-black">20km</button>
            </div>
          </div>

          {/* Product List */}
          <div className="flex flex-col space-y-4 px-2 sm:px-5 py-4">
            <Link to="/home/cropdetails">
              <div className="flex items-center bg-white text-black px-2 rounded-lg">
                <img src="https://dashboard.codeparrot.ai/api/image/Z5EBh3hIZI-ZK8b7/rectangl.png" alt="Wheat" className="w-16 h-16 rounded-lg" />
                <div className="ml-4 flex-grow">
                  <p className="font-semibold">Wheat</p>
                  <p className="text-xs">100 Quintal</p>
                  <p className="text-xs">10 km away</p>
                  <p className="text-xs">30/10/2019</p>
                </div>
                <p className="text-red-500 font-semibold">₹ 15.5/kg</p>
              </div>
            </Link>
            <div className="flex items-center bg-white text-black px-2 rounded-lg">
              <img src="https://dashboard.codeparrot.ai/api/image/Z5EBh3hIZI-ZK8b7/rectangl-2.png" alt="Tomato" className="w-16 h-16 rounded-lg" />
              <div className="ml-4 flex-grow">
                <p className="font-semibold">Tomato</p>
                <p className="text-xs">9 Quintal</p>
                <p className="text-xs">10 km away</p>
                <p className="text-xs">30/10/2019</p>
              </div>
              <p className="text-red-500 font-semibold">₹ 12/kg</p>
            </div>
            <div className="flex items-center bg-white text-black px-2 rounded-lg">
              <img src="https://dashboard.codeparrot.ai/api/image/Z5EBh3hIZI-ZK8b7/rectangl-3.png" alt="Potato" className="w-16 h-16 rounded-lg" />
              <div className="ml-4 flex-grow">
                <p className="font-semibold">Potato</p>
                <p className="text-xs">53 Quintal</p>
                <p className="text-xs">10 km away</p>
                <p className="text-xs">30/10/2019</p>
              </div>
              <p className="text-red-500 font-semibold">₹ 10/kg</p>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="w-full bg-white">
            <div className="flex items-center justify-between px-6 py-2">
              {/* Home Button Group */}
              <div className="relative">
                <div className="flex items-center bg-[#4A3AFF] rounded-xl px-4 py-2 w-[92px] h-[36px]">
                  <img 
                    src="https://dashboard.codeparrot.ai/api/image/Z5EFBnhIZI-ZK8cC/icons-ho.png" 
                    alt="Home"
                    className="w-5 h-5 mr-2"
                  />
                  <span className="text-white mr-2 font-poppins text-xs font-normal">Home</span>
                </div>
              </div>

              {/* Search Icon */}
              <div>
                <img 
                  src="https://dashboard.codeparrot.ai/api/image/Z5EFBnhIZI-ZK8cC/icosn-se.png" 
                  alt="Search"
                  className="w-6 h-6"
                />
              </div>

              {/* Message Icon */}
              <div>
                <img 
                  src="https://dashboard.codeparrot.ai/api/image/Z5EFBnhIZI-ZK8cC/icon.png" 
                  alt="Message"
                  className="w-6 h-6"
                />
              </div>

              {/* user Icon */}
              <div>
                <img 
                  src="https://dashboard.codeparrot.ai/api/image/Z5EBh3hIZI-ZK8b7/icon-4.png" 
                  alt="Message"
                  className="w-6 h-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

