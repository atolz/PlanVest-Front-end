import { Button, TextField } from "@mui/material";
import React from "react";
import PLVMenu from "../../../form-elements/PLVMenu";
import PlainContainer from "../../../layouts/PlainContainer";

const PersonalInfo = () => {
  return (
    <div className="grid gap-[1.6rem]">
      <PlainContainer className={" p-[3.6rem]"}>
        <div className="flex items-center">
          <div className="w-[8.1rem] h-[8.1rem] rounded-full bg-pv_bg  mr-[4rem]"></div>
          <Button className="mr-[3.2rem] w-[15.3rem] h-[4.1rem]">Upload New</Button>
          <Button variant="outlined" color="error" className="mr-[8rem] w-[12.2rem] hover:bg-transparent h-[4.1rem]">
            Delete
          </Button>
          <p className="text-text text-[1.6rem] ">Upload image files with extensions jpg.png.gif or svg</p>
        </div>
      </PlainContainer>
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
    </div>
  );
};

export default PersonalInfo;
