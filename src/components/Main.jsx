import React from "react";

import homeImg from "../assets/home-netflex.jpg";
import Div from "../layout/Container";
import Subscribe from "./Subscribe";

const Main = () => {
  return (
    <Div className={"h-[750px] relative"}>
      <div className="absolute left-0 top-0 w-full h-full from-black bg-gradient-to-r"></div>
      <img src={homeImg} alt="main" className="w-full h-full object-cover" />
      <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[90%] md:max-w-[750px] z-20">
        <h1 className="font-bold  text-3xl xl:leading-3xl md:text-[55px] md:leading-[55px] lg:text-[50px] xl:text-[65px] xl:leading[65px] w-full text-center xl:leading-[65px] text-white">
          Unlimited movies, TV shows, and more.
        </h1>
        <h3 className="text-center my-4 md:my-7 text-lg md:text-[26px] xl:text-3xl  leading-3xl text-white">
          Watch anywhere. Cancel anytime.
        </h3>
        <p className="text-center mb-4 text-[16px] leading-[16px]  text-lg  xl:text-xl xl:leading-xl text-white">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <Subscribe />
      </div>
    </Div>
  );
};

export default Main;
