import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRouts = ({ children }) => {
  const { user } = useSelector((state) => state.user);

  if (user === null) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRouts;
