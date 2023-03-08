import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutsOut = ({ children }) => {
  const { user } = useSelector((state) => state.user);

  if (user !== null) {
    return <Navigate to="/logged" />;
  } else {
    return children;
  }
};

export default ProtectedRoutsOut;
