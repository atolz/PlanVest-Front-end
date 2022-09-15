import { Button, TextField } from "@mui/material";
import React from "react";
import PLVMenu from "../../../form-elements/PLVMenu";
import PlainContainer from "../../../layouts/PlainContainer";

const NextOfKin = () => {
  return (
    <>
      <PlainContainer className={"mb-[3.2rem]"}>
        <div className="grid  gap-[1.7rem]">
          <TextField label="Full Name" name="Full Name" id="Full Name"></TextField>
          <TextField label="Email " name="Email " id="Email "></TextField>
          <TextField label="Address" name="Address" id="Address"></TextField>
          <PLVMenu items={["Location"]}></PLVMenu>
          <PLVMenu items={["Relationship"]}></PLVMenu>
          <TextField type={"number"} label="BVN" name="BVN" id="BVN"></TextField>
        </div>
      </PlainContainer>
      <Button className="max-w-[20.6rem]">Update</Button>
    </>
  );
};

export default NextOfKin;
