import React from "react";

const Div = ({ children, className }) => {
  return <div className={`w-full ${className || ""}`}>{children}</div>;
};

const Container = ({ children, className }) => {
  return (
    <div className={`container px-4  mx-auto ${className || ""}`}>
      {children}
    </div>
  );
};

Div.Container = Container;
export default Div;
