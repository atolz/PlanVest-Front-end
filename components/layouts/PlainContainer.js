import React from "react";

const PlainContainer = ({ children, className }) => {
  return <div className={` bg-white p-[2.4rem] px-[2.4rem] rounded-secondary h-max w-full ${className}`}>{children}</div>;
};

export default PlainContainer;
