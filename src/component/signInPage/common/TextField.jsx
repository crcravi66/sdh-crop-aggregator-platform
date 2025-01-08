import React from 'react'

const TextField = ({ label, icon, type,  value, onChange, error }) => {
    return (
      <div className="relative flex items-center w-[303px] h-[44px] my-2 px-3 py-[11px] border border-[#cbcbcb] rounded-[15px]">
        <img src={icon} alt="icon" className="w-6 h-6 absolute left-3" />
        <input
          type={type}
          placeholder={label}
          value={value}
          required
          onChange={onChange}
          className="w-full pl-10 text-sm font-medium text-[#515151] bg-white placeholder-[#9a9898] outline-none"
        />
        {error && <p className="text-red-500 text-sm absolute bottom-0 left-0">{error}</p>}
      </div>
    );
  };

export default TextField