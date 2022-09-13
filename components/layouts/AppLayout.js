import React from "react";
import Header from "../general/Header";
import Sidebar from "../general/Sidebar";
import AppContainer from "./AppContainer";

const AppLayout = ({ children }) => {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar></Sidebar>
      <main className=" bg-pv_bg overflow-y-scroll scroll_hide pb-[3.2rem] w-[calc(100%_-_262px)] ">
        <Header></Header>
        <AppContainer className={"pt-[2rem]"}>{children}</AppContainer>
      </main>
    </div>
  );
};

export default AppLayout;
