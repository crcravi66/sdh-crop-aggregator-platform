import { Link } from 'react-router-dom';
import NavigationBar from '../../component/signInPage/common/NavigationBar';

function CropDetails() {
  return (
    <div className="flex flex-col w-full items-center h-screen bg-white">

      {/* Navigation Bar */}
      <NavigationBar title="POST20241201-12345" searchIcon />

      {/* Details Section */}
      <div className=" mx-auto flex-col min-w-72 sm:w-96 px-2 flex justify-around ">
        <div className="text-xs mt-1 font-medium text-gray-500 text-center">
          01/12/2024
        </div>

        {/* Image Gallery */}
        <div className="sm:px-2 px-2 mt-4">
          <img src="https://dashboard.codeparrot.ai/api/assets/Z4EzdwIBBLnlud5q" alt="main" className="w-full h-36 object-cover rounded-lg" />
        </div>
        <div className="px-6 my-2 flex gap-4 sm:gap-8">
          <img src="https://3.imimg.com/data3/EP/JB/IMOB-18886571/wheat.jpg" alt="crop" className="w-16 h-16 rounded-xl" />
          <img src="https://5.imimg.com/data5/SELLER/Default/2021/9/PC/MA/NB/5055105/sharbati-wheat-grain.jpeg" alt="crop" className="w-16 h-16 rounded-xl" />
        </div>

        {/* Details Section */}
        <div className="bg-white rounded-lg p-4 shadow">
          <h2 className="text-base font-semibold text-gray-800 mb-6">Details</h2>
          <div className="flex flex-col gap-3">
            <div className="flex  justify-between">
              <span className="text-xs font-semibold text-gray-500">Crop Type</span>
              <span className="text-xs font-semibold text-gray-800">Wheat</span>
            </div>
            <div className="flex  justify-between">
              <span className="text-xs font-semibold text-gray-500">Address</span>
              <span className="text-xs font-semibold  text-gray-800 text-right">
                Ameta, Dist-Barmer
                <br />
                Rajasthan 344001
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs font-semibold text-gray-500">
                Expected Harvest
                <br />
                Date
              </span>
              <span className="text-xs font-semibold text-gray-800">Ready</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs font-semibold text-gray-500">Price</span>
              <span className="text-xs font-semibold text-gray-800">₹ 25/kg</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs font-semibold text-gray-500">Quantity</span>
              <span className="text-xs font-semibold text-gray-800">20 Tons</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs font-semibold text-gray-500">Negotiation Preference</span>
              <span className="text-xs font-semibold text-gray-800">Non-negotiable</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-2">
          <div className="flex-grow">
            <Link to="/home/negotiatelayout">
              <button className=" bg-blue-600 text-white  w-full  font-medium rounded-lg py-2">
                Negotiate
              </button>
            </Link>
          </div>
          <button className="flex-grow bg-blue-600 text-white font-medium rounded-lg py-2 flex items-center justify-center gap-2">
            <img src="https://dashboard.codeparrot.ai/api/image/Z5Hnf3hIZI-ZK8ed/call.png" alt="Call" className="w-4 h-4" />
            Connect
          </button>
        </div>
      </div>
    </div>
  );
}

export default CropDetails;
