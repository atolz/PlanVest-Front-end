import React from "react";
import PlainContainerTitle from "../../../layouts/PlainContainerTitle";

const Box = ({ title, subTitle }) => {
  return (
    <div className={" rounded-secondary p-[1.6rem] bg-pv_bg"}>
      <div className="flex items-center mb-[.8rem] justify-between">
        <span className=" text-[1.4rem] font-medium text-label">{title}</span>
      </div>
      <p className=" font-medium text-[1.6rem] text-pv_dark">{subTitle}</p>
    </div>
  );
};

const Details = () => {
  return (
    <PlainContainerTitle title="Details">
      <div className=" grid grid-cols-2 grid-flow-row gap-[.8rem] mt-[2.4rem]">
        <Box title="Interest" subTitle="10%"></Box>
        <Box title="Target Amount" subTitle="N600,000"></Box>
        <Box title="Total Interest Earned" subTitle="N5000"></Box>
        <Box title="Status" subTitle="Ongoing"></Box>
      </div>
    </PlainContainerTitle>
  );
};

export default Details;
