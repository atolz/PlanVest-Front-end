import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Label from "../../../components/general/Label";
import SvgIconWrapper from "../../../components/general/SvgIconWrapper";
import AppLayout from "../../../components/layouts/AppLayout";
import PlainContainer from "../../../components/layouts/PlainContainer";
import DocBox from "../../../components/general/DocBox";
import PaymentBreakDownTable from "../../../components/pages/cooperative-members-section/loan/PaymentBreakDownTable";

const Title = ({ text, className }) => {
  return <p className={` text-pv_dark text-[1.6rem] leading-[29px] font-medium mb-[1.6rem] ${className}`}>{text}</p>;
};

const TextValue = ({ text, value, className }) => {
  return (
    <p className={`font-medium text-[1.5rem] flex items-center ${className}`}>
      <span className=" text-label">{text}: &nbsp;</span>
      <span className="text-pv_dark">{value}</span>
    </p>
  );
};

const LoanDetails = () => {
  const router = useRouter();

  return (
    <AppLayout>
      <div className="flex items-center justify-between">
        <Link href={"/cooperative-members/loan/"}>
          <a className=" items-center cursor-pointer inline-flex">
            <SvgIconWrapper className={"!h-[1.2rem]"} iconName={"arrow-filled "}></SvgIconWrapper>
            <p className=" font-rubik text-pv_dark text-[2.2rem] ml-[2.7rem]">{router?.query?.id}</p>
          </a>
        </Link>
        <Label type={router?.query?.label} text={router?.query?.status}></Label>
      </div>
      <main className="mt-[2.4rem] grid gap-[1rem]">
        <PlainContainer className={"grid grid-cols-3"}>
          <div className="grid gap-[3.4rem]">
            <TextValue text={"Date Needed"} value={"01/06/2022"}></TextValue>
            <TextValue text={"Loan Term"} value={"6 Months"}></TextValue>
          </div>
          <div className="grid gap-[3.4rem] justify-self-start">
            <TextValue text={"Next Repayment Date"} value={"08/06/2022"}></TextValue>
            <TextValue text={"Amount applied for"} value={"N600,000"}></TextValue>
          </div>
          <div className="grid gap-[3.4rem] justify-self-start">
            <TextValue text={"Interest to be paid"} value={"6%"}></TextValue>
            <TextValue text={"Installment"} value={"Weekly"}></TextValue>
          </div>
        </PlainContainer>

        {/* Payment */}
        <PlainContainer>
          <Title text="Payment"></Title>
          <div className={"grid grid-cols-3"}>
            <TextValue text={"Interest Per Term"} value={"N5000"}></TextValue>
            <TextValue className="justify-self-start" text={"Weekly Payment"} value={"N40,000"}></TextValue>
            <TextValue className="justify-self-start" text={"Late Payment"} value={"N1000/Day "}></TextValue>
          </div>
        </PlainContainer>

        {/* Reason */}
        <PlainContainer>
          <Title text="Reason"></Title>
          <p className=" text-label font-medium text-[1.4rem] leading-[26px]">
            Velit, egestas non proin sed elementum, a, molestie eu. Ut donec eget adipiscing nullam lectus egestas. Purus a congue metus, vulputate ut enim. Rhoncus ultricies volutpat faucibus
            pretium, tortor scelerisque. Ut cursus proin cursus sit pretium nulla. Tincidunt nunc, tristique dolor vulputate id suspendisse pharetra nibh. Lorem scelerisque adipiscing donec facilisi
            aliquam. Commodo lacus vehicula ultricies interdum euismod massa mattis mus sapien. Sagittis risus, amet, tortor in neque fringilla tellus hac. Leo elit in tortor sit mi viverra sed
            adipiscing. Mi habitant arcu semper quisque. Felis potenti turpis commodo fames orci. Sed nullam elementum at donec aliquam orci cursus lorem. Mattis et morbi fermentum suspendisse viverra
            elit fermentum pellentesque adipiscing. Vestibulum, vitae orci netus nisl. Ornare lobortis nunc vulputate nulla. Ultricies lectus.
          </p>
        </PlainContainer>

        {/* Docs */}
        <PlainContainer>
          <Title text={"Documents"}></Title>
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-[1.6rem]">
            <DocBox title={"Pitch Deck"}></DocBox>
            <DocBox title={"CAC"}></DocBox>
          </div>
        </PlainContainer>

        {/* Payment BreakDown */}
        <PlainContainer className={"overflow-x-scroll scroll_hide"}>
          <Title text={"Payment BreakDown"}></Title>
          <PaymentBreakDownTable></PaymentBreakDownTable>
        </PlainContainer>
      </main>
    </AppLayout>
  );
};

export default LoanDetails;
