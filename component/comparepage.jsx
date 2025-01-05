import React, { useState } from 'react';
import NavigationBar from '../component/signInPage/common/NavigationBar';
import { Link } from 'react-router-dom';


// Welcome Message Component
const WelcomeMessage = ({ title = 'Welcome Back', subtitle = 'We missed you!' }) => {
  return (
    <div className="text-center">
      <h1 className="font-poppins text-[24px] font-semibold text-[#4A3AFF] leading-[28px]">
        {title}
      </h1>
      <p className="font-poppins text-[16px] text-[#4A3AFF] leading-[20px]">
        {subtitle}
      </p>
    </div>
  );
};

// Profile Placeholder Component
const ProfilePlaceholder = ({ width = 132, height = 132 }) => {
  return (
    <div 
      className="flex items-center justify-center bg-gray-300 rounded-md"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <img
        src="https://dashboard.codeparrot.ai/api/assets/Z11uKps-923gCQd7"
        alt="Profile placeholder"
        className="w-full h-full object-cover rounded-md"
      />
    </div>
  );
};

// Text Field for Aadhar Input
const TextFieldAadhar = ({ placeholder,type , value , onChange }) => {
  return (
    <div className="flex items-center my-4 w-[303px] h-[44px] px-3 py-[11px] gap-[10px] border border-[#cbcbcb] rounded-[15px]">
      <img 
        src="https://dashboard.codeparrot.ai/api/assets/Z11uK5s-923gCQd8"
        alt="credit-card-icon"
        className="w-6 h-6"
      />
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        required
        onChange={onChange}
        className="outline-none flex-1 text-[14px] bg-white font-medium text-[#7d7a7a] placeholder-[#8b8989]"
      />
    </div>
  );
};

// Text Field for Password Input
const TextFieldPassword = ({ placeholder,type , value, showPassword , ontoggleClick, onChange, disabled = false }) => {
  

  return (
    <div className="relative flex items-center w-[303px] h-[44px] px-3 py-[11px] border border-[#cbcbcb] rounded-[15px]">
      <div className="flex items-center gap-3.5">
        <img 
          src="https://dashboard.codeparrot.ai/api/assets/Z11uK5s-923gCQd9"
          alt="email"
          className="w-6 h-6"
        />
        <input
          // type={showPassword ? "text" : "password"}
          type={type}
          value={value}
          onChange={onChange}
          required
          placeholder={placeholder}
          disabled={disabled}
          className="text-[14px] font-medium text-[#8e8e8e] bg-transparent outline-none w-full"
          style={{ lineHeight: "150%" }}
        />
      </div>
      <button 
        onClick={ontoggleClick}
        type="button"
        className="absolute right-3 top-1/2 transform -translate-y-1/2"
      >
        <img
          src="https://dashboard.codeparrot.ai/api/assets/Z11uK5s-923gCQd-"
          alt={showPassword ? "hide password" : "show password"}
          className="w-5 h-5"
        />
      </button>
    </div>
  );
};

// Forgot Password Link
const ForgotPasswordLink = ({ text = "Forgot your password ?", href = "#" }) => {
  return (
    <Link to={'signin/forgotpassword'}>
    <a
      href={href}
      className="text-[#4A3AFF] font-medium text-xs leading-4 my-4 font-poppins hover:underline"
      style={{
        display: 'inline-block',
        width: '141px',
        height: '16px',
        textAlign: 'center',
      }}
    >
      {text}
    </a>
    </Link>
  );
};

// Sign In Button
const SignInButton = ({ onClick,  }) => {
  return (
    <button
      onClick={onClick}
      className="w-[327px] h-[44px] bg-[#4660b6] rounded-full flex items-center justify-center hover:bg-sky-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
    >
      <span className="font-poppins text-[#FFFFFF] text-sm font-medium leading-6">
        Sign in
      </span>
    </button>
  );
};

// Sign Up Link
const SignUpLink = ({ text , onChange }) => {
  return (
    <Link to={"signin/signup"}>
    <a 
      onClick={onChange}
      className="font-poppins text-[#4A3AFF] text-xs font-semibold hover:underline cursor-pointer"
    >
      {text}
    </a>
    </Link>
  );
};

// Sign In Page
const SignInPage = () => {
  const [aadhar, setAadhar] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleAadharChange = (e)=>{
    setAadhar(e.target.value)
  }
  const handlePasswordChange = (e)=>{
    setPassword(e.target.value)
  }

// sign in handle function
  const handleSignIn=()=>{
    alert("signin completed")
  }

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-white ">
    <>
    <NavigationBar />
      <WelcomeMessage subtitle="Hello there, sign in to continue" />
      <ProfilePlaceholder className="my-4" />
      <form onSubmit={handleSignIn} className="flex flex-col items-center justify-between">
        <TextFieldAadhar 
         className="mb-4" 
         value={aadhar} 
         type="number" 
         placeholder = "Aadhar" 
         onChange={handleAadharChange}
        />
        <TextFieldPassword className="mb-2" 
          value={password} 
          type='text' 
          placeholder = {"password"} 
          onChange={handlePasswordChange} 
          showPassword={showPassword} 
          ontoggleClick={togglePasswordVisibility} 
        />
        <ForgotPasswordLink className=" mb-4" />
        <SignInButton className="mb-4" />
      </form>
      <div className="flex items-center justify-center mt-4">
        <span className="text-xs font-poppins text-[#8e8e8e] mr-1">Don't have an account?</span>
        <SignUpLink text = 'Sign Up' />
      </div>
      </> 
 </div>
  );
};

export default SignInPage;