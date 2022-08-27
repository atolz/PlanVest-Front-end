import React from "react";

const StatCard = ({ title, value, bgColor = "linear-gradient(263.32deg, #230B34 0.96%, #8B31CA 100%)", className }) => {
  return (
    <div style={{ background: bgColor }} className={`w-full p-[2.2rem] px-[2.2rem] rounded-secondary relative overflow-hidden flex flex-col justify-center min-w-[25rem] ${className}`}>
      <h2 className="mb-[1.6rem] leading-[19.4px] font-medium text-[1.5rem] text-white mt-2">{title}</h2>
      <p className=" font-medium text-[2.8rem] leading-[38px] text-white">{value}</p>

      <div className=" absolute top-0 right-0 h-full">
        <img className="h-[8rem] w-auto scale-[1.4] absolute -left-[1.7rem] top-0" src="/card-path-1.png"></img>
        <div style={{ background: "rgba(255, 255, 255, 0.3)", borderRadius: "40px 8px 8px 40px" }} className="w-[10.5rem] rounded-secondary h-full"></div>
      </div>
    </div>
  );
};

export default StatCard;
