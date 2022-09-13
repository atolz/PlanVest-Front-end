import { useRouter } from "next/router";
import React from "react";
import StatCard from "../../../../components/cards/StatCard";
import CopyLink from "../../../../components/general/CopyLink";
import DocBox from "../../../../components/general/DocBox";
import GoBack from "../../../../components/general/GoBack";
import Label from "../../../../components/general/Label";
import AppLayout from "../../../../components/layouts/AppLayout";
import PlainContainer from "../../../../components/layouts/PlainContainer";
import PlainContainerTitle from "../../../../components/layouts/PlainContainerTitle";
import ImpressionBox from "../../../../components/pages/cooperative-members-section/investment/ImpressionBox";

const Title = ({ text, className }) => {
  return <p className={` text-pv_dark text-[1.6rem] leading-[29px] font-medium mb-[1.6rem] ${className}`}>{text}</p>;
};

const TextValue = ({ text, value, className }) => {
  return (
    <p className={`font-medium text-[1.5rem] flex items-center ${className}`}>
      <span className=" text-label">{text}: &nbsp;</span>
      <span className="text-text font-medium">{value}</span>
    </p>
  );
};

const ApplicationDetails = () => {
  const router = useRouter();
  return (
    <AppLayout>
      <div className="flex items-center justify-between">
        <GoBack name={router?.query?.id} link={"/cooperative-members/investment/applications"}></GoBack>
        <Label type={router?.query?.label} text={router?.query?.status}></Label>
      </div>
      <main className="mt-[2.4rem] grid gap-[1.6rem]">
        {/* Active Stat */}
        {(router?.query?.status == "Active" || router?.query?.status == "Completed") && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1.2rem]">
            <PlainContainer className={" !h-full col-span-1"}>
              <div className=" flex items-center">
                <img src={"/cashew.png"} className="w-[7.5rem] h-[7.5rem] rounded-full"></img>
                <div className="flex flex-col ml-[1.6rem] mr-auto">
                  <p className=" text-[1.8rem] font-semibold text-text font-rubik">{"Fish Farm"}</p>
                  <p className="text-label font-medium text-[1.6rem]">{"Abuja"}</p>
                </div>
              </div>
            </PlainContainer>
            <PlainContainer className={" !p-[1.2rem] col-span-1 lg:col-span-2 grid md:!grid-cols-2 gap-[2.5rem]"}>
              <StatCard titleClassName={" !mb-[.3rem]"} className={"!h-[11rem]"} bgColor="#F44771" title={"No of investors "} value={300}></StatCard>
              <StatCard titleClassName={" !mb-[.3rem]"} className={"!h-[11rem]"} bgColor="linear-gradient(263.32deg, #230B34 0.96%, #8B31CA 100%" title={"Raised Amount "} value={"300,000"}></StatCard>
            </PlainContainer>
          </div>
        )}
        {/* Pending Stat */}
        {router?.query?.status == "Pending" && (
          <PlainContainer className={" flex items-center justify-between flex-wrap"}>
            <div className=" flex items-center">
              <img src={"/cashew.png"} className="w-[4.7rem] h-[4.7rem] rounded-full"></img>
              <div className="flex flex-col ml-[1.6rem] mr-auto">
                <p className=" text-[1.5rem] font-medium text-text">{"Investment Titles"}</p>
                <p className="text-label font-medium text-[1.4rem]">{"Abuja"}</p>
              </div>
            </div>
            <div className="bg-[#E7EBED] rounded-primary h-[7.5rem] p-[1.6rem] text-[1.4rem] font-medium flex items-center">
              <span className="text-pv_dark mr-3 w-full max-w-[410px] md:mr-[8rem]">Application has been sent</span>
              <span className="text-text whitespace-nowrap">30 mins ago</span>
            </div>
          </PlainContainer>
        )}
        {/* Details */}
        <PlainContainer className={"grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-[2.4rem]"}>
          <div className="grid gap-[1.8rem]">
            <TextValue text={"Amount per slot:"} value={"50,000"}></TextValue>
            <TextValue text={"Duration"} value={"6 Months"}></TextValue>
            <TextValue text={"Target Amount"} value={"200,0000"}></TextValue>
          </div>
          <div className="grid gap-[1.8rem] justify-self-start">
            <TextValue text={"Start Date"} value={"08/06/2022"}></TextValue>
            <TextValue text={"End Date"} value={"08/06/2022"}></TextValue>
            <TextValue text={"Category"} value={"Agriculture"}></TextValue>
          </div>
          <div className="grid gap-[1.8rem] justify-self-start items-start">
            <TextValue text={"ROI"} value={"6%"}></TextValue>
            <TextValue text={"Unit"} value={"40"}></TextValue>
            <div></div>
          </div>
          <div className="grid gap-[1.8rem] justify-self-start">
            <TextValue text={"Application Date"} value={"23/05/2022"}></TextValue>
            <TextValue text={"Establishment Date"} value={"23/05/2022"}></TextValue>
            <div></div>
          </div>
        </PlainContainer>

        {/* Impressions */}
        {(router?.query?.status == "Active" || router?.query?.status == "Completed") && (
          <PlainContainerTitle title="Impressions">
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-[1.6rem] mt-[3.4rem]">
              <ImpressionBox value={50} title="Views" type="warn"></ImpressionBox>
              <ImpressionBox value={60} title="Clicks" type="error"></ImpressionBox>
              <ImpressionBox value={90} title="Available Slots" type="success"></ImpressionBox>
              <ImpressionBox value={12} title="Purchased Slots" type="active"></ImpressionBox>
            </div>
          </PlainContainerTitle>
        )}

        {/* Share  */}
        {(router?.query?.status == "Active" || router?.query?.status == "Completed") && (
          <PlainContainerTitle title="Share Fish Farm">
            <div className={"grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-[1.6rem] mt-[2.9rem]"}>
              <CopyLink></CopyLink>
              <div className=" bg-input rounded-primary h-[5.6rem] flex items-center text-[1.6rem] text-label p-[2.4rem]">
                <span>counter:</span>
                <span>0</span>
              </div>
            </div>
          </PlainContainerTitle>
        )}

        {/* Description */}
        <PlainContainerTitle title="Description">
          <p className=" text-label font-medium text-[1.4rem] leading-[26px] mt-[1.6rem]">
            Velit, egestas non proin sed elementum, a, molestie eu. Ut donec eget adipiscing nullam lectus egestas. Purus a congue metus, vulputate ut enim. Rhoncus ultricies volutpat faucibus
            pretium, tortor scelerisque. Ut cursus proin cursus sit pretium nulla. Tincidunt nunc, tristique dolor vulputate id suspendisse pharetra nibh. Lorem scelerisque adipiscing donec facilisi
            aliquam. Commodo lacus vehicula ultricies interdum euismod massa mattis mus sapien. Sagittis risus, amet, tortor in neque fringilla tellus hac. Leo elit in tortor sit mi viverra sed
            adipiscing. Mi habitant arcu semper quisque. Felis potenti turpis commodo fames orci. Sed nullam elementum at donec aliquam orci cursus lorem. Mattis et morbi fermentum suspendisse viverra
            elit fermentum pellentesque adipiscing. Vestibulum, vitae orci netus nisl. Ornare lobortis nunc vulputate nulla. Ultricies lectus.
          </p>
        </PlainContainerTitle>

        {/* Docs */}
        <PlainContainerTitle title="Documents">
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] md:grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-[1.6rem] mt-[2.6rem]">
            <DocBox title={"Pitch Deck"}></DocBox>
            <DocBox title={"CAC"}></DocBox>
            <DocBox title={"CAC"}></DocBox>
            <DocBox title={"CAC"}></DocBox>
          </div>
        </PlainContainerTitle>
      </main>
    </AppLayout>
  );
};

export default ApplicationDetails;
