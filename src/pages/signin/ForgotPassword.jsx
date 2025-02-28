import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from '../../component/signInPage/common/NavigationBar';

function AadharInputCard(onSubmit) {
  const [aadharNumber, setAadharNumber] = useState('');
  const handleInputChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    if (value.length > 12)
      value = value.slice(0, 12); // Limit to 12 digits

    // Format with dashes
    if (value.length > 0) {
      value = value.match(/.{1,4}/g).join(' - '); // Chunk in groups of 4
    }

    setAadharNumber(value); // Update state
  };

  const handleSubmit = () => {
    if (aadharNumber.length === 14) { // Ensure the Aadhar number is of correct length
      onSubmit(aadharNumber); // Pass the Aadhar number to the parent
    }
  };

  return (
    <div className="w-full h-full p-6 m-auto bg-white rounded-lg shadow-lg">
      <form>
        <div className="flex flex-col gap-4">
          <span className="text-gray-500 text-xs font-semibold">Type your Aadhar number</span>
          <div className="relative">
            <input
              type="text"
              value={aadharNumber}
              onChange={handleInputChange}
              required
              placeholder="4770 - xxxx - xxxx"
              className="w-full h-11 px-3 rounded-lg border border-gray-300 text-gray-800 text-sm font-semibold focus:outline-none focus:border-blue-500"
            />
          </div>

          <p className="text-gray-800 text-sm font-medium leading-relaxed">
            We texted you a code to verify your Aadhar number
          </p>
          <Link to="/signin/forgototppage">
            <button
              onClick={handleSubmit}
              className="w-full h-11 rounded-lg text-white font-medium text-base  bg-indigo-600 hover:bg-indigo-700"
            >
              Send
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

function ForgotPassword() {
  const handleSubmit = (aadharNumber) => {
    console.log('Aadhar number submitted:', aadharNumber);
    // You can add additional logic to handle Aadhar number submission here
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen">
      <NavigationBar title="Forgot Password" />
      <div className="mt-6">
        <AadharInputCard onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default ForgotPassword;
