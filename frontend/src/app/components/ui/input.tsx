import React from 'react';

interface InputProps {
  type: string;
  placeholder: string;
  logo?: string; // URL to an image or icon class
}

function Input({ type, placeholder="Enter here", logo }: InputProps) {
  return (
    <div className="relative w-full">
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-full bg-[#E9E9E9] text-black placeholder:text-[#AEA8A8] py-2 px-4 pr-10"
      />
      {logo && (
        <img
          src={logo}
          alt="indicator"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
        />
      )}
    </div>
  );
}

export default Input;
