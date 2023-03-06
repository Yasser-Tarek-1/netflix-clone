import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import cover from "../assets/home-netflex.jpg";
import Div from "../layout/Container";

import { inputDump } from "../store/emailSlice";

const Form = ({ title, subtitle, sign, link, onSubmit, email }) => {
  const [emailFaild, setEmailFaild] = useState("");
  const [passwordFaild, setPasswordFaild] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    setEmailFaild(email);
  }, [email]);

  const submitHandler = (e) => {
    e.preventDefault();
    onSubmit({ email: emailFaild, password: passwordFaild });
    setEmailFaild("");
    setPasswordFaild("");
    dispatch(inputDump(""));
  };
  return (
    <Div className={"h-screen relative"}>
      <div className="opacity-0 sm:opacity-100 absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
        <img src={cover} alt="/" className="w-full h-full object-cover" />
      </div>
      <Div.Container
        className={
          "text-white absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[999]"
        }
      >
        <div className="max-w-[450px] bg-black/75 text-white mx-auto">
          <div className="mx-auto py-16 max-w-[320px]">
            <h1 className="text-3xl font-bold">{title}</h1>
            <form onSubmit={submitHandler}>
              <input
                type="email"
                placeholder="Email"
                className="bg-[#333] focus:outline-none p-3 mt-6 w-full rounded"
                required
                onChange={(e) => setEmailFaild(e.target.value)}
                value={emailFaild || ""}
              />
              <input
                type="password"
                placeholder="Password"
                className="bg-[#333] focus:outline-none p-3  mt-5 w-full rounded"
                required
                onChange={(e) => setPasswordFaild(e.target.value)}
                value={passwordFaild || ""}
              />
              <button
                type="submit"
                className="bg-main focus:outline-none p-3 mt-6 w-full rounded text-lg hover:bg-[#c30e1a] transition-all duration-200"
              >
                {title}
              </button>
              <div className="flex items-center justify-between mt-3 text-[#b3b3b3]">
                <p className="flex items-center text-sm">
                  <input
                    type="checkbox"
                    className="focus:outline-none  bg-[#333] mr-1"
                    id="remember"
                  />
                  <label htmlFor="remember">Remember me</label>
                </p>
                <p className="text-sm hover:underline cursor-pointer">
                  Need help?
                </p>
              </div>
            </form>
            <h3 className="my-7 text-md text-[#b3b3b3]">
              {subtitle}
              <Link className="hover:underline text-white ml-1" to={link}>
                {sign}
              </Link>
            </h3>
            <p className="text-sm text-[#b3b3b3]">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
              <span className="hover:underline text-blue-600 cursor-pointer">
                Learn more.
              </span>
            </p>
          </div>
        </div>
      </Div.Container>
    </Div>
  );
};

export default Form;
