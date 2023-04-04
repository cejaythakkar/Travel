import React from 'react';

const FormControl = ({ title, type = 'text', className }) => {
  return (
    <div
      className={`form-control my-10 border-b-[1px] border-white relative ${className}`}
    >
      <input
        type={type}
        className="w-full h-100 bg-transparent outline-none text-white placeholder-transparent peer py-2"
        placeholder={title}
      />
      <label
        className="text-white 
      text-sm 
      absolute left-0 -top-[15px] transition-all 
      ease 
      peer-placeholder-shown:text-base 
      peer-placeholder-shown:top-2 
      peer-placeholder-shown:text-md peer-focus:-top-[15px] peer-focus:text-sm peer-focus:text-primary-100"
      >
        {title}
      </label>
    </div>
  );
};

export default FormControl;
