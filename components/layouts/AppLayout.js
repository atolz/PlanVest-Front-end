import React from "react";
import Header from "../general/Header";
import Sidebar from "../general/Sidebar";
import AppContainer from "./AppContainer";

const AppLayout = ({ children }) => {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar></Sidebar>
      <main style={{ width: "calc(100% - 26.2rem)" }} className=" bg-pv_bg overflow-y-scroll scroll_hide">
        <Header></Header>
        <AppContainer className={"pt-[2rem]"}>{children}</AppContainer>
      </main>
    </div>
  );
};

export default AppLayout;
