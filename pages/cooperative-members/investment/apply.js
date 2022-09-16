import { TextField } from "@mui/material";
import React, { useState } from "react";
import PLVDesktopDatePicker from "../../../components/form-elements/PLVDesktopDatePicker";
import PLVMenu from "../../../components/form-elements/PLVMenu";
import GoBack from "../../../components/general/GoBack";
import Hrule from "../../../components/general/Hrule";
import Upload from "../../../components/general/Upload";
import AppLayout from "../../../components/layouts/AppLayout";
import PlainContainer from "../../../components/layouts/PlainContainer";
import { motion } from "framer-motion";

const Apply = () => {
  const [uploadedImgsUrls, setUploadedImgsUrls] = useState([]);
  return (
    <AppLayout>
      <GoBack name={"Application"} link={"/cooperative-members/investment/applications"}></GoBack>
      <PlainContainer className={"mt-[3rem]"}>
        <div className="grid grid-flow-row md:grid-cols-3 gap-[1.6rem]">
          <TextField className=" col-span-3 md:col-span-3" label="Company Name" name="Company Name" id="Company Name"></TextField>
          <div className=" col-span-3 grid grid-cols-2 gap-[1.6rem]">
            <TextField className=" col-span-2 md:col-span-1" label="Title of Investment" name="Title of Investment" id="Title of Investment"></TextField>
            <TextField className=" col-span-2 md:col-span-1" label="ROI (%)" name="ROI (%)" id="ROI (%)"></TextField>
          </div>
          <PLVDesktopDatePicker className=" col-span-3 md:col-span-1" label="Start Date"></PLVDesktopDatePicker>
          <PLVDesktopDatePicker className=" col-span-3 md:col-span-1" label="End Date"></PLVDesktopDatePicker>
          <PLVDesktopDatePicker className=" col-span-3 md:col-span-1" label="Establishment Date"></PLVDesktopDatePicker>
          <PLVMenu className=" col-span-3 md:col-span-1" items={["Location"]}></PLVMenu>
          <PLVMenu className=" col-span-3 md:col-span-1" items={["Duration"]}></PLVMenu>
          <PLVMenu className=" col-span-3 md:col-span-1" items={["Category"]}></PLVMenu>
          <TextField className=" col-span-3 md:col-span-1" type={"number"} label="Target Amount" name="Target Amount" id="Target Amount"></TextField>
          <TextField className=" col-span-3 md:col-span-1" type={"number"} label="Available Unit" name="Available Unit" id="Available Unit"></TextField>
          <TextField className=" col-span-3 md:col-span-1" type={"number"} label="Amount Per Unit" name="Amount Per Unit" id="Amount Per Unit"></TextField>
          <TextField className=" col-span-3 md:col-span-3" rows={8} multiline={true} label="Description" name="Description" id="Description"></TextField>
        </div>
        <Hrule className={"my-[2.4rem]"}></Hrule>

        {/* Upload Images */}
        <p className="my-[2.4rem] text-pv_dark font-medium">Upload Images</p>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(239px,_1fr))] gap-[1.6rem]">
          {uploadedImgsUrls?.map((url, i) => {
            return (
              <motion.img
                initial={{ x: "-10px" }}
                animate={{ x: 0, transition: "all", animationDelay: "10s" }}
                className="h-[23.9rem] w-full object-cover rounded-primary"
                alt="uploads"
                key={Math.random()}
                src={url}
              />
            );
          })}
          <Upload
            onUpload={(fileObjs, fileUrls) => {
              setUploadedImgsUrls(fileUrls);
            }}
            boxClassName={"h-[23.9rem] !p-[6.7rem]"}
          ></Upload>
        </div>

        {/* Document */}
        <p className="my-[2.4rem] text-pv_dark font-medium">Document</p>
      </PlainContainer>
    </AppLayout>
  );
};

export default Apply;
