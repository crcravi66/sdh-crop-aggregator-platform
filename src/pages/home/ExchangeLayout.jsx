import NavigationBar from '../../component/signInPage/common/NavigationBar';
import PrimaryNextButton from '../../component/signInPage/common/PrimaryNextButton';

function ExchangeLayout() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-white">

      {/* Navigation Bar */}
      <NavigationBar title="Exchange" searchIcon={false} />

      {/* Illustration */}
      <div className="flex justify-center items-center w-full max-w-sm mt-1 h-52">
        <img
          src="https://dashboard.codeparrot.ai/api/image/Z5Ix5vA8XwfbJP9G/illustra.png"
          alt="Exchange illustration"
          className="w-full h-full "
        />
      </div>

      {/* Exchange Card */}
      <div className="bg-white rounded-2xl p-6 shadow-md w-full max-w-md">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-xs text-gray-500">From</label>
            <div className="flex items-center bg-white border border-gray-300 rounded-lg p-2 h-11">
              <input type="number" placeholder="Amount" className="flex-1 border-none outline-none text-sm text-gray-800" />
              <div className="w-px h-8 bg-gray-300 mx-3"></div>
              <span className="font-medium text-base text-gray-800 mr-3">KG</span>
              <img src="https://dashboard.codeparrot.ai/api/image/Z5Ix5vA8XwfbJP9G/arrow.png" alt="arrow" className="w-3 h-6" />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="flex gap-3">
              <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/228BE6/long-arrow-down.png" alt="long-arrow-down" />
              {' '}
              {/* <img src="https://dashboard.codeparrot.ai/api/image/Z5Ix5vA8XwfbJP9G/color-bu.png" alt="arrow down" className="w-6 h-6" /> */}
              <img width="40" height="28" src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/FA5252/external-up-arrow-arrows-tanah-basah-basic-outline-tanah-basah.png" alt="external-up-arrow-arrows-tanah-basah-basic-outline-tanah-basah" />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-xs text-gray-500">To</label>
            <div className="flex items-center bg-white border border-gray-300 rounded-lg p-2 h-11">
              <input type="text" placeholder="Amount" className="flex-1 border-none outline-none text-sm text-gray-800" />
              <div className="w-px h-8 bg-gray-300 mx-3"></div>
              <span className="font-medium text-base text-gray-800 mr-3">LBS</span>
              <img src="https://dashboard.codeparrot.ai/api/image/Z5Ix5vA8XwfbJP9G/arrow-2.png" alt="arrow" className="w-3 h-6" />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="font-medium text-sm text-blue-600">Exchange rate</span>
            <span className="font-medium text-sm text-gray-800">1 KG = 2.20 LBS</span>
          </div>

          <PrimaryNextButton title="Exchange" />
        </div>
      </div>
    </div>
  );
}

export default ExchangeLayout;
