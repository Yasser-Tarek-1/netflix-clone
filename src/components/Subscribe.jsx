import React, { useState } from "react";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { emailHandler } from "../store/emailSlice";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const handlerEmail = () => {
    dispatch(emailHandler(email));
  };
  return (
    <div className="w-full text-center flex items-center flex-col sm:flex-row">
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="mail"
        className="px-2 w-[90%] sm:w-[65%] focus:outline-none rounded-sm sm:rounded-[0] sm:rounded-tl-sm sm:rounded-bl-sm h-[44px] sm:h-[60px] md:h-[74px] placeholder:text-xl text-xl"
        placeholder="Email address"
      />
      <Link to="/signup">
        <button
          onClick={handlerEmail}
          className="pl-2 w-full text-white flex items-center bg-main hover:bg-[#c30e1a] transition-all duration-200  py-2 rounded-sm sm:rounded-[0] sm:rounded-tr-sm sm:rounded-br-sm h-[44px] sm:h-[60px] md:h-[74px] text-2xl sm:text-3xl justify-center mt-3 sm:mt-0"
        >
          Get Started
          <span>
            <MdOutlineKeyboardArrowRight color="white" size={40} />
          </span>
        </button>
      </Link>
    </div>
  );
};

export default Subscribe;
