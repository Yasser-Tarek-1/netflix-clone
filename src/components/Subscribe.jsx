import React from "react";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Subscribe = () => {
  return (
    <div className="w-full text-center flex items-center flex-col sm:flex-row">
      <input
        type="mail"
        className="px-2 w-[90%] sm:w-[65%] focus:outline-none rounded-sm sm:rounded-[0] sm:rounded-tl-sm sm:rounded-bl-sm h-[44px] sm:h-[60px] md:h-[74px] placeholder:text-xl text-xl"
        placeholder="Email address"
      />
      <button className="text-white flex items-center bg-[#e50914] w-[60%] sm:w-[35%] py-2 rounded-sm sm:rounded-[0] sm:rounded-tr-sm sm:rounded-br-sm h-[44px] sm:h-[60px] md:h-[74px] text-2xl sm:text-3xl justify-center mt-3 sm:mt-0">
        Get Started
        <span>
          <MdOutlineKeyboardArrowRight color="white" size={40} />
        </span>
      </button>
    </div>
  );
};

export default Subscribe;
