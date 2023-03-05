import React from "react";

import kids from "../assets/kids.png";
import Div from "../layout/Container";

export const Kids = () => {
  return (
    <Div>
      <Div.Container className={"py-8"}>
        <div className="flex flex-col lg:flex-row-reverse text-white justify-evenly items-center">
          <div className="max-w-[600px]">
            <h3 className="text-3xl sm:text-5xl font-bold mb-2 sm:mb-4 text-center lg:text-left">
              Download your shows to watch offline.
            </h3>
            <p className="text-lg sm:text-xl lg:text-2xl text-center lg:text-left relative z-10">
              Save your favorites easily and always have something to watch.
            </p>
          </div>
          <div className="max-w-[450px] relative">
            <img src={kids} alt="/" />
          </div>
        </div>
      </Div.Container>
    </Div>
  );
};

export default Kids;
