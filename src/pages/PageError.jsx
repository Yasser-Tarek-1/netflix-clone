import React from "react";
import { Link } from "react-router-dom";

import page404 from "../assets/page404.png";
import Div from "../layout/Container";

const PageError = () => {
  return (
    <Div className={" h-screen"}>
      <div className="absolute w-full h-full top-0 left-0 bg-black/30 z-10"></div>
      <img
        src={page404}
        alt="error"
        className="w-full h-full absolute left-0 top-0 object-cover"
      />
      <div className="text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center z-20 w-[90%]">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 sm:mb-10">
          Lost your way?
        </h1>
        <p className="text-xl sm:text-3xl mb-8">
          Sorry, we can't find that page. You'll find lots to explore on the
          home page.
        </p>
        <button className="py-3 px-8 bg-white text-black rounded font-bold hover:bg-white/90 mb-8">
          <Link to="/">Netflix Home</Link>
        </button>
        <p
          className=" border-l-2 border-[#e50914] w-fit mx-auto px-3 py-2 text-xl sm:text-2xl
        "
        >
          Error Code <span className="font-bold">NSES-404</span>
        </p>
      </div>
    </Div>
  );
};

export default PageError;
