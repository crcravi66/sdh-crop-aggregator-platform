import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from '../component/signInPage/common/NavigationBar';
import PrimarySignInButton from '../component/signInPage/common/primarySignInButton';

// Welcome Message Component
function WelcomeMessage({ title = 'Welcome Back' }) {
  return (
    <div className=" flex mt-4 h-6">
      <h1 className="text-[24px] font-semibold text-[#4A3AFF] leading-[28px] font-poppins">
        {title}
      </h1>
    </div>
  );
}

// Profile Placeholder Component
function ProfilePlaceholder({ width = 132, height = 132 }) {
  return (
    <div
      className="flex items-center justify-center mx-auto my-2 bg-gray-300 rounded-md"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <img
        src="https://dashboard.codeparrot.ai/api/assets/Z11uKps-923gCQd7"
        alt="Profile placeholder"
        className="w-full h-full object-cover rounded-md"
      />
    </div>
  );
}

// Text Field for Aadhar Input
function TextFieldAadhar({ placeholder, type, value, onChange }) {
  return (
    <div className="flex items-center my-4 w-full h-12 px-3 py-[11px] gap-[10px] border border-[#cbcbcb] rounded-[15px]">
      <img
        src="https://img.icons8.com/?size=100&id=Nmb9tuTRN32z&format=png&color=000000"
        alt="credit-card-icon"
        className="w-6 h-6"
      />
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        required
        onChange={onChange}
        className="outline-none w-full flex-1 text-[14px] bg-white font-medium text-[#7d7a7a] placeholder-[#8b8989]"
      />
    </div>
  );
}

// Text Field for Password Input
function TextFieldPassword({ placeholder, type, value, showPassword, ontoggleClick, onChange, disabled = false }) {
  return (
    <div className="relative flex items-center w-full h-12 px-3 py-[11px] border border-[#cbcbcb] rounded-[15px]">
      <div className="flex items-center w-full gap-3.5">
        <img
          src="https://img.icons8.com/fluency-systems-filled/50/email.png"
          alt="email"
          className="w-6 h-6 brightness-50 contrast-50"
        />
        <input
          // type={showPassword ? "text" : "password"}
          type={type}
          value={value}
          onChange={onChange}
          required
          placeholder={placeholder}
          disabled={disabled}
          className="text-[14px] w-full font-medium text-[#8e8e8e] bg-transparent outline-none "
          style={{ lineHeight: '150%' }}
        />
        <button
          onClick={ontoggleClick}
          type="button"
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
        >
          <img
            src="https://dashboard.codeparrot.ai/api/assets/Z11uK5s-923gCQd-"
            alt={showPassword ? 'hide password' : 'show password'}
            className="w-5 h-5"
          />
        </button>
      </div>
    </div>
  );
}

// Forgot Password Link
function ForgotPasswordLink() {
  return (
    <div className=" text-right mt-3 mb-8 w-full">
      <Link to="signin/forgotpassword">
        <span
          className="text-[#4A3AFF] w-full font-medium text-sm leading-4 my-5 font-poppins "
        >
          Forgot your password ?
        </span>
      </Link>
    </div>
  );
}

// Sign Up Link
function SignUpLink({ text, onChange }) {
  return (
    <div className="my-4">
      <Link to="signin/signup">
        <a
          href="#"
          onClick={onChange}
          className="font-poppins text-[#4A3AFF] text-xs font-semibold hover:underline cursor-pointer"
        >
          {text}
        </a>
      </Link>
    </div>
  );
}

// Sign In Page
function SignInPage() {
  const [aadhar, setAadhar] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleAadharChange = (e) => {
    setAadhar(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSignup = () => {
    console.log('handle signup');
  };

  // sign in handle function
  const handleSignIn = () => {
    console.log('signin completed');
  };

  return (

    <div className="min-h-screen bg-white ">
      <NavigationBar title="Sign in" searchIcon="true" />
      <div className="mx-auto max-w-sm p-2 my-2">
        <WelcomeMessage title="Welcome Back" subtitle="Hello there, sign in to continue" />
        <p className="text-sm py-2 text-gray-500">Hello there, sign in to continue</p>
        <ProfilePlaceholder className="my-4" />
        <form onSubmit={handleSignIn} className="flex flex-col items-center justify-between">
          <TextFieldAadhar
            className="mb-4"
            value={aadhar}
            type="number"
            placeholder="Aadhar"
            onChange={handleAadharChange}
          />
          <TextFieldPassword
            className="mb-2"
            value={password}
            type="text"
            placeholder="password"
            onChange={handlePasswordChange}
            showPassword={showPassword}
            ontoggleClick={togglePasswordVisibility}
          />
          <ForgotPasswordLink />
          <PrimarySignInButton text="Sign in" />
        </form>
        <div className="flex items-center justify-center mt-4">
          <span className="text-xs font-poppins text-[#8e8e8e] mr-1"> Don't have an account?</span>
          <SignUpLink text="Sign Up" onChange={handleSignup} />
        </div>
      </div>
    </div>

  );
}

export default SignInPage;
