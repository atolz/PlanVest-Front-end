import React from "react";

const AppContainer = ({ children, className }) => {
  return <div className={`max-w-[1400px] w-full  px-[5rem] pr-[4.5rem] ${className}`}>{children}</div>;
};

export default AppContainer;
