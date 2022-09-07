import React from "react";
import StatCard from "../../../cards/StatCard";
import PlainContainer from "../../../layouts/PlainContainer";
import ActionsBox from "./ActionsBox";

const StatActionBox = () => {
  return (
    <PlainContainer className={" !p-[2rem] mb-[1.6rem]"}>
      <StatCard className={"h-[15rem]"} title={"My balance"} value={"N200,000"} bgColor="linear-gradient(263.32deg, #051EA4 0.96%, #1A8EF0 100%)"></StatCard>
      {/* Action Box */}
      <ActionsBox></ActionsBox>
    </PlainContainer>
  );
};

export default StatActionBox;
