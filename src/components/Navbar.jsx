import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../store/userSlice";
import Div from "../layout/Container";
import { toast } from "react-hot-toast";
import Button from "../layout/Button";
import { getAuth, signOut } from "firebase/auth";

const Navbar = () => {
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [loc, setloc] = useState(false);

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/signin" || location.pathname === "/signup") {
      setloc(true);
    } else {
      setloc(false);
    }
  }, [location.pathname]);

  const auth = getAuth();

  const logOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout());
        toast.success("Logout success");
        localStorage.removeItem("user");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <Div
      className={`py-6 ${
        loc ? "sm:absolute sm:z-[100] h-full relative" : "absolute z-[100]"
      }`}
    >
      <Div.Container>
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
                  <Button>Account</Button>
                </Link>
                <Link to="/">
                  <Button onClick={logOut} className={"bg-main"}>
                    Sign Out
                  </Button>
                </Link>
              </>
            )}
            {!user && (
              <>
                <Link to="/signup">
                  <Button>Sign Up</Button>
                </Link>
                <Link to="/signin">
                  <Button className={"bg-main"}>Sign In</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Div.Container>
    </Div>
  );
};

export default Navbar;
