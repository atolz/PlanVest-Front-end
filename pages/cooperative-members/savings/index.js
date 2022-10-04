import { Button, Dialog, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import PLVDesktopDatePicker from "../../../components/form-elements/PLVDesktopDatePicker";
import PLVMenu from "../../../components/form-elements/PLVMenu";
import Hrule from "../../../components/general/Hrule";
import AppLayout from "../../../components/layouts/AppLayout";
import PopupLayout from "../../../components/layouts/PopupLayout";
import PLVSwitch from "../../../components/general/PLVSwitch";
import SavingsTypeCard from "../../../components/pages/cooperative-members-section/savings/SavingsTypeCard";
import SavingDetails from "../../../components/pages/cooperative-members-section/savings/SavingDetails";
import { useRouter } from "next/router";
import TabLight from "../../../components/general/TabLight";
import CreateSavingsPopup from "../../../components/pages/cooperative-members-section/popups/CreateSavingsPopUp";

const Savings = () => {
  const [open, setOpen] = useState(false);
  const [autoSave, setAutoSave] = useState(false);
  const [showSavingDetails, setShowSavingDetails] = useState(false);
  const router = useRouter();
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <AppLayout>
      <Dialog scroll="body" sx={{ boxShadow: "none" }} onClose={handleClose} open={open}>
        <CreateSavingsPopup onClose={handleClose}></CreateSavingsPopup>
      </Dialog>

      <div className="flex items-center justify-between">
        <TabLight items={["Goal Saving", "Fixed Saving", "Group Saving"]}></TabLight>
        <Button
          onClick={() => {
            setOpen(true);
          }}
          sx={{ maxWidth: "18.3rem" }}
          variant="contained"
        >
          Create Plan
        </Button>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] lg:grid-cols-[repeat(2,_minmax(300px,_1fr))] gap-[2.7rem] mt-[3.2rem]">
        <SavingsTypeCard
          onClick={() => {
            router.push("/cooperative-members/savings/Agro-Allied Savings");
          }}
          amount={"N60,0000"}
          type={"Agro-Allied"}
          status={"Ongoing"}
          className="bg-[rgba(181,72,198,0.26)] cursor-pointer"
        ></SavingsTypeCard>
        <SavingsTypeCard
          onClick={() => {
            router.push("/cooperative-members/savings/Agro-Allied Savings");
          }}
          amount={"N40,0000"}
          type={"Agro-Allied"}
          status={"Ongoing"}
          className="bg-[rgba(58,117,236,0.24)] cursor-pointer"
        ></SavingsTypeCard>
        <SavingsTypeCard
          onClick={() => {
            router.push("/cooperative-members/savings/Agro-Allied Savings");
          }}
          amount={"N500,0000"}
          type={"Agro-Allied"}
          status={"Ongoing"}
          className="bg-[rgba(255,115,21,0.22)] cursor-pointer"
        ></SavingsTypeCard>
      </div>

      {/* {showSavingDetails && (
        <SavingDetails
          onClose={() => {
            setShowSavingDetails(false);
          }}
          title={"Agro-Allied Savings"}
        ></SavingDetails>
      )} */}
    </AppLayout>
  );
};

export default Savings;
