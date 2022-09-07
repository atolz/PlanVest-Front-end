import { LoadingButton } from "@mui/lab";
import { Button } from "@mui/material";
import React, { useState } from "react";
import PopupLayout from "../../../layouts/PopupLayout";

const EnterPinPopUp = ({ actionText, onAction, onCancel = () => {} }) => {
  const [loading, setLoading] = useState(false);
  return (
    <PopupLayout withBorder={false} title="">
      <div className="grid place-items-center">
        <p className=" text-text text-[1.7rem]">Enter your transaction pin</p>
        <img height={175} className="mt-[3rem]" src={"/key-lock.png"}></img>
        <LoadingButton
          loading={loading}
          onClick={() => {
            onAction({ setLoading });
          }}
          sx={{ mt: "4rem" }}
        >
          {actionText}
        </LoadingButton>
      </div>
    </PopupLayout>
  );
};

export default EnterPinPopUp;
