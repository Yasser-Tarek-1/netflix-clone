import React from "react";
import Div from "../layout/Container";

const LoggedMain = ({ randomMovie }) => {
  const overviewHandler = (str, num) => {
    if (str) {
      if (str.length > num) {
        return str.slice(0, num) + "....";
      }
      return str;
    }
  };
  return (
    <Div className={"h-[700px] relative"}>
      <div className="absolute left-0 top-0 w-full h-full from-black bg-gradient-to-r"></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`}
        alt="main"
        className="w-full h-full object-cover"
      />
      <Div.Container className={"text-white"}>
        <div className="absolute top-[40%]">
          <h3 className="text-3xl sm:text-6xl font-bold">
            {randomMovie?.title}
          </h3>
          <div className="my-4">
            <button className="bg-gray-300 text-black py-2 px-5 mr-4 border-gray-300 border text-lg">
              Play
            </button>
            <button className="bg-transparent text-gray-300 py-2 px-5 mr-4 border border-gray-300 text-lg">
              Watch Later
            </button>
          </div>
          <p className="text-[#737373] text-sm mb-2">
            Released {randomMovie?.release_date}
          </p>
          <p className="sm:w-[50%] text-base sm:text-lg">
            {overviewHandler(randomMovie?.overview, 250)}
          </p>
        </div>
      </Div.Container>
    </Div>
  );
};

export default LoggedMain;
