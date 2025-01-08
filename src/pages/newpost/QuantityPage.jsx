import React, { useState } from 'react';
import NavigationBar from '../../component/signInPage/common/NavigationBar';

const QuantityPage = ({ onAmountSelect,  defaultAmount }) => {
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
    <div className="h-screen  flex flex-col justify- items-center mx-auto bg-white">
      {/* Header */}
      <NavigationBar title={'New Post'} />  

      <div className="flex flex-col py-4 mt-10 px-2 my-10 justify-between bg-slate-200 w-full sm:w-7/12">
        {/* <div className="flex flex-col gap-[13px]"> */}
          <h3 className="text-[#979797] text-sm p-2 font-semibold font-poppins leading-4">Choose amount</h3>

          <div className="custom-amount w-full h-10 my-4 px-4 border-dark-50  rounded-lg  shadow-md  flex items-center justify-center">
            <span className="text-[#343434] text-base font-semibold font-poppins leading-6">
              ₹ {selectedAmount || '__'} /kg
            </span>
          </div>

          <div className="grid  grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-8 px-4 mt-6">
          {amounts.map((amount) => (
              <button
                key={amount.value}
                onClick={() => handleAmountSelect(amount.value)}
                className={`amount-option  h-14 rounded-lg  shadow-md flex items-center justify-center
                  ${selectedAmount === amount.value ? 'selected' : ''}`}
              >
                <span className={`text-base font-semibold font-poppins leading-6
                  ${selectedAmount === amount.value ? 'text-[#343434]' : 'text-[#989898]'}`}>
                  {amount.display}
                </span>
              </button>
            ))}
          </div>
        {/* </div> */}

        <div className="flex flex-col gap-4 my-6 ">
          <h3 className="text-[#979797] text-sm my-3 font-semibold font-poppins leading-4">Price preference</h3>
          <div className=" flex w-4/5 px-1 py-1 rounded-full border-dark-80 shadow-md">
              <button
                onClick={() => handlePreferenceSelect('negotiable')}
                className='w-full h-10  flex items-center justify-center'       
              >
                <span className="text-sm font-medium font-poppins leading-6 text-[#8e8e8e]">
                  Negotiable
                </span>
              </button>
                <button
                  onClick={() => handlePreferenceSelect}
                  className=' w-5/6 h-10 px-2 border-dark-50 bg-blue-600 mx-1 my-auto shadow-md rounded-full flex items-center justify-center'
                >
                  <span className="text-sm font-medium font-poppins leading-6 text-white">
                    Non-negotiable
                  </span>
                </button>
              </div>  
        </div>
      </div>
    </div>
  );
};

export default QuantityPage;


// import React, { useState } from 'react';
// import NavigationBar from '../../component/signInPage/common/NavigationBar';

// const QuantityPage =({ onAmountSelect, onPreferenceSelect, defaultAmount, defaultPreference }) => {
//   const [selectedAmount, setSelectedAmount] = useState(defaultAmount);
//   const [selectedPreference, setSelectedPreference] = useState(defaultPreference);

//   const amounts = [
//     { value: '5', display: '₹ 5/kg' },
//     { value: '10', display: '₹ 10/kg' },
//     { value: '15', display: '₹ 15/kg' },
//     { value: '20', display: '₹ 20/kg' },
//     { value: '25', display: '₹ 25/kg' },
//     { value: '30', display: '₹ 30/kg' }
//   ];

//   const handleAmountSelect = (amount) => {
//     setSelectedAmount(amount);
//     onAmountSelect?.(amount);
//   };

//   const handlePreferenceSelect = (preference) => {
//     setSelectedPreference(preference);
//     onPreferenceSelect?.(preference);
//   };


//   return (
//     <div className="h-screen w-full flex flex-col items-center mx-auto bg-white">
//       {/* Header */}
//       <NavigationBar title={'New Post'} />  

//       <div className="flex flex-col gap-6 w-5/12">
//       <div className="flex flex-col gap-[13px]">
//         <h3 className="text-[#979797] text-xs font-semibold font-poppins leading-4">Choose amount</h3>
        
//         <div className="custom-amount w-[326px] h-[60px] bg-white rounded flex items-center justify-center">
//           <span className="text-[#343434] text-base font-semibold font-poppins leading-6">
//             ₹ __ . __ /kg
//           </span>
//         </div>

//         <div className="grid grid-cols-3 gap-[13px]">
//           {amounts.map((amount) => (
//             <button
//               key={amount.value}
//               onClick={() => handleAmountSelect(amount.value)}
//               className={`amount-option w-[100px] h-[60px] rounded flex items-center justify-center
//                 ${selectedAmount === amount.value ? 'selected' : ''}`}
//             >
//               <span className={`text-base font-semibold font-poppins leading-6
//                 ${selectedAmount === amount.value ? 'text-[#343434]' : 'text-[#989898]'}`}>
//                 {amount.display}
//               </span>
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="flex flex-col gap-[13px]">
//         <h3 className="text-[#979797] text-xs font-semibold font-poppins leading-4">Price preference</h3>
//         <div className="relative w-[326px] h-[36px]">
//           <div className="absolute inset-0 flex items-center">
//             <button
//               onClick={() => handlePreferenceSelect('negotiable')}
//               className={`w-[300px] h-[36px] rounded-[18px] flex items-center justify-center
//                 ${selectedPreference === 'negotiable' ? 'bg-white' : 'bg-transparent'}`}
//             >
//               <span className="text-[14px] font-medium font-poppins leading-6 text-[#8e8e8e]">
//                 Negotiable
//               </span>
//             </button>
//             <button
//               onClick={() => handlePreferenceSelect('non-negotiable')}
//               className={`absolute right-0 h-[30px] px-[12px] rounded-[15px] flex items-center justify-center
//                 ${selectedPreference === 'non-negotiable' ? 'bg-[#4a3aff]' : 'bg-transparent'}`}
//             >
//               <span className={`text-[14px] font-medium font-poppins leading-6
//                 ${selectedPreference === 'non-negotiable' ? 'text-white' : 'text-[#8e8e8e]'}`}>
//                 Non-negotiable
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
 
     
//     </div>
//   );
// };

// QuantityPage.defaultProps = {
//   onAmountSelect: () => {},
//   onPreferenceSelect: () => {},
//   defaultAmount: null,
//   defaultPreference: 'negotiable'
// };

// export default QuantityPage;
