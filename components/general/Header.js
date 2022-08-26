import React, { useContext } from "react";
import { AppContext } from "../../context/AppContextProvider";
import AppContainer from "../layouts/AppContainer";

const Header = () => {
  const AppData = useContext(AppContext);
  const page = AppData.activePage;
  return (
    <header className=" h-[7rem] flex items-center bg-white">
      <AppContainer>
        <span className=" text-text font-semibold text-[1.6rem]">{page ?? "Dashboard"}</span>
      </AppContainer>
    </header>
  );
};

export default Header;
