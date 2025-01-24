import React, { useState } from 'react';
import NavigationBar from '../../component/signInPage/common/NavigationBar';
import PrimaryNextButton from '../../component/signInPage/common/PrimaryNextButton';

const YourQuotePage = () => {
  const [viewing, setViewing] = useState(null);

  const handleView = () => setViewing(true);

  return (
    <div className="flex flex-col w-full min-h-screen">
   
      {/* Navigation Bar */}
      <NavigationBar title={'POST20241201-12345'} searchIcon={true} />

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center">
        {/* Image Gallery */}
        <div className="flex-none w-11/12 max-w-[332px] flex flex-col gap-[13px] mt-4">
          <div className="w-full h-[180px]">
            <img 
              src="https://dashboard.codeparrot.ai/api/image/Z5JA0vA8XwfbJP9Y/illustra.png"
              alt="Main"
              className="w-full h-full object-cover rounded-t-[16px]"
            />
          </div>
          <div className="flex flex-row gap-6 justify-start items-center">
            {['https://3.imimg.com/data3/EP/JB/IMOB-18886571/wheat.jpg', 'https://5.imimg.com/data5/SELLER/Default/2023/5/305118245/BJ/IR/KG/158799191/milling-wheat-500x500.jpg'].map((thumb, index) => (
              <div key={index} className="w-16 h-16">
                <img
                  src={thumb}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover rounded-[16px]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Details Section */}
        <div className="flex-none w-11/12 max-w-[327px] my-4">
          <h2 className="text-[#343434] text-lg font-semibold mb-4">Your Quote</h2>
            <div className="bg-white rounded-lg p-4 mb-4 shadow-md">
                <div className="space-y-3">
                {[
                    { label: 'Crop Type', value: 'Wheat' },
                    { label: 'Address', value: 'Ameta, Dist-Barmer\nRajasthan 344001' },
                    { label: 'Expected Harvest Date', value: 'Ready' },
                    { label: 'Price', value: '₹ 22/kg' },
                    { label: 'Quantity', value: '10 Tons' },
                    { label: 'Negotiation Preference', value: 'Non-negotiable' }
                ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-500 text-xs font-semibold">{item.label}</span>
                    <span className="text-[#343434] text-xs font-semibold">{item.value}</span>
                    </div>
                ))}
                <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-md font-semibold">Platform fee</span>
                    <span className="text-[#343434] text-md font-semibold">$ 5,000</span>
                </div>
                <hr style={{borderTop: "1px dashed lightgray"}}/>
                <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-md font-semibold">Tax</span>
                    <span className="text-[#343434] text-md font-semibold">$ 0</span>
                </div>
                <hr style={{borderTop: "1px dashed lightgray"}}/>
                <div className="flex justify-between items-center">
                    <span className="text-gray-800 text-xl font-semibold">Total</span>
                    <span className="text-red-500 text-xl font-semibold">$ 2,20,000</span>
                </div>
                </div>
            </div>
            <button onClick={() => handleView()} className="flex justify-center items-center w-full max-w-[327px] h-[44px] bg-[#4a3aff] rounded-[15px] mb-5">
              <span  className="text-white font-[Poppins] font-medium text-base leading-6">Send</span>
            </button>
        </div>
      </div>     

      
      {viewing && (
          <div className="fixed inset-0 z-10 w-screen bg-gray-600 bg-opacity-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen p-4">
              <div className="w-72 sm:w-96 h-[235px] bg-white rounded-lg p-1 shadow-md flex flex-col items-center justify-center relative">
                <div className="relative w-full h-[120px]">
                  {/* Main star with checkmark */}
                  <div className="relative w-[91px] h-[91px] mx-auto">
                    <img src="https://dashboard.codeparrot.ai/api/image/Z5CmEAa3lv04CQFy/star-1.png" alt="Main star" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <img src="https://dashboard.codeparrot.ai/api/image/Z5CmEAa3lv04CQFy/vector-5.png" alt="Checkmark" className="w-[43px] h-[31px]" />
                    </div>
                  </div>
                              
                  {/* Decorative stars */}
                  <img src="https://dashboard.codeparrot.ai/api/image/Z5CmEAa3lv04CQFy/star-2.png" alt="Star" className="absolute opacity-40 w-[7px] h-[7px] top-[26px] left-[168px]" />
                  <img src="https://dashboard.codeparrot.ai/api/image/Z5CmEAa3lv04CQFy/star-4.png" alt="Star" className="absolute opacity-40 w-[14px] h-[14px] top-[62px] left-[218px]" />
                  <img src="https://dashboard.codeparrot.ai/api/image/Z5CmEAa3lv04CQFy/star-5.png" alt="Star" className="absolute opacity-40 w-[7px] h-[7px] top-[76px] left-[92px]" />
                  <img src="https://dashboard.codeparrot.ai/api/image/Z5CmEAa3lv04CQFy/star-6.png" alt="Star" className="absolute opacity-40 w-[11px] h-[11px] top-[117px] left-[95px]" />
                  <img src="https://dashboard.codeparrot.ai/api/image/Z5CmEAa3lv04CQFy/star-7.png" alt="Star" className="absolute opacity-40 w-[7px] h-[7px] top-[106px] left-[202px]" />
                  <img src="https://dashboard.codeparrot.ai/api/image/Z5CmEAa3lv04CQFy/star-8.png" alt="Star" className="absolute opacity-40 w-[14px] h-[14px] top-[37px] left-[78px]" />
                </div>
                          
                <p className="font-montserrat font-semibold text-[14px] text-[#222222] text-center max-w-[258px] mt-5 leading-tight">
                  Your post for Wheat with Post Reference ID: POST20241201-12345 has been published successfully!
                </p>
              </div>
            </div>
          </div>      
        )}
    </div>
  );
};

export default YourQuotePage;
