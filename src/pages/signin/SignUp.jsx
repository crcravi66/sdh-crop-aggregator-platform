import React, { useState } from 'react';
import NavigationBar from '../../component/signInPage/common/NavigationBar';
import TextField from '../../component/signInPage/common/TextField';
import { Link } from 'react-router-dom';


const WelcomeMessage = ({ title = 'Welcome Back' }) => {
  return (
    <div className="welcome-message flex justify-center items-center h-[28px]">
      <h1 className="text-[24px] font-semibold text-[#4A3AFF] leading-[28px] font-poppins">
        {title}
      </h1>
    </div>
  );
};

const ProfilePlaceholder = ({ width = 132, height = 132, className = '' }) => {
  return (
    <div className={`flex items-center justify-center bg-gray-300 rounded-full ${className}`} style={{ width: `${width}px`, height: `${height}px` }}>
      <img
        src={`https://dashboard.codeparrot.ai/api/assets/Z11zmxvKm34NfumB`}
        alt="Profile placeholder"
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  );
};



const SignUpButton = ({ children = 'Sign up', className = '' }) => {
  return (
    <button
      // disabled={disabled}
      className={`w-[327px] h-[44px] bg-[#3f3fbe] rounded-full flex items-center justify-center hover:bg-sky-600 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      <span className="text-[#FFFFFF] font-[Poppins] font-medium text-[16px] leading-[24px]">
        {children}
      </span>
    </button>
  );
};

const TermsAndConditions = ({ text = "By creating an account you agree to our ", linkText = "Terms and Conditions", checked, onChange }) => {
  return (
    <div className="flex items-center my-4 gap-2 w-[280px] h-[40px]">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-6 h-6 cursor-pointer"
      />
      <p className="text-xs font-lato font-semibold text-black">
        {text}
        <a href="#" className="text-blue-600">{linkText}</a>
      </p>
    </div>
  );
};

const FooterLink = ({ hasAccount, signInText }) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <span className="text-[#343434] text-sm my-2 font-normal font-['Poppins'] leading-4">{hasAccount}</span>
      <Link to={"/"}>
      <a href="#" className="text-[#4A3AFF] text-xs font-semibold font-['Poppins'] leading-4">{signInText}</a>
      </Link>
    </div>
  );
};

FooterLink.defaultProps = {
  hasAccount: "Have an account ?",
  signInText: "Sign In"
};

// SignUpPage Component with Validation
const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted ]= useState(false)

  // const [formData, setFormData] = useState({
  //   name: '',
  //   aadhar: '',
  //   email: '',
  //   password: '',
  //   termsAccepted: false,
  // });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // // Handle form field changes
  // const handleChange = (e) => {
  //   // console.log(target)
  //   // console.log(target.name)
  //   // console.log(target.value)
  //   const { name, value, type, checked } = e.target;
  //   setFormData((prevFormData)=>({
  //     ...prevFormData,
  //     [name]: type === 'checkbox' ? checked : value,
  //   }));
  // };

  const handleNameChange =(e)=>{
    console.log(e.target.value)
    setName(e.target.value)
  } 
  const handleEmailChange =(e)=>{
    console.log(e.target.value)
    setEmail(e.target.value)
  } 
  const handleAadharChange =(e)=>{
    console.log(e.target.value)
    setAadhar(e.target.value)
  } 
  const handlePasswordChange =(e)=>{
    console.log(e.target.value)
    setPassword(e.target.value)
  } 
  const handleCheckBoxChange =(e)=>{
    setTermsAccepted(e.target.checked)
  } 

  // Handle form submission
  const handleSubmit = (e) => {
    // e.preventDefault();
    alert("submitted...")
  }

  //   // Validate fields
  //   const validationErrors = validate(formData);
  //   setErrors(validationErrors);

  //   // If there are no errors, submit the form
  //   if (Object.keys(validationErrors).length === 0) {
  //     setIsSubmitting(true);
  //     // Perform submission logic (e.g., send data to API)
  //   }
  // };

  // Validation function
  // const validate = (data) => {
  //   const errors = {};

  //   if (!data.name) errors.name = 'Name is required';
  //   if (!data.aadhar) errors.aadhar = 'Aadhar is required';
  //   if (!data.email) {
  //     errors.email = 'Email is required';
  //   } else if (!/\S+@\S+\.\S+/.test(data.email)) {
  //     errors.email = 'Email is invalid';
  //   }
  //   if (!data.password) errors.password = 'Password is required';
  //   if (!data.termsAccepted) errors.termsAccepted = 'You must agree to the terms and conditions';

  //   return errors;
  // };

  return (
    <div className="flex flex-col justify-between items-center gap-4 p-1">
      <NavigationBar title={"signin"} />
      <WelcomeMessage />
      <p className="text-sm text-gray-500">Hello there, sign in to continue</p>
      <ProfilePlaceholder />

      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          type="text"
          icon="https://img.icons8.com/fluency-systems-filled/50/user-male-circle.png"
          value={name}
          onChange={handleNameChange}
          error={errors.name}
        />
        <TextField
          label="Aadhar"
          type="number"
          icon="https://img.icons8.com/?size=100&id=Nmb9tuTRN32z&format=png&color=000000"
          value={aadhar}
          onChange={handleAadharChange}
          error={errors.aadhar}
        />
        <TextField
          label="Email Address"
          type="email"
          icon="https://img.icons8.com/fluency-systems-filled/50/email.png"
          value={email}
          onChange={handleEmailChange}
          error={errors.email}
        />
        <TextField
          label="Password"
          type="password"
          icon="https://img.icons8.com/material-sharp/24/lock--v1.png"
          value={password}
          onChange={handlePasswordChange}
          error={errors.password}
        />
        <TermsAndConditions
          checked={termsAccepted}
          onChange={handleCheckBoxChange}
        />
        {errors.termsAccepted && <p className="text-red-500 text-sm">{errors.termsAccepted}</p>}

        <SignUpButton disabled={isSubmitting} >Sign up</SignUpButton>
      </form>

      <FooterLink />
    </div>
  );
};

export default SignUpPage;






//