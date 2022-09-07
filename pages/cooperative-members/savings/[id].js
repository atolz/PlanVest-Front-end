import Link from "next/link";
import { Router, useRouter } from "next/router";
import React from "react";
import SvgIconWrapper from "../../../components/general/SvgIconWrapper";
import AppLayout from "../../../components/layouts/AppLayout";
import Details from "../../../components/pages/cooperative-members-section/savings/Details";
import SavingsInfo from "../../../components/pages/cooperative-members-section/savings/SavingsInfo";
import StatActionBox from "../../../components/pages/cooperative-members-section/savings/StatActionBox";
import Transactions from "../../../components/pages/cooperative-members-section/savings/Transactions";

const SavingDetails = () => {
  const router = useRouter();

  return (
    <AppLayout>
      <Link href={"/cooperative-members/savings/"}>
        <a className=" items-center cursor-pointer inline-flex">
          <SvgIconWrapper className={"!h-[1.2rem]"} iconName={"arrow-filled "}></SvgIconWrapper>
          <p className=" font-rubik text-pv_dark text-[2.2rem] ml-[2.7rem]">{router?.query?.id}</p>
        </a>
      </Link>

      <main className="mt-[4.2rem] grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] 2xl:grid-cols-[1.5fr,_1fr] gap-[2.4rem]">
        <div>
          <StatActionBox></StatActionBox>
          <Transactions></Transactions>
        </div>
        <div>
          <SavingsInfo></SavingsInfo>
          <Details></Details>
        </div>
      </main>
    </AppLayout>
  );
};

export default SavingDetails;
