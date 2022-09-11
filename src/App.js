import React, { useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Logged from "./pages/Logged";
import Account from "./pages/Account";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import PageError from "./pages/PageError";

import { useDispatch } from "react-redux";
import { login, logout } from "./store/userSlice";
import { auth, onAuthStateChanged } from "./firebase";

import ProtectedRouts from "./components/ProtectedRouts";
import ProtectedRoutsOut from "./components/ProtectedRoutsOut";

const App = () => {
  const dispatch = useDispatch();

  // check at page load if a user is authenticated
  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // user is logged in, send the user's details to redux, store the current user in the state
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutsOut>
              <Home />
            </ProtectedRoutsOut>
          }
        />
        <Route
          path="/logged"
          element={
            <ProtectedRouts>
              <Logged />
            </ProtectedRouts>
          }
        />
        <Route
          path="/account"
          element={
            <ProtectedRouts>
              <Account />
            </ProtectedRouts>
          }
        />
        <Route
          path="/signup"
          element={
            <ProtectedRoutsOut>
              <SignUp />
            </ProtectedRoutsOut>
          }
        />
        <Route
          path="/signin"
          element={
            <ProtectedRoutsOut>
              <SignIn />
            </ProtectedRoutsOut>
          }
        />
        <Route path="*" element={<PageError />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
