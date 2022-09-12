import Link from "next/link";
import React from "react";
import Hrule from "../../../general/Hrule";
import Label from "../../../general/Label";
import PlainContainer from "../../../layouts/PlainContainer";

const ApplicationCard = ({ application, ...props }) => {
  const colorTypesStatusMap = {
    Completed: "success",
    Pending: "warn",
    Declined: "error",
    Active: "active",
  };
  return (
    <PlainContainer className={"shadow"}>
      <div className="flex items-center justify-between mb-[1.2rem]">
        <p className=" font-rubik font-medium text-[1.8rem]">{application?.name}</p>
        <Label type={colorTypesStatusMap[application?.status]} text={application?.status}></Label>
      </div>
      <div className=" text-label text-[1.5rem] font-medium">
        <span>{application?.desc} </span>
        <Link href={`/cooperative-members/investment/applications/${application?.name}?status=${application?.status}&label=${colorTypesStatusMap[application?.status]}`}>
          <a className=" text-pv_primary">Read More</a>
        </Link>
      </div>
      <Hrule className={"my-[1.6rem]"}></Hrule>
      <div className="grid grid-cols-2 ">
        <div className="grid gap-[.4rem] font-medium">
          <p className="text-[1.4rem] text-label">ROI</p>
          <p className="text-[1.4rem] text-text">{application?.amountRequested}</p>
        </div>
        <div className="grid gap-[.4rem] font-medium justify-self-end">
          <p className="text-[1.4rem] text-label">Establishment Date</p>
          <p className="text-[1.4rem] text-text">{application?.dateRequested}</p>
        </div>
      </div>
    </PlainContainer>
  );
};

export default ApplicationCard;
