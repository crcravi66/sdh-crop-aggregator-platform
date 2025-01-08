import React from 'react';

const SplashScreen = ({ statusBarTime = "9:41" }) => {
  return (
    <div className="flex flex-col justify-between px-2 h-screen  bg-white">
      {/* Status Bar */}
      <div className="flex items-center justify-between text-sm py-1 text-gray-700">
        <div className="flex items-center space-x-1">
          <div className="time">{statusBarTime}</div>
        </div>
        <div className="flex space-x-3">
          <img 
            src="https://dashboard.codeparrot.ai/api/assets/Z1wxkq_uyZiCJNb3" 
            alt="Cellular"
            className="w-4 h-2"
          />
          <img 
            src="https://dashboard.codeparrot.ai/api/assets/Z1wxkq_uyZiCJNb4" 
            alt="Wifi"
            className="w-3.5 h-2.5"
          />
          <img 
            src="https://dashboard.codeparrot.ai/api/assets/Z1wxkq_uyZiCJNb5" 
            alt="Battery"
            className="w-5 h-2.5"
          />
        </div>
      </div>

      {/* Logo */}
      <div className="flex justify-center items-center flex-grow">
        <img 
          src="https://dashboard.codeparrot.ai/api/assets/Z1wxkq_uyZiCJNb6" 
          alt="Logo"
          className="w-44 h-44 sm:w-56 sm:h-56"
        />
      </div>

      {/* Home Indicator */}
      <div className="flex justify-center pb-1 sm:pb-1">
        <img 
          src="https://dashboard.codeparrot.ai/api/assets/Z1wxkq_uyZiCJNb7" 
          alt="Home Indicator"
          className="w-40% h-3 "
        />
      </div>
    </div>
  );
};

export default SplashScreen;



