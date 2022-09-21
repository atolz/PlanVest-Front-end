import { Avatar } from "@mui/material";
import Link from "next/link";
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContextProvider";
import { AuthContext } from "../../context/AuthContextProvider";
import AppContainer from "../layouts/AppContainer";
import Hrule from "./Hrule";
import SvgIconWrapper from "./SvgIconWrapper";

const Header = () => {
  const AppData = useContext(AppContext);
  const page = AppData.activePage;
  const { user } = useContext(AuthContext);
  return (
    <header className=" h-[7rem] flex items-center justify-between bg-white">
      <AppContainer className="flex items-center justify-between">
        <span className=" text-text font-semibold text-[1.6rem]">{page ?? "Dashboard"}</span>
        <div className="flex items-center">
          <SvgIconWrapper className={" !h-[3rem] !w-[3rem]"} iconName={"message-notification"}></SvgIconWrapper>
          <Hrule className={"w-[2.3rem] rotate-90 mx-[2rem] !border-label"}></Hrule>
          <Link href={"/cooperative-members/account"}>
            <a className=" flex items-center cursor-pointer">
              <Avatar className="mr-[2rem]" src="/images/avataRR.png"></Avatar>
              <span className=" text-text text-[1.6rem] font-medium mr-5 capitalize">{user?.cooperativeName ?? "Guest"}</span>
            </a>
          </Link>
        </div>
      </AppContainer>
    </header>
  );
};

export default Header;
