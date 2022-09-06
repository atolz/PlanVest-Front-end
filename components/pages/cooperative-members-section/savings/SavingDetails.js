import React from "react";
import StatCard from "../../../cards/StatCard";
import SvgIconWrapper from "../../../general/SvgIconWrapper";
import PlainContainer from "../../../layouts/PlainContainer";
import ActionsBox from "./ActionsBox";
import Details from "./Details";
import SavingsInfo from "./SavingsInfo";
import Transactions from "./Transactions";

const SavingDetails = ({ title, onClose }) => {
  return (
    <div>
      <header onClick={onClose} className=" items-center cursor-pointer inline-flex">
        <SvgIconWrapper className={"!h-[1.2rem]"} iconName={"arrow-filled "}></SvgIconWrapper>
        <p className=" font-rubik text-pv_dark text-[2.2rem] ml-[2.7rem]">{title}</p>
      </header>

      <main className="mt-[4.2rem] grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] 2xl:grid-cols-[1.5fr,_1fr] gap-[2.4rem]">
        <div>
          <PlainContainer className={" !p-[2rem] mb-[1.6rem]"}>
            <StatCard className={"h-[15rem]"} title={"My balance"} value={"N200,000"} bgColor="linear-gradient(263.32deg, #051EA4 0.96%, #1A8EF0 100%)"></StatCard>
            {/* Action Box */}
            <ActionsBox></ActionsBox>
          </PlainContainer>
          <Transactions></Transactions>
        </div>
        <div>
          <SavingsInfo></SavingsInfo>
          <Details></Details>
        </div>
      </main>
    </div>
  );
};

export default SavingDetails;
