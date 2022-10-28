import { LoadingButton } from "@mui/lab";
import { Button } from "@mui/material";
import React, { useState } from "react";
import formatNumberWithCommas from "../../../../utils/addCommas";
import formatDate from "../../../../utils/formatDate";
import CurrencySymbol from "../../../general/CurrencySymbol";
import GreyBox from "../../../general/GreyBox";
import Hrule from "../../../general/Hrule";
import PaymentOptionsTabs from "../../../general/PaymentOptionsTabs";
import PopupLayout from "../../../layouts/PopupLayout";

const TextValue = ({ text, value, className }) => {
  return (
    <p className={`font-semibold text-[1.5rem] grid gap-[.3rem] ${className}`}>
      <span className=" text-label">{text}</span>
      <span className="text-pv_dark capitalize">{value}</span>
    </p>
  );
};

const SavingSummaryPopUp = ({ onClose = () => {}, onGoBack = () => {}, onReadSummary = () => {}, savingSummary = {} }) => {
  const [loading, setLoading] = useState(false);

  let filteredLoans = { ...savingSummary };
  if (!filteredLoans?.autoDebit) {
    delete filteredLoans?.debitDate;
    filteredLoans.savingFrequency = "Off";
  }
  if (filteredLoans?.savingType == "Fixed Savings") {
    delete filteredLoans?.savingFrequency;
  }

  delete filteredLoans.autoDebit;

  const determineDisplayValue = (key, val) => {
    if (key == "startDate") {
      return formatDate(val);
    }
    if (key == "debitDate") {
      return `${formatDate(val)}, ${new Date(val).toLocaleTimeString("en-us", { timeStyle: "short" })}`;
    }
    if (key == "amount") {
      return (
        <span>
          <CurrencySymbol className={" font-thin"} />
          {formatNumberWithCommas(val?.split(",")?.join(""))}
        </span>
      );
    }

    return val;
  };

  let nameAlias = {
    savingType: "Type",
    title: "Title",
    startDate: "Start Date",

    duration: "Duration",
    amount: filteredLoans.savingType == "Goal Savings" ? "Target Amount" : "Amount",
    // amountSavedPerTime: "",
    savingFrequency: "Auto Debit",
    debitDate: "Date/Time",
  };
  return (
    <PopupLayout onClose={onClose} title={"Summary"}>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] gap-8 mb-[2.4rem] items-start">
        {Object.entries(filteredLoans).map(([key, value], i) => {
          return <GreyBox key={i} title={nameAlias[key]} subTitle={determineDisplayValue(key, value)}></GreyBox>;
          // return <TextValue key={i} text={nameAlias[key]} value={determineDisplayValue(key, value)}></TextValue>;
        })}
      </div>
      <Hrule></Hrule>

      <Hrule className={"mb-[2.4rem]"}></Hrule>
      <PaymentOptionsTabs></PaymentOptionsTabs>
      <div className="grid gap-5 grid-flow-col mt-[2.7rem] items-center">
        <Button
          onClick={() => {
            onGoBack();
          }}
          variant={"outlined"}
        >
          Go Back
        </Button>
        <LoadingButton
          loading={loading}
          onClick={() => {
            onReadSummary({ setLoading });
          }}
        >
          Save
        </LoadingButton>
      </div>
    </PopupLayout>
  );
};

export default SavingSummaryPopUp;
