import React from "react";

import deviceVedio from "../assets/video-devices.m4v";
import deviceImg from "../assets/device-pile.png";
import Div from "../layout/Container";

export const Watch = () => {
  return (
    <Div>
      <Div.Container className={"py-8"}>
        <div className="flex flex-col lg:flex-row text-white justify-evenly items-center">
          <div className="max-w-[600px]">
            <h3 className="text-3xl sm:text-5xl font-bold mb-2 sm:mb-4 text-center lg:text-left">
              Watch everywhere.
            </h3>
            <p className="text-lg sm:text-xl lg:text-2xl text-center lg:text-left relative z-10">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV without paying more.
            </p>
          </div>
          <div className="relative overflow-hidden">
            <img src={deviceImg} alt="/" className="object-cover w-full" />
            <div className="absolute -z-10 h-full max-w-[63%] max-h-[47%] left-[50%] top-[35%] w-full translate-y-[-50%] translate-x-[-50%]">
              <video src={deviceVedio} autoPlay loop type="video/mp4" />
            </div>
          </div>
        </div>
      </Div.Container>
    </Div>
  );
};

export default Watch;
