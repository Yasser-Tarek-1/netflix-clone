import React from "react";
import Form from "../components/Form";
import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  db,
} from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

import { setDoc, doc } from "firebase/firestore";

const SignUp = () => {
  // use state constants for the the form inputs
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const register = async ({ email, password }) => {
    // Create a new user with Firebase
    try {
      const userAuth = await createUserWithEmailAndPassword(auth, email, password);
      setDoc(doc(db, "users", email), {
        movieLoved: [],
      });
      return await updateProfile(userAuth.user, {})
        .then(
          // Dispatch the user information for persistence in the redux state
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
            })
          ),
          navigate("/logged")
        )
        .catch((error) => {
          console.log("user not updated");
        });
    } catch (err) {
      alert(err);
    }

  };

  return (
    <Form
      title="Sign Up"
      subtitle="Already subscribed to Netflix?"
      sign="Sign In."
      link="/signin"
      onSubmit={register}
    />
  );
};

export default SignUp;
