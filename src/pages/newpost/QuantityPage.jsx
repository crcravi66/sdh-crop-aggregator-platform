import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from '../../component/signInPage/common/NavigationBar';
import PrimaryNextButton from '../../component/signInPage/common/PrimaryNextButton';

function QuantityPage({ onAmountSelect, defaultAmount }) {
  const [selectedAmount, setSelectedAmount] = useState(defaultAmount || null);

  const amounts = [
    { value: '5', display: '₹ 5/kg' },
    { value: '10', display: '₹ 10/kg' },
    { value: '15', display: '₹ 15/kg' },
    { value: '20', display: '₹ 20/kg' },
    { value: '25', display: '₹ 25/kg' },
    { value: '30', display: '₹ 30/kg' }
  ];

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    onAmountSelect?.(amount);
  };

  const handlePreferenceSelect = () => {

  };

  return (
    <div className="bg-white h-screen  items-center flex flex-col">
      {/* Header */}
      <NavigationBar title="New Post" />

      <div className=" mx-auto flex-col min-w-72 sm:w-96 px-2 flex justify-around ">
        <h3 className="text-[#979797] text-sm p-2 font-semibold font-poppins leading-4">Choose amount</h3>

        <div className="custom-amount w-full h-10 my-4 px-4  border-dark-50  rounded-lg  shadow-md  flex items-center justify-center">
          <span className="text-[#343434] text-base font-semibold font-poppins leading-6">
            ₹
            {' '}
            {selectedAmount || '__'}
            {' '}
            /kg
          </span>
        </div>

        <div className="grid  grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-8 px-4 mt-6">
          {amounts.map(amount => (
            <button
              key={amount.value}
              onClick={() => handleAmountSelect(amount.value)}
              className={`amount-option  h-14 rounded-lg  shadow-md flex items-center justify-center
                  ${selectedAmount === amount.value ? 'selected' : ''}`}
            >
              <span className={`text-base font-semibold font-poppins leading-6
                  ${selectedAmount === amount.value ? 'text-[#343434]' : 'text-[#989898]'}`}
              >
                {amount.display}
              </span>
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-4 my-3 sm:px-2 ">
          <h3 className="text-[#979797] text-sm my-3 font-semibold font-poppins leading-4">Price preference</h3>
          <div className=" flex  px-1 py-1 rounded-full border-dark-80 shadow-md">
            <button
              onClick={() => handlePreferenceSelect('negotiable')}
              className="w-full h-10  flex items-center justify-center"
            >
              <span className="text-sm font-medium font-poppins leading-6 text-[#8e8e8e]">
                Negotiable
              </span>
            </button>
            <button
              onClick={() => handlePreferenceSelect}
              className=" w-5/6 h-10 px-6 border-dark-50 bg-blue-600 mx-0 my-auto shadow-md rounded-full flex items-center justify-center"
            >
              <span className="text-sm font-medium font-poppins leading-6 text-white">
                Non-negotiable
              </span>
            </button>
          </div>
        </div>
        {/* Next Button */}
        <div className="px-2 sm:px-2 my-4 sm:my-6 ">
          <Link to="/newpost/locationselector">
            <PrimaryNextButton title="Next" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default QuantityPage;
