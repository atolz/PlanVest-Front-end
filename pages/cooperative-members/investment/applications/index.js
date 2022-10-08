import { Button, Dialog } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import TabLight from "../../../../components/general/TabLight";
import TabLightV2 from "../../../../components/general/TabLightV2";
import AppLayout from "../../../../components/layouts/AppLayout";
import MobileContainer from "../../../../components/layouts/MobileContainer";
import ApplicationCard from "../../../../components/pages/cooperative-members-section/investment/ApplicationCard";
import LoanCard from "../../../../components/pages/cooperative-members-section/loan/LoanCard";

const Applications = () => {
  const router = useRouter();
  const applications = [
    {
      name: "Business Name",
      desc: "Sambara farms is a livestock farm. We rear cows, goats, sheeps and have a poultry.",
      status: "Active",
      amountRequested: "10%",
      dateRequested: "23/05/2022",
    },
    {
      name: "Business Name",
      desc: "Sambara farms is a livestock farm. We rear cows, goats, sheeps and have a poultry.",
      status: "Pending",
      amountRequested: "10%",
      dateRequested: "23/05/2022",
    },
    {
      name: "Business Name",
      desc: "Sambara farms is a livestock farm. We rear cows, goats, sheeps and have a poultry.",
      status: "Completed",
      amountRequested: "10%",
      dateRequested: "23/05/2022",
    },
    {
      name: "Business Name",
      desc: "Sambara farms is a livestock farm. We rear cows, goats, sheeps and have a poultry.",
      status: "Declined",
      amountRequested: "10%",
      dateRequested: "23/05/2022",
    },
  ];
  const [filteredApplications, setFilteredApplications] = useState(applications);
  const filterLoans = (status) => {
    return applications?.filter((app) => {
      return app?.status?.includes(status);
    });
  };
  const onApplicationTypeChange = (item) => {
    if (item.includes("All")) {
      return setFilteredApplications(applications);
    }
    const formattedItem = item?.split(" ")[0];
    console.log("item is", formattedItem);
    const newFilter = filterLoans(formattedItem);
    setFilteredApplications(newFilter);
  };
  const [page, setPage] = useState("Applications");

  return (
    <>
      <AppLayout>
        <MobileContainer>
          <div className="flex items-center flex-wrap justify-between mb-[3rem]">
            <TabLightV2
              onChange={(item) => {
                item != "Applications" && router.push("/cooperative-members/investment/plans");
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
            onChange={onApplicationTypeChange}
            items={[
              `All (${applications?.length})`,
              `Pending (${filterLoans("Pending")?.length})`,
              `Active (${filterLoans("Active")?.length})`,
              `Declined (${filterLoans("Declined")?.length})`,
              `Completed (${filterLoans("Completed")?.length})`,
            ]}
          ></TabLight>
          <div className="mt-[3.2rem] grid grid-cols-[repeat(auto-fill,_minmax(230px,_1fr))] md:grid-cols-[repeat(auto-fill,_minmax(330px,_1fr))] gap-[1.6rem]">
            {filteredApplications?.map((application, i) => {
              return <ApplicationCard application={application} key={i}></ApplicationCard>;
            })}
          </div>
        </MobileContainer>
      </AppLayout>
    </>
  );
};

export default Applications;
