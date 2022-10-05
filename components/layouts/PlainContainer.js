import React from "react";

const PlainContainer = ({ children, className }) => {
  return <div className={` bg-white p-[2.6rem] px-[2.6rem] md:rounded-secondary h-max w-full ${className}`}>{children}</div>;
};

export default PlainContainer;
