import { TextField } from "@mui/material";
import React from "react";
import PLVMenu from "../../../form-elements/PLVMenu";
import PlainContainer from "../../../layouts/PlainContainer";

const PersonalInfo = () => {
  return (
    <PlainContainer>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-[1.7rem]">
        <TextField label="First name" name="First name" id="First name"></TextField>
        <TextField label="Middle Name (optional)" name="Middle Name (optional)" id="Middle Name (optional)"></TextField>
        <TextField label="Last name" name="Last name" id="Last name"></TextField>
        <TextField label="Email (optional)" name="Email (optional)" id="Email (optional)"></TextField>
        <TextField label="Address" name="Address" id="Address"></TextField>
        <PLVMenu items={["Gender"]}></PLVMenu>
        <PLVMenu items={["State"]}></PLVMenu>
        <TextField type={"number"} label="BVN" name="BVN" id="BVN"></TextField>
      </div>
    </PlainContainer>
  );
};

export default PersonalInfo;
