import React from "react";

const AppContainer = ({ children, className }) => {
  return <div className={`max-[1000px] px-[5.4rem] ${className}`}>{children}</div>;
};

export default AppContainer;
