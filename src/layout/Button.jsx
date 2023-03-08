import React from "react";

const Button = ({ children, type = "button", className, onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${
        className &&
        `${className} hover:bg-[#c30e1a] transition-all duration-200`
      } focus:outline-none text-white rounded-[4px]  py-[6px] w-[90px] ml-1 sm:ml-4 font-normal text-base md:text-lg`}
    >
      {children}
    </button>
  );
};

export default Button;
