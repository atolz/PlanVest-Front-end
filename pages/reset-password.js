import React, { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { TextField } from "@mui/material";
import OnboardingLayout from "../components/layouts/OnboardingLayout";
import ShowPassword from "../components/form-elements/ShowPassword";
import { useRouter } from "next/router";
import Link from "next/link";

const ResetPassword = () => {
  const [passType, setPassType] = useState("password");
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <OnboardingLayout>
      <div className="max-w-[49.2rem] w-full  h-full flex flex-col justify-center overflow-scroll scroll_hide ">
        <h2 className="mb-[1rem] text-[2.4rem] text-text">Reset Password</h2>
        <p className="mb-[3.2rem] text-label">Password must contain atleast 8 characters with a number.</p>
        <form className="grid gap-[1.9rem]">
          <input name="email" type="email" className=" hidden" />
          <input name="password" type="password" className=" hidden" />

          <TextField
            name="New Password"
            InputProps={{
              endAdornment: (
                <ShowPassword
                  onChange={(type) => {
                    setPassType(type);
                  }}
                ></ShowPassword>
              ),
            }}
            type={passType}
            id="New Password"
            label="New Password"
            variant="filled"
          />
          <TextField
            name="Confirm Password"
            InputProps={{
              endAdornment: (
                <ShowPassword
                  onChange={(type) => {
                    setPassType(type);
                  }}
                ></ShowPassword>
              ),
            }}
            type={passType}
            id="Confirm Password"
            label="Confirm Password"
            variant="filled"
          />

          <LoadingButton
            onClick={() => {
              setLoading(!loading);
              console.log("in loading");
              setTimeout(() => {
                setLoading(false);
                router.push("/signin");
              }, 3000);
            }}
            loading={loading}
            variant="contained"
            sx={{ marginTop: "14px" }}
          >
            Save
          </LoadingButton>
        </form>
      </div>
    </OnboardingLayout>
  );
};

export default ResetPassword;
