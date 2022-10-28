import { Button, Dialog } from "@mui/material";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import TabLight from "../../../../components/general/TabLight";
import TabLightV2 from "../../../../components/general/TabLightV2";
import AppLayout from "../../../../components/layouts/AppLayout";
import MobileContainer from "../../../../components/layouts/MobileContainer";
import PlanCard from "../../../../components/pages/cooperative-members-section/investment/PlanCard";
import LoanCard from "../../../../components/pages/cooperative-members-section/loan/LoanCard";
import { MembersContext } from "../../../../context/MembersProvider";
import useFetchDataBuildHashStoreToState from "../../../../hooks/useFetchDataBuildHashStoreToState";
import { getAllInvestment } from "../../../../services/cooperative-members.js";

const Plans = () => {
  const router = useRouter();
  const { allInvestments, setAllInvestments } = useContext(MembersContext);
  const { fetchDataBuildHashStoreToState } = useFetchDataBuildHashStoreToState(getAllInvestment, setAllInvestments);
  const plans = [
    {
      name: "Cashew Nut Investment",
      return: "60%",
      duration: "3 months",
      status: "Moderate",
      amountRequested: "N300,000",
      investors: "1223",
      type: "Agriculture",
    },
    {
      name: "Hyper Loop Investment",
      return: "10%",
      duration: "5 months",
      status: "Aggressive",
      amountRequested: "N300,000",
      investors: "999",
      type: "Transportation",
    },
    {
      name: "New Paradise Investment",
      return: "5%",
      duration: "10 months",
      status: "Moderate",
      amountRequested: "N300,000",
      investors: "777",
      type: "Real Estate",
    },
    {
      name: "Tomato Investment",
      return: "70%",
      duration: "12 months",
      status: "Conservative",
      amountRequested: "N300,000",
      investors: "20",
      type: "Agriculture",
    },
  ];
  const [filter, setFilter] = useState(`All (${plans?.length})`);
  const filteredInvestments = plans?.filter((inv) => {
    console.log(filter);
    return filter.includes("All") ? true : filter?.includes(inv?.type);
  });
  const filterPlans = (type) => {
    return plans?.filter((app) => {
      return app?.type?.includes(type);
    });
  };
  const [page, setPage] = useState("Investment Plans");

  useEffect(() => {
    fetchDataBuildHashStoreToState();
  }, []);

  return (
    <>
      <AppLayout>
        <MobileContainer>
          <div className="flex items-center flex-wrap justify-between mb-[3rem]">
            <TabLightV2
              onChange={(item) => {
                item != "Investment Plans" && router.push("/cooperative-members/investment/applications");
              }}
              active={page}
              items={["Applications", "Investment Plans"]}
            ></TabLightV2>
            <Button
              onClick={() => {
                router.push("/cooperative-members/investment/apply");
              }}
              sx={{ maxWidth: "18.3rem" }}
            >
              Apply
            </Button>
          </div>
          <TabLight
            active={filter}
            onChange={(item) => {
              setFilter(item);
            }}
            items={[
              `All (${plans?.length})`,
              `Fixed Income (${filterPlans("Fixed Income")?.length})`,
              `Real Estate (${filterPlans("Real Estate")?.length})`,
              `Agriculture (${filterPlans("Agriculture")?.length})`,
              `Transportation (${filterPlans("Transportation")?.length})`,
            ]}
          ></TabLight>
          <div className="mt-[3.2rem] grid grid-cols-[repeat(auto-fill,_minmax(230px,_1fr))] md:grid-cols-[repeat(auto-fill,_minmax(330px,_1fr))] gap-[1.6rem]">
            {filteredInvestments?.map((plan, i) => {
              return <PlanCard plan={plan} key={i}></PlanCard>;
            })}
          </div>
        </MobileContainer>
      </AppLayout>
    </>
  );
};

export default Plans;
