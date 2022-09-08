import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { CalendarPicker, LoadingButton } from "@mui/lab";
import { Dialog, Stack, TextField } from "@mui/material";
import PLVDesktopDatePicker from "../../../form-elements/PLVDesktopDatePicker";
// import PLVDesktopDatePicker from '../../../form-elements/PLVDesktopDatePicker';

const CreateFixedPlanModal = ({ activeTab, toggle, name }) => {
  const router = useRouter();
  const [passType, setPassType] = useState("password");
  const state = activeTab === name;
  return (
    <Dialog onClose={() => toggle("")} open={state}>
      <div className="pt-[2rem] pb-[3rem] rounded-[8px] md:w-[500px] w-full ">
        <div className="flex px-[4rem] items-end mb-8 ">
          <p>Create Fixed Plan</p>
          <span onClick={() => toggle("")} className="text text-[28px] text-black ml-[auto] cursor-pointer">
            &#215;
          </span>
        </div>
        <hr className="w-[100%] mx-[auto] my-[2rem] border-solid border border-gray-200" />
        <Stack gap={"3rem"} className="px-[4rem] items-center flex flex-col">
          <TextField name="id-savings" type={"text"} id="savings" label="Title of Savings" variant="filled" />

          <PLVDesktopDatePicker label="Start Date" />
          <PLVDesktopDatePicker label="End Date" />
          <TextField name="id-amount" type={"text"} id="Amount" label="Amount to be locked" variant="filled" />
          {/* <input type='date'  /> */}
          <div className="w-[100%]">
            <LoadingButton
              onClick={() => {
                // router.push("/signin");
              }}
              variant="contained"
            >
              Lock
            </LoadingButton>
          </div>
        </Stack>
      </div>
    </Dialog>
  );
};

export default CreateFixedPlanModal;
