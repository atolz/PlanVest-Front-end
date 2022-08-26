import React from "react";

const PlainContainer = ({ children, className }) => {
  return <div className={` bg-white p-[3.2rem] px-[3.2rem] rounded-secondary h-max w-full ${className}`}>{children}</div>;
};

export default PlainContainer;
