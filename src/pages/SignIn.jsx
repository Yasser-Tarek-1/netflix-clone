import React from "react";
import Form from "../components/Form";
import { auth, signInWithEmailAndPassword } from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const loginToApp = async ({ email, password }) => {
    // Sign in an existing user with Firebase
    try {
      const userAuth = await signInWithEmailAndPassword(auth, email, password);
      navigate("/logged");
      // store the user's information in the redux state
      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
        })
      );
    } catch (err) {
      alert(err);
    }
  };


  return (
    <Form
      onSubmit={loginToApp}
      title="Sign In"
      subtitle="New to Netflix?"
      sign="Sign up now."
      link="/signup"
    />


  );
};

export default SignIn;
