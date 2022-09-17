import { Button, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import useHandleFileUpload from "../../../../hooks/useHandleFileUpload";
import PLVMenu from "../../../form-elements/PLVMenu";
import PLVRadio from "../../../form-elements/PLVRadio";
import SvgIconWrapper from "../../../general/SvgIconWrapper";
import Upload from "../../../general/Upload";
import PlainContainer from "../../../layouts/PlainContainer";

const PersonalInfo = () => {
  const { fileObjs, fileUrls, fileInputRef, handleFileUpload, filePickerTrigger } = useHandleFileUpload();
  const [idType, setIdType] = useState("NIN");
  const [uploadedImgsUrls, setUploadedImgsUrls] = useState([]);

  return (
    <div className="grid gap-[1.6rem]">
      <PlainContainer className={" p-[3.6rem]"}>
        <div className="flex items-center flex-wrap gap-[1rem]">
          {fileUrls[0] ? (
            <img className="w-[8.1rem] h-[8.1rem] rounded-full bg-pv_bg  mr-[4rem] object-cover" alt="profile-picture" src={fileUrls[0]}></img>
          ) : (
            <div className="w-[8.1rem] h-[8.1rem] rounded-full bg-pv_bg  mr-[4rem]"></div>
          )}
          <input ref={fileInputRef} className=" hidden" multiple={true} onChange={handleFileUpload} id={"file-upload"} type={"file"}></input>
          <Button startIcon={<SvgIconWrapper className={"!w-[2rem] !h-[2rem]"} iconName={"add-circle"}></SvgIconWrapper>} onClick={filePickerTrigger} className="mr-[3.2rem] w-[15.3rem] h-[4.1rem]">
            Upload New
          </Button>
          <Button variant="outlined" color="error" className="mr-[8rem] w-[12.2rem] hover:bg-transparent h-[4.1rem]">
            Delete
          </Button>
          <p className="text-text text-[1.6rem] ">Upload image files with extensions jpg.png.gif or svg</p>
        </div>
      </PlainContainer>

      {/* Form Main */}
      <PlainContainer>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-[1.7rem]">
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

      {/* ID */}
      <PlainContainer>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-[1rem] mb-[1.6rem]">
          {["NIN", "Drivers Lincense", "Passport", "Voters Card Back"].map((el, i) => {
            return (
              <div
                onClick={() => {
                  setIdType(el);
                  setUploadedImgsUrls([]);
                }}
                className="h-[5.6rem] rounded-primary bg-pv_bg flex items-center justify-between p-[1.6rem] cursor-pointer"
                key={i}
              >
                <span className="text-label text-[1.6rem]">{el}</span>
                <PLVRadio isChecked={idType == el}></PLVRadio>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-2 gap-[1.6rem]">
          {uploadedImgsUrls[0] && <img className="h-[14.9rem] w-full object-cover rounded-primary" alt="uploads" src={uploadedImgsUrls[0]} />}
          <Upload
            onUpload={(fileObjs, fileUrls) => {
              setUploadedImgsUrls(fileUrls);
            }}
            boxClassName={"!h-[14.9rem] "}
            caption={<span>Click this area to upload {idType}</span>}
          ></Upload>
        </div>
      </PlainContainer>
      <Button className="max-w-[20.6rem] mt-[2rem]">Update</Button>
    </div>
  );
};

export default PersonalInfo;
