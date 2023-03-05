import React from "react";

import homeImg from "../assets/home-netflex.jpg";
import SavedShow from "../components/SavedShow";
import Br from "../components/Br";
import Div from "../layout/Container";

const Account = () => {
  return (
    <Div className={"pb-10"}>
      <img src={homeImg} alt="main" className="w-full h-[500px] object-cover" />
      <div className="absolute left-0 top-0 w-full h-[500px] from-black bg-gradient-to-r"></div>
      <Br />
      <div className="text-white container mx-auto px-4 mt-4 opacity-60 min-h-[350px]">
        <h2 className="text-4xl font-bold">Saved</h2>
        <div className="mt-6">
          <SavedShow />
        </div>
      </div>
    </Div>
  );
};

export default Account;
