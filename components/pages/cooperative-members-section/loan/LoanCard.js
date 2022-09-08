import React from "react";
import Hrule from "../../../general/Hrule";
import Label from "../../../general/Label";
import PlainContainer from "../../../layouts/PlainContainer";

const LoanCard = ({ loan }) => {
  const colorTypesStatusMap = {
    Completed: "success",
    Pending: "warn",
    Declined: "error",
    Active: "active",
  };
  return (
    <PlainContainer>
      <div className="flex items-center justify-between mb-[1.2rem]">
        <p className=" font-rubik font-medium text-[1.8rem]">{loan?.name}</p>
        <Label type={colorTypesStatusMap[loan?.status]} text={loan?.status}></Label>
      </div>
      <div className=" text-label text-[1.5rem] font-medium">
        <span>{loan?.desc} </span>
        <span className=" text-pv_primary">Read More</span>
      </div>
      <Hrule className={"my-[1.6rem]"}></Hrule>
      <div className="grid grid-cols-2 ">
        <div className="grid gap-[.4rem] font-medium">
          <p className="text-[1.4rem] text-label">Amount Request</p>
          <p className="text-[1.4rem] text-text">{loan?.amountRequested}</p>
        </div>
        <div className="grid gap-[.4rem] font-medium justify-self-end">
          <p className="text-[1.4rem] text-label">Date Needed</p>
          <p className="text-[1.4rem] text-text">{loan?.dateRequested}</p>
        </div>
      </div>
    </PlainContainer>
  );
};

export default LoanCard;
