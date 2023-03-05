import React from "react";

import tvImg from "../assets/tv.png";
import tvVideo from "../assets/video-tv-0819.m4v";
import Div from "../layout/Container";

export const Enjoy = () => {
  return (
    <Div>
      <Div.Container className={"py-8"}>
        <div className="flex flex-col lg:flex-row text-white justify-evenly items-center">
          <div className="max-w-[600px]">
            <h3 className="text-3xl sm:text-5xl font-bold mb-2 sm:mb-4 text-center lg:text-left">
              Enjoy on your TV.
            </h3>
            <p className="text-lg sm:text-xl lg:text-2xl text-center lg:text-left mb-[-20px] sm:mb-0 relative z-10">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
          <div className="max-w-[450px] relative overflow-hidden">
            <img
              src={tvImg}
              alt="/"
              className="object-cover w-full max-w-[450px]"
            />
            <video
              src={tvVideo}
              autoPlay
              loop
              type="video/mp4"
              className="absolute top-[20%] left-[13%] max-w-[330px] -z-10"
            />
          </div>
        </div>
      </Div.Container>
    </Div>
  );
};

export default Enjoy;
