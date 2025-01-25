import NavigationBar from '../../component/signInPage/common/NavigationBar';
import PrimaryNextButton from '../../component/signInPage/common/PrimaryNextButton';

function InternetBill() {
  // Define the bill data as an array of objects
  const billInfo = [
    { label: 'Name', value: 'Jackson Maine' },
    { label: 'Address', value: '403 East 4th Street, Santa Ana' },
    { label: 'Phone number', value: '+8424599721' },
    { label: 'Code', value: '#2343543' },
    { label: 'From', value: '01/10/2019' },
    { label: 'To', value: '01/11/2019' }
  ];

  return (
    <div className="    min-h-screen bg-white">
      <NavigationBar title="Internet Bill" />

      <div className="flex items-center  flex-col mx-auto max-w-md  flex-grow mt-1 mb-4 p-4">
        <div className=" p-4 w-full bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-semibold leading-6 mt-1 mb-4 text-gray-800">All the Bills</h2>
          <div className="space-y-3 ">
            {billInfo.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-gray-500 text-xs font-semibold">{item.label}</span>
                <span className="text-[#343434] w-28 text-right text-xs font-semibold">{item.value}</span>
              </div>
            ))}
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-lg font-semibold">Internet fee</span>
              <span className="text-[#343434] text-md font-semibold">$ 50</span>
            </div>
            <hr style={{ borderTop: '1px dashed lightgray' }} />
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-md font-semibold">Tax</span>
              <span className="text-[#343434] text-md font-semibold">$ 10</span>
            </div>
            <hr style={{ borderTop: '1px dashed lightgray' }} />
            <div className="flex justify-between py-2 items-center">
              <span className="text-gray-800 text-xl  font-semibold">Total</span>
              <span className="text-red-500 text-xl font-semibold">$ 60</span>
            </div>
          </div>
        </div>

        {/* Card Input */}
        <div className="flex items-center w-full mx-1 h-11 px-4 mt-5 border border-gray-300 rounded-2xl">
          <input
            type="text"
            className="flex-grow text-sm font-medium text-gray-800 bg-white outline-none"
            placeholder="4411 0000 1234"
            defaultValue="4411 0000 1234"
          />
          <img
            src="https://dashboard.codeparrot.ai/api/image/Z5O4JvA8XwfbJQCn/icons-do.png"
            alt="dropdown"
            className="w-4 h-4"
          />
        </div>

        {/* OTP Input */}
        <div className=" items-center justify-between w-full mt-4 mb-10">
          <span className="text-xs font-semibold mx-2   text-gray-500">Get OTP to verify transaction</span>
          <div className="flex flex-row w-full h-11 mt-1 align-middle full">
            <input
              type="text"
              className="w-full h-full  bg-white px-4 mt-1 mx-1 border border-gray-300 rounded-2xl outline-none"
              placeholder="Enter OTP"
              defaultValue="23798"
            />
            <button
              type="button"
              className=" w-3/5 h-full py-auto bg-[#4a3aff] mt-1 mx-1 rounded-2xl text-white  "
            >
              Get OTP
            </button>
          </div>
        </div>

        {/* Pay Bill Button */}
        <PrimaryNextButton title="Pay the bill" />
      </div>
    </div>
  );
}

export default InternetBill;
