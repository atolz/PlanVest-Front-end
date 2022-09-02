import React from "react";

const AppContainer = ({ children, className }) => {
  return <div className={`max-w-[1400px] w-full  px-[5rem] pr-[1.4rem] ${className}`}>{children}</div>;
};

export default AppContainer;
