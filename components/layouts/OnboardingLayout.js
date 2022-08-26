import React from "react";
import SvgIconWrapper from "../general/SvgIconWrapper";

const OnboardingLayout = ({ children, desc = "Monitor analytics for your cooperative and members." }) => {
  return (
    <div className="min-h-screen w-screen relative flex">
      <section className="w-[48%] min-h-screen  bg-pv_primary flex items-center justify-center px-[2rem]">
        <div className="min-h-[70vh] h-min flex flex-col justify-between">
          <SvgIconWrapper className={"h-[2.7rem] w-[15.3rem] mx-auto scale-125 lg:scale-150 mb-[2rem]"} iconName={"planvest-logo"}></SvgIconWrapper>
          <img className=" h-[33vh] mx-auto" src="/login-img.png"></img>
          <p className=" text-white font-medium text-[2rem] max-w-[40rem] text-center">{desc}</p>
        </div>
      </section>
      <section className="w-[62%] min-h-screen bg-white flex items-center justify-center px-[2rem]">{children}</section>
    </div>
  );
};

export default OnboardingLayout;
