import { Link } from 'react-router-dom';
import NavigationBar from '../../component/signInPage/common/NavigationBar';

function NegotiateLayout() {
  return (
    <div className="flex flex-col w-full min-h-screen">

      {/* Navigation Bar */}
      <NavigationBar title="POST20241201-12345" searchIcon />

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
            {['https://3.imimg.com/data3/EP/JB/IMOB-18886571/wheat.jpg', 'https://5.imimg.com/data5/SELLER/Default/2021/9/PC/MA/NB/5055105/sharbati-wheat-grain.jpeg', 'https://5.imimg.com/data5/SELLER/Default/2023/5/305118245/BJ/IR/KG/158799191/milling-wheat-500x500.jpg'].map((thumb, index) => (
              <div key={index} className="w-16 h-16">
                <img
                  src={thumb}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover rounded-[16px]"
                />
              </div>
            ))}
            <div className="w-16 h-16 bg-[#c4c4c4] rounded-[16px] flex items-center justify-center">
              <span className="text-white font-semibold text-xs">+3</span>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="flex-none w-11/12 max-w-[327px] mt-6">
          <h2 className="text-[#343434] text-lg font-semibold mb-4">Details</h2>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <div className="space-y-3">
              {[
                { label: 'Crop Type', value: 'Wheat' },
                { label: 'Address', value: 'Ameta, Dist-Barmer\nRajasthan 344001' },
                { label: 'Expected Harvest Date', value: 'Ready' },
                { label: 'Price', value: '₹ 25/kg' },
                { label: 'Quantity', value: '20 Tons' },
                { label: 'Negotiation Preference', value: 'Non-negotiable' }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-500 text-xs font-semibold">{item.label}</span>
                  <span className="text-[#343434] text-xs font-semibold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Input Fields and Primary Button */}
        <div className="flex-none w-11/12 max-w-[327px] my-6">
          <div className="w-full flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter Quantity"
              className="w-full h-11 px-3 rounded-xl border border-[#cbcbcb] text-gray-800 font-semibold font-[Poppins]  text-sm focus:outline-none"
            />
            <div className="w-full">
              <label className="block text-gray-600 font-[Poppins] font-semibold text-xs mb-1">
                Enter your quote
              </label>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Enter Amount"
                  className="w-full h-11 px-3 rounded-xl border border-[#cbcbcb] text-gray-800 font-[Poppins] font-semibold text-sm focus:outline-none"
                />
                <div className="w-3/5 mx-2 h-11">
                  <Link to="/home/yourquotepage">
                    <button
                      className="w-full h-full bg-[#4a3aff] rounded-[15px] text-white font-[Poppins] font-medium text-base"
                    >
                      Next
                    </button>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default NegotiateLayout;
