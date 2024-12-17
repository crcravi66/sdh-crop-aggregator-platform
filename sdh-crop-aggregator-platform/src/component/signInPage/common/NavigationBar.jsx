import React from "react";

// Navigation Bar Component
const NavigationBar = ({ title = "Sign in", onBack, onSearch }) => {
    return (
      <nav className="w-full  h-[53px] flex items-center justify-between  px-4 bg-white shadow-md" >
        <button 
          onClick={onBack}
          className="flex items-center justify-center"
        >
          <img 
            src="https://dashboard.codeparrot.ai/api/assets/Z11uKps-923gCQd5" 
            alt="Back"
            className="w-4 h-4"
          />
        </button>
        <h3 className="font-poppins font-semibold text-[20px] leading-[28px] text-black">
          {title}
        </h3>
        { title === "Forgot password" ? <span></span> :( <button 
            onClick={onSearch}
            className="flex items-center justify-center"
          >
            <img 
              src="https://dashboard.codeparrot.ai/api/assets/Z11uKps-923gCQd6" 
              alt="Search"
              className="w-5 h-5"
            />
          </button>
        )}
      </nav>
    );
  };

export default  NavigationBar;