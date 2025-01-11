import React from 'react';
import NavigationBar from '../../component/signInPage/common/NavigationBar';
import { Link } from 'react-router-dom';
import PrimaryNextButton from '../../component/signInPage/common/PrimaryNextButton';

const PostPreview = ({ 
  cropType = "Wheat",
  address = "Ameta, Dist-Barmer\nRajasthan 344001",
  harvestStatus = "Ready",
  price = "₹ 25/kg",
  quantity = "20 Tons",
  negotiation = "Non-negotiable",
  platformFee = "₹ 5,000",
  tax = "₹ 0",
  total = "₹ 5,00,000",
  onPublish = () => {},
}) => {
  return (
    <div className="w-full  mx-auto bg-white">
     <NavigationBar title="Post Preview" searchIcon={true} />

      {/* Images */}
      <div className="px-6 mt-4">
        <img src="https://dashboard.codeparrot.ai/api/assets/Z4EzdwIBBLnlud5q" alt="main" className="w-full h-[180px] object-cover rounded-lg" />
      </div>
      <div className="px-6 mt-3 flex gap-3">
        <img src="https://dashboard.codeparrot.ai/api/assets/Z4EzdwIBBLnlud5r" alt="crop" className="w-[72px] h-[72px] rounded-lg" />
        <img src="https://dashboard.codeparrot.ai/api/assets/Z4EzdwIBBLnlud5s" alt="crop" className="w-[72px] h-[72px] rounded-lg" />
      </div>

      {/* Details Section */}
      <div className="px-6 mt-6">
        <h4 className="text-[#343434] text-base font-semibold mb-4">Details</h4>
        
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="space-y-3">
            {[  
              { label: "Crop Type", value: cropType },
              { label: "Address", value: address },
              { label: "Expected Harvest\nDate", value: harvestStatus },
              { label: "Price", value: price },
              { label: "Quantity", value: quantity },
              { label: "Negotiation Preference", value: negotiation },
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-start">
                <span className="text-xs text-[#979797] font-semibold whitespace-pre-line">{item.label}</span>
                <span className="text-xs text-[#343434] font-semibold text-right">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 space-y-3">
            <div className="h-px bg-gray-200" />
            <div className="flex justify-between">
              <span className="text-base text-[#979797] font-medium">Platform fee</span>
              <span className="text-base text-[#3629B7] font-semibold">{platformFee}</span>
            </div>
            <div className="h-px bg-gray-200" />
            <div className="flex justify-between">
              <span className="text-base text-[#979797] font-medium">Tax</span>
              <span className="text-base text-[#3629B7] font-semibold">{tax}</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-base text-[#343434] font-semibold">TOTAL</span>
              <span className="text-2xl text-[#FF4267] font-semibold">{total}</span>
            </div>
          </div>
        </div>

        {/* Publish Button */}
        <div>
            <Link>
            <PrimaryNextButton title={'Publish'} />
            </Link>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
