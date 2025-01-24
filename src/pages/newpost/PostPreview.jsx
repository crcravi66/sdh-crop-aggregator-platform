import { useState } from 'react';
import NavigationBar from '../../component/signInPage/common/NavigationBar';

function PostPreview({
  cropType = 'Wheat',
  address = 'Ameta, Dist-Barmer\nRajasthan 344001',
  harvestStatus = 'Ready',
  price = '₹ 25/kg',
  quantity = '20 Tons',
  negotiation = 'Non-negotiable',
  platformFee = '₹ 5,000',
  tax = '₹ 0',
  total = '₹ 5,00,000',
  onPublish = () => {}
}) {
  const [viewing, setViewing] = useState(null);

  const handleView = () => setViewing(true);

  return (
    <div className="w-full  mx-auto bg-white">
      <NavigationBar title="Post Preview" searchIcon />
      <div className=" mx-auto flex-col max-w-md px-2  flex justify-around ">

        {/* Images */}
        <div className="sm:px-2 px-2 mt-4">
          <img src="https://dashboard.codeparrot.ai/api/assets/Z4EzdwIBBLnlud5q" alt="main" className="w-full h-40 object-cover rounded-lg" />
        </div>
        <div className="px-4 mt-4 flex gap-4 sm:gap-8">
          <img src="https://3.imimg.com/data3/EP/JB/IMOB-18886571/wheat.jpg" alt="crop" className="w-14 h-14 rounded-xl" />
          <img src="https://5.imimg.com/data5/SELLER/Default/2021/9/PC/MA/NB/5055105/sharbati-wheat-grain.jpeg" alt="crop" className="w-14 h-14 rounded-xl" />
        </div>

        {/* Details Section */}
        <div className="px-6 mt-6">
          <h4 className="text-[#343434] text-base font-semibold mx-3 mb-4">Details</h4>

          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="space-y-3">
              {[
                { label: 'Crop Type', value: cropType },
                { label: 'Address', value: address },
                { label: 'Expected Harvest\nDate', value: harvestStatus },
                { label: 'Price', value: price },
                { label: 'Quantity', value: quantity },
                { label: 'Negotiation Preference', value: negotiation }
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
            <button onClick={() => handleView()} className="flex justify-center items-center w-full  h-[44px] bg-[#4a3aff] rounded-[15px] mb-5">
              <span className="text-white font-[Poppins] font-medium text-base leading-6">Publish</span>
            </button>
          </div>
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
}

export default PostPreview;
