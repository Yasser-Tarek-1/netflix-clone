import React from "react";
import Form from "../components/Form";
import { auth, signInWithEmailAndPassword } from "../firebase";
// import { useDispatch } from "react-redux";
// import { login } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SignIn = () => {
  // const dispatch = useDispatch();
  let navigate = useNavigate();

  const loginToApp = ({ email, password }) => {
    const getUser = async () => {
      // Sign in an existing user with Firebase
      try {
        const userAuth = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        navigate("/logged");
        // store the user's information in the redux state

        const user = {
          email: userAuth.user.email,
          uid: userAuth.user.uid,
        };

        // dispatch(login(user));
        localStorage.setItem("user", JSON.stringify(user));
        toast.success("Logged in successfully");
      } catch (err) {
        if (String(err).includes("user-not-found")) {
          toast.error("User not found");
        } else if (String(err).includes("wrong-password")) {
          toast.error("Wrong password");
        }
      }
    };
    getUser();
  };

  return (
    <>
      <Form
        onSubmit={loginToApp}
        title="Sign In"
        subtitle="New to Netflix?"
        sign="Sign up now."
        link="/signup"
      />
    </>
  );
};

export default SignIn;
