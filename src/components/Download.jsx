import React from "react";
import Div from "../layout/Container";

import mobileImg from "../assets/mobile-0819.jpg";
import boxshot from "../assets/boxshot.png";
import icon from "../assets/download-icon.gif";

export const Download = () => {
  return (
    <Div>
      <Div.Container className={"py-8"}>
        <div className="flex flex-col lg:flex-row-reverse text-white justify-evenly items-center">
          <div className="max-w-[600px]">
            <h3 className="text-3xl sm:text-5xl font-bold mb-2 sm:mb-4 text-center lg:text-left">
              Download your shows to watch offline.
            </h3>
            <p className="text-lg sm:text-xl lg:text-2xl text-center lg:text-left mb-[-20px] sm:mb-0 relative z-10">
              Save your favorites easily and always have something to watch.
            </p>
          </div>
          <div className="max-w-[450px] relative">
            <img src={mobileImg} alt="/" />
            <div className="h-16 sm:h-24 flex w-[300px] sm:w-[360px] py-3 px-4 border-4  border-[#222] overflow-hidden items-center justify-between rounded-xl absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[140%] sm:translate-y-[60%] bg-black">
              <img
                src={boxshot}
                alt="/"
                className="w-8 h-12 sm:w-12 sm:h-[70px]"
              />
              <div>
                <h3 className="">Stranger Things</h3>
                <p className="text-[#0071EB] text-base">Downloading...</p>
              </div>
              <img src={icon} alt="/" className="w-10 sm:w-12" />
            </div>
          </div>
        </div>
      </Div.Container>
    </Div>
  );
};

export default Download;
