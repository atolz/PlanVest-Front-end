import React, { useContext } from "react";
import AppLayout from "../../components/layouts/AppLayout";
import PLVMenu from "../../components/form-elements/PLVMenu";
import PlainContainer from "../../components/layouts/PlainContainer";
import PlainContainerTitle from "../../components/layouts/PlainContainerTitle";
import StatCard from "../../components/cards/StatCard";
import SavingAnalytics from "../../components/pages/cooperative-members-section/dashboard/SavingAnalytics";
import InvestApplication from "../../components/pages/cooperative-members-section/dashboard/InvestApplication";
import LoanApplication from "../../components/pages/cooperative-members-section/dashboard/LoanApplication";
import { AuthContext } from "../../context/AuthContextProvider";

const Dashboard = () => {
  // let stats = [
  //   { title: "Repayment Balance", value: "N300,000" },
  //   { title: "Total Loan", value: "0" },
  //   { title: "Total Loan", value: "0" },
  // ];
  const { user } = useContext(AuthContext);
  return (
    <AppLayout>
      <div className="flex items-center mb-[4rem]">
        <div>
          <h2 className="h2 mb-[1.6rem]">Welcome Back {user?.cooperativeName?.split(" ")[0] ?? user?.firstName ?? "Guest"} 👋🏼</h2>
          <p className="body_1">Your current status and analytics are here</p>
        </div>
        <PLVMenu className="ml-auto bg-white max-w-[20.8rem] pl-[3.2rem]" items={["Monthly", "Weekly"]}></PLVMenu>
      </div>
      <section className="grid grid-flow-col gap-[1.54rem] overflow-x-scroll  scroll_hide mb-[3.2rem]">
        <StatCard className={"h-[13.7rem]"} bgColor="linear-gradient(263.28deg, #2A9D8F 1.44%, #2A9D8F 1.45%, #41C768 100%)" title={"Amount saved"} value={"N500,000"}></StatCard>
        <StatCard bgColor="linear-gradient(263.32deg, #051EA4 0.96%, #1A8EF0 100%)" title={"Amount invested"} value={"N200,000"}></StatCard>
        <StatCard bgColor="linear-gradient(263.39deg, #9811AD 0%, #E363D6 100%)" title={"Total Loan"} value={"0"}></StatCard>
        <StatCard bgColor="linear-gradient(263.39deg, #230B34 0%, #8B31CA 100%)" title={"Repayment Balance"} value={"N300,000"}></StatCard>
      </section>
      <section className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-[3.7rem]">
        <SavingAnalytics></SavingAnalytics>

        <div className="">
          <InvestApplication className={"mb-[3rem]"}></InvestApplication>
          <LoanApplication></LoanApplication>
        </div>
      </section>
    </AppLayout>
  );
};

export default Dashboard;
