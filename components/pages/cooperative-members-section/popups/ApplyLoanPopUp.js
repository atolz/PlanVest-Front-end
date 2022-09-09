import { Button, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import PLVDesktopDatePicker from "../../../form-elements/PLVDesktopDatePicker";
import PLVMenu from "../../../form-elements/PLVMenu";
import Hrule from "../../../general/Hrule";
import TabFilled from "../../../general/TabFilled";
import PopupLayout from "../../../layouts/PopupLayout";

const ApplyLoanPopUp = ({ onClose, onApplyLoan = () => {} }) => {
  const [loanDuration, setLoanDuration] = useState("3 Months");
  const [repayment, setRepayment] = useState("Daily");
  const [loanType, setLoanType] = useState("Cooperate Loan");
  const onLoanDurationChange = (item) => {
    setLoanDuration(item);
  };
  const onRepaymentChange = (item) => {
    setRepayment(item);
  };
  const onLoanTypeChange = (item) => {
    setLoanType(item);
  };
  return (
    <PopupLayout title="Apply for Loan" onClose={onClose}>
      <form className="grid gap-[1.6rem]">
        <PLVMenu onChange={onLoanTypeChange} items={["Cooperate Loan", "Personal Loan"]} className=" bg-input"></PLVMenu>
        {loanType == "Cooperate Loan" && (
          <>
            <TextField id="Company Name" label="Company Name" name="Company Name" />
            <TextField id="Type of Business" label="Type of Business" name="Type of Business" />
            <TextField label="Business Description" name="Business Description" multiline={true} minRows={3} maxRows={6} />
          </>
        )}
        {loanType != "Cooperate Loan" && (
          <>
            <TextField label="Reason for loan" name="Reason for loan" multiline={true} minRows={3} maxRows={6} />
          </>
        )}
        <Hrule className={"mt-[1.4rem]"}></Hrule>

        <TextField
          InputProps={{
            startAdornment: <InputAdornment position="start">&#8358;</InputAdornment>,
            endAdornment: (
              <InputAdornment position="start">
                <span className="text-text">Max: 30,000,000</span>
              </InputAdornment>
            ),
          }}
          name="Loan Amount"
          type={"number"}
          id="Loan Amount"
          label="Loan Amount"
          variant="filled"
        />
        <PLVDesktopDatePicker label="Date Needed"></PLVDesktopDatePicker>
        <Hrule className={"my-[1.4rem]"}></Hrule>
        <TabFilled onChange={onLoanDurationChange} active={loanDuration} label={"Loan Duration"} items={["3 Months", "6 Months", "12 Months"]}></TabFilled>
        <TabFilled onChange={onRepaymentChange} active={repayment} label={"Repayments"} items={["Daily", "Weekly", "Monthly"]}></TabFilled>
        <Button
          onClick={() => {
            onApplyLoan();
          }}
          sx={{ mt: 3 }}
        >
          Next
        </Button>
      </form>
    </PopupLayout>
  );
};

export default ApplyLoanPopUp;
