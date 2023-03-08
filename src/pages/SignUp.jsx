import React from "react";
import Form from "../components/Form";
import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  db,
} from "../firebase";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { login } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

import { setDoc, doc } from "firebase/firestore";

import { toast } from "react-hot-toast";

const SignUp = () => {
  // use state constants for the the form inputs
  const { email } = useSelector((state) => state.email);

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const register = ({ email, password }) => {
    const signUp = async () => {
      // Create a new user with Firebase
      try {
        const userAuth = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        setDoc(doc(db, "users", email), {
          movieLoved: [],
        });
        return await updateProfile(userAuth.user, {})
          .then(
            dispatch(login(userAuth.user.email)),
            localStorage.setItem("user", userAuth.user.email),
            navigate("/logged"),
            toast.success("Signup successfully")
          )
          .catch((error) => {
            toast.error("User not updated");
          });
      } catch (err) {
        if (String(err).includes("invalid-email")) {
          toast.error("Invalid email");
        } else if (String(err).includes("weak-password")) {
          toast.error("Password should be at least 6 characters ");
        } else if (String(err).includes("email-already-in-use")) {
          toast.error("Email already taken");
        } else {
          toast.error("Something is wrong");
        }
      }
    };
    signUp();
  };

  return (
    <Form
      title="Sign Up"
      subtitle="Already subscribed to Netflix?"
      sign="Sign In."
      link="/signin"
      onSubmit={register}
      email={email}
    />
  );
};

export default SignUp;
