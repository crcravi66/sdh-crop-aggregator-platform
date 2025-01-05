import React from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from '../../component/signInPage/common/NavigationBar';

const ForgotOTPPage = () => {
  const handleResend = () => {
    console.log('resend button is working ....')
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
     
      {/* Navigation Bar */}
        <NavigationBar title={"Forgot OTP"}/>

      {/* Main Content */}
      <div className="flex flex-col sm:max-w-96  px-4 sm:px-8 py-4 bg-white shadow rounded-lg mx-4 mt-6">
        <label className="block text-sm font-medium text-gray-500 my-2 sm:my-2">Type a code</label>
        <div className="flex items-center w-full">
          <input
            type="text"
            placeholder="Code"
            className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
          />
          <button  onClick={handleResend} className="px-4 mx-2 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700">
            Resend
          </button>
        </div>
        <div className="my-2 mx-auto p-2">
        <p className="text-sm text-gray-500 mt-4">
          We texted you a code to verify your phone number (+91) 9198829xxx.
        </p>
        <p className="text-sm text-gray-500 mt-1">
        This code will expired 10 minutes after this message. If you don't get a message
        </p>
        </div>
        <Link to={"/signin/changepasswordpage"}>
        {/* <button className="mt-6 mx-auto px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"> */}
        <button className={`w-full h-11 my-2 rounded-lg text-white font-medium text-base  bg-indigo-600 hover:bg-indigo-700`}>

          Change Password
        </button>
        </Link>
      </div>

    </div>
  );
};

export default ForgotOTPPage;
