import { Button } from "@mui/material";
import React, { useState } from "react";
import TabLight from "../../../components/general/TabLight";
import TabLightV2 from "../../../components/general/TabLightV2";
import AppLayout from "../../../components/layouts/AppLayout";
import LoanCard from "../../../components/pages/cooperative-members-section/loan/LoanCard";

const Loan = () => {
  const loans = [
    {
      name: "Business Loan",
      desc: "Sambara farms is a livestock farm. We rear cows, goats, sheeps and have a poultry.",
      status: "Active",
      amountRequested: "N300,000",
      dateRequested: "23/05/2022",
    },
    {
      name: "Company Loan",
      desc: "Sambara farms is a livestock farm. We rear cows, goats, sheeps and have a poultry.",
      status: "Pending",
      amountRequested: "N300,000",
      dateRequested: "23/05/2022",
    },
    {
      name: "KFC Loan",
      desc: "Sambara farms is a livestock farm. We rear cows, goats, sheeps and have a poultry.",
      status: "Completed",
      amountRequested: "N300,000",
      dateRequested: "23/05/2022",
    },
    {
      name: "Sony Loan",
      desc: "Sambara farms is a livestock farm. We rear cows, goats, sheeps and have a poultry.",
      status: "Declined",
      amountRequested: "N300,000",
      dateRequested: "23/05/2022",
    },
  ];
  const [filteredLoans, setFilteredLoans] = useState(loans);
  const filterLoans = (status) => {
    return loans?.filter((loan) => {
      return loan?.status?.includes(status);
    });
  };
  const onLoanTypeChange = (item) => {
    if (item.includes("All")) {
      return setFilteredLoans(loans);
    }
    const formattedItem = item?.split(" ")[0];
    console.log("item is", formattedItem);
    const newFilter = filterLoans(formattedItem);
    setFilteredLoans(newFilter);
  };
  return (
    <AppLayout>
      <div className="flex items-center flex-wrap justify-between mb-[3rem]">
        <TabLightV2 items={["Personal Loans", "Corporate Loans"]}></TabLightV2>
        <Button
          onClick={() => {
            setOpen(true);
          }}
          sx={{ maxWidth: "18.3rem" }}
        >
          Check Eligibility
        </Button>
      </div>
      <TabLight
        onChange={onLoanTypeChange}
        items={[
          `All (${loans?.length})`,
          `Pending (${filterLoans("Pending")?.length})`,
          `Active (${filterLoans("Active")?.length})`,
          `Declined (${filterLoans("Declined")?.length})`,
          `Completed (${filterLoans("Completed")?.length})`,
        ]}
      ></TabLight>
      <div className="mt-[3.2rem] grid grid-cols-[repeat(auto-fill,_minmax(330px,_1fr))] gap-[1.6rem]">
        {filteredLoans?.map((loan, i) => {
          return <LoanCard loan={loan} key={i}></LoanCard>;
        })}
      </div>
    </AppLayout>
  );
};

export default Loan;
