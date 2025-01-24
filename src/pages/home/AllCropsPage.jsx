import React from 'react';
import NavigationBar from '../../component/signInPage/common/NavigationBar';

const AllCropsPage = () => {
  const crops = [
    { imageUrl: 'https://dashboard.codeparrot.ai/api/image/Z5HGrvA8XwfbJP6Y/rectangl.png', cropName: 'Wheat', quantity: '100 Quintal', distance: '10 km away', date: '30/10/2019', price: '₹ 15.5/kg' },
    { imageUrl: 'https://dashboard.codeparrot.ai/api/image/Z5HGrvA8XwfbJP6Y/rectangl-2.png', cropName: 'Tomato', quantity: '9 Quintal', distance: '22 km away', date: '30/10/2019', price: '₹ 12/kg' },
    { imageUrl: 'https://dashboard.codeparrot.ai/api/image/Z5HGrvA8XwfbJP6Y/rectangl-3.png', cropName: 'Potato', quantity: '53 Quintal', distance: '29 km away', date: '30/10/2019', price: '₹ 8.5/kg' },
    { imageUrl: 'https://dashboard.codeparrot.ai/api/image/Z5HGrvA8XwfbJP6Y/rectangl-4.png', cropName: 'Wheat', quantity: '100 Quintal', distance: '3 km away', date: '30/10/2019', price: '₹ 15.5/kg' },
    { imageUrl: 'https://dashboard.codeparrot.ai/api/image/Z5HGrvA8XwfbJP6Y/rectangl-5.png', cropName: 'Tomato', quantity: '15 Quintal', distance: '5 km away', date: '30/10/2019', price: '₹ 15/kg' }
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-white">
      

      {/* Navigation Bar */}
      <NavigationBar title={'All crops'} /> 
      
        <div className="flex justify-between flex-col   w-full max-w-md p-1 sm:p-4 font-poppins">

        {/* Search Bar */}
        <div className="flex-grow-0 w-full px-4 sm:px-6">
            <div className="flex flex-row items-center w-full h-[44px] rounded-[15px] border border-[#cbcbcb] px-3 py-[11px] bg-white shadow-sm mb-4">
            <input
                type="text"
                placeholder="Search"
                className="flex-grow font-[Poppins] font-medium text-sm text-[#8e8e8e] bg-transparent outline-none"
            />
            <img src="https://dashboard.codeparrot.ai/api/image/Z5HGrvA8XwfbJP6Y/icon.png" alt="search" className="w-6 h-6 ml-2" />
            </div>

            {/* Distance Tabs */}
            <div className="flex flex-row gap-3 w-full h-11 mb-4">
            {['100km', '10km', '20km'].map((distance, index) => (
                <div
                key={index}
                className={`flex items-center justify-center w-[100px] h-11 rounded-[15px] cursor-pointer ${
                    index === 0 ? 'bg-[#4a3aff] text-white' : 'bg-[#f2f1f9] text-[#343434]'
                }`}
                >
                <span className="font-[Poppins] font-medium text-base leading-6">
                    {distance}
                </span>
                </div>
            ))}
            </div>
        </div>

        {/* Crop List */}
        <div className="flex-grow w-full px-2 sm:px-6 overflow-y-auto">
            {crops.map((crop, index) => (
            <div key={index}  className="flex w-full  h-full bg-white rounded-[15px] my-3 p-2">
                <img 
                src={crop.imageUrl}
                alt={crop.cropName}
                className="sm:w-32 w-24 h-24 sm:h-32 object-cover rounded-[15px]"
                />
                <div className="flex flex-col ml-4 flex-grow">
                <div className="text-[14px] font-semibold text-[#343434] leading-6">
                    {crop.cropName}
                </div>
                <div className="flex flex-col gap-1.5 mt-2">
                    <div className="text-[12px] font-semibold text-[#3629B7]">
                    {crop.quantity}
                    </div>
                    <div className="text-[12px] font-medium text-[#979797]">
                    {crop.distance}
                    </div>
                    <div className="text-[12px] font-medium text-[#979797]">
                    {crop.date}
                    </div>
                </div>
                </div>
                <div className="flex flex-col items-end justify-between">
                <button className="w-[14.4px] h-[18.4px] mt-2">
                    <img src="https://dashboard.codeparrot.ai/api/image/Z5HGrvA8XwfbJP6Y/group.png" alt="bookmark" />
                </button>
                <div className="text-[16px] font-semibold text-[#FF4267]">
                    {crop.price}
                </div>
                </div>
            </div>
            ))}
        </div>

      </div>
    </div>
  );
};

export default AllCropsPage;


