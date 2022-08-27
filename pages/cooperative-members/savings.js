import { Button, Dialog, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import PLVDesktopDatePicker from "../../components/form-elements/PLVDesktopDatePicker";
import PLVMenu from "../../components/form-elements/PLVMenu";
import Switch from "@mui/material/Switch";
import ShowPassword from "../../components/form-elements/ShowPassword";
import Hrule from "../../components/general/Hrule";
import SwitcherLight from "../../components/general/PLVTabLight";
import AppLayout from "../../components/layouts/AppLayout";
import PopupLayout from "../../components/layouts/PopupLayout";
import PLVSwitch from "../../components/general/PLVSwitch";

const Savings = () => {
  const [open, setOpen] = useState(false);
  const [autoSave, setAutoSave] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <AppLayout>
      <Dialog scroll="body" sx={{ boxShadow: "none" }} onClose={handleClose} open={open}>
        <PopupLayout
          title="Create Plan"
          onClose={() => {
            setOpen(false);
          }}
        >
          <form className="grid gap-[1.6rem]">
            <input name="email" type="email" className=" hidden" />
            <input name="password" type="password" className=" hidden" />
            <PLVMenu className=" bg-input"></PLVMenu>
            <TextField name="id-Emaile" type={"email"} id="Email" label="Email" variant="filled" />
            <PLVDesktopDatePicker label="Start date"></PLVDesktopDatePicker>
            <PLVDesktopDatePicker label="End date"></PLVDesktopDatePicker>
            <TextField
              InputProps={{
                startAdornment: <InputAdornment position="start">&#8358;</InputAdornment>,
                sx: { "&.MuiFilledInput-input": { paddingLeft: "0" } },
              }}
              name="id-amount"
              type={"number"}
              id="amount"
              label="amount"
              variant="filled"
            />
            <PLVMenu className=" bg-input"></PLVMenu>
            <Hrule className={"mt-[1.4rem]"}></Hrule>
            <div className="flex items-center justify-between">
              <p className=" text-label text-[1.6rem]">Auto debit option</p>

              <PLVSwitch
                label={autoSave ? "On" : "Off"}
                checked={autoSave}
                onChange={() => {
                  setAutoSave(!autoSave);
                }}
                inputProps={{ "aria-label": "controlled" }}
              ></PLVSwitch>
            </div>
            <TextField
              InputProps={{
                startAdornment: <InputAdornment position="start">&#8358;</InputAdornment>,
                sx: { "&.MuiFilledInput-input": { paddingLeft: "0" } },
              }}
              name="Amount to save per time"
              type={"number"}
              id="Amount to save per time"
              label="Amount to save per time"
              variant="filled"
            />
            <PLVDesktopDatePicker label="Select debit date"></PLVDesktopDatePicker>
            <Button
              onClick={() => {
                setOpen(false);
              }}
              variant="contained"
              sx={{ mt: 3 }}
            >
              Create
            </Button>
          </form>
        </PopupLayout>
      </Dialog>
      <div className="flex items-center justify-between">
        <SwitcherLight items={["Goal Saving", "Fixed Saving", "Group Saving"]}></SwitcherLight>
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
    </AppLayout>
  );
};

export default Savings;
