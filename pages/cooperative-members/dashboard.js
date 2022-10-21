import React, { useContext, useEffect, useRef, useState } from "react";
import AppLayout from "../../components/layouts/AppLayout";
import PLVMenu from "../../components/form-elements/PLVMenu";
import PlainContainer from "../../components/layouts/PlainContainer";
import PlainContainerTitle from "../../components/layouts/PlainContainerTitle";
import StatCard from "../../components/cards/StatCard";
import SavingAnalytics from "../../components/pages/cooperative-members-section/dashboard/SavingAnalytics";
import InvestApplication from "../../components/pages/cooperative-members-section/dashboard/InvestApplication";
import LoanApplication from "../../components/pages/cooperative-members-section/dashboard/LoanApplication";
import { AuthContext } from "../../context/AuthContextProvider";
import MobileContainer from "../../components/layouts/MobileContainer";
import CurrencySymbol from "../../components/general/CurrencySymbol";
import formatNumberWithCommas from "../../utils/addCommas";
import { MembersContext } from "../../context/MembersProvider";
import { getUserDashboard } from "../../services/cooperative-members.js";

const Dashboard = () => {
  // let stats = [
  //   { title: "Repayment Balance", value: "N300,000" },
  //   { title: "Total Loan", value: "0" },
  //   { title: "Total Loan", value: "0" },
  // ];
  const { user } = useContext(AuthContext);
  const { setUserDashboard, userDashboard } = useContext(MembersContext);
  const hasFetched = useRef(false);
  const [prev, setPrev] = useState(1);

  const getSetUserDashboard = async () => {
    const respData = await getUserDashboard();
    console.log(respData);
    if (respData.status) {
      setUserDashboard(respData?.data);
    }
  };

  useEffect(() => {
    console.log("Preve state is ", prev);
    setPrev((val) => val + 1);
    if (!hasFetched.current) {
      getSetUserDashboard();
      hasFetched.current = true;
    }

    return () => {
      console.log("unmounts");
    };
  }, []);
  return (
    <AppLayout>
      <div className=" bg-white md:bg-transparent mb-[1.2rem] md:mb-[3.2rem] py-[1.5rem] md:py-0">
        <MobileContainer>
          <div className="flex items-center mb-[2.5rem] md:mb-[4rem] flex-wrap gap-[1rem]">
            <div className="mr-auto">
              <h2 className="mb-[5px] md:mb-[1.6rem] text-[18px] md:text-[2.4rem]">Welcome Back {user?.cooperativeName?.split(" ")[0] ?? user?.firstName ?? "Guest"} 👋🏼</h2>
              <p className="body_1">Your current status and analytics are here</p>
            </div>
            <PLVMenu className=" hidden md:flex md:bg-white max-w-[20.8rem] pl-[2rem]" items={["Monthly", "Weekly"]}></PLVMenu>
          </div>
        </MobileContainer>
        <MobileContainer className={" pr-0"}>
          <section className="grid grid-flow-col gap-[1.54rem] overflow-x-scroll  scroll_hide ">
            <StatCard
              className={""}
              bgColor="linear-gradient(263.28deg, #2A9D8F 1.44%, #2A9D8F 1.45%, #41C768 100%)"
              title={"Amount saved"}
              value={
                <span>
                  <CurrencySymbol />
                  &nbsp;
                  {formatNumberWithCommas(0)}
                </span>
              }
            ></StatCard>
            <StatCard
              bgColor="linear-gradient(263.32deg, #051EA4 0.96%, #1A8EF0 100%)"
              title={"Amount invested"}
              value={
                <span>
                  <CurrencySymbol />
                  &nbsp;
                  {formatNumberWithCommas(0)}
                </span>
              }
            ></StatCard>
            <StatCard bgColor="linear-gradient(263.39deg, #9811AD 0%, #E363D6 100%)" title={"Total Loan"} value={"0"}></StatCard>
            <StatCard
              bgColor="linear-gradient(263.39deg, #230B34 0%, #8B31CA 100%)"
              title={"Repayment Balance"}
              value={
                <span>
                  <CurrencySymbol />
                  &nbsp;
                  {formatNumberWithCommas(0)}
                </span>
              }
            ></StatCard>
          </section>
        </MobileContainer>
      </div>

      <section className="grid md:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-[1.2rem] md:gap-[3.7rem]">
        <SavingAnalytics></SavingAnalytics>

        <div className="">
          <InvestApplication className={"mb-[1.2rem] md:mb-[3rem]"}></InvestApplication>
          <LoanApplication></LoanApplication>
        </div>
      </section>
    </AppLayout>
  );
};

export default Dashboard;
