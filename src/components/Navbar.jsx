import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/userSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(user);
  const [loc, setloc] = useState(false);

  const location = useLocation();
  console.log(location.pathname);
  useEffect(() => {
    if (location.pathname === "/signin" || location.pathname === "/signup") {
      setloc(true);
    } else {
      setloc(false);
    }
  }, [location.pathname]);

  return (
    <div
      className={`w-full py-6 ${
        loc ? "sm:absolute sm:z-[100] h-full relative" : "absolute z-[100]"
      }`}
    >
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/">
            <div className="w-[90px] h-[24px] md:w-[134px] md:h-[40px] lg:w-[144px] lg:h-[50px]">
              <img
                src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
                alt="NETFLEX"
                className="w-full cursor-pointer"
              />
            </div>
          </Link>
          <div className="flex w-[60%] items-center justify-end">
            {user && (
              <>
                <Link to="/account">
                  <button className=" text-white rounded-sm py-2 md:py-1 w-[90px] ml-1 sm:ml-4 font-normal text-xs md:text-lg">
                    Account
                  </button>
                </Link>
                <Link to="/">
                  <button
                    onClick={() => dispatch(logout())}
                    className="bg-[#e50914] text-white rounded-sm py-2 md:py-1 w-[90px] ml-1 sm:ml-4 font-normal text-xs md:text-lg"
                  >
                    Sign Out
                  </button>
                </Link>
              </>
            )}
            {!user && (
              <>
                <Link to="/signup">
                  <button className=" text-white rounded-sm py-2 md:py-1 w-[90px] ml-1 sm:ml-4 font-normal text-xs md:text-lg">
                    Sign Up
                  </button>
                </Link>
                <Link to="/signin">
                  <button className="bg-[#e50914] text-white rounded-sm py-2 md:py-1 w-[90px] ml-1 sm:ml-4 font-normal text-xs md:text-lg">
                    Sign In
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
