import React, { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { TextField } from "@mui/material";
import OnboardingLayout from "../components/layouts/OnboardingLayout";
import ShowPassword from "../components/form-elements/ShowPassword";
import { useRouter } from "next/router";
import Link from "next/link";

const Signin = () => {
  const [passType, setPassType] = useState("password");
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <OnboardingLayout>
      <div className="max-w-[49.2rem] w-full  h-full flex flex-col justify-center overflow-scroll scroll_hide ">
        <img width={80} className="h-auto self-center mb-[3.2rem]" src="/question-lock.png"></img>
        <p className="mb-[4.2rem] text-label font-medium leading-[3rem] text-[1.8rem] text-center">Enter your phone number or registered email address with planvest to reset your password</p>
        <form className="grid gap-[3rem]">
          <input name="email" type="email" className=" hidden" />
          <input name="password" type="password" className=" hidden" />

          <TextField name="E-mail Address or Phone Number" type={"text"} id="E-mail Address or Phone Number" label="E-mail Address or Phone Number" variant="filled" />
          <LoadingButton
            onClick={() => {
              setLoading(!loading);
              console.log("in loading");
              setTimeout(() => {
                setLoading(false);
                router.push("/reset-password");
              }, 3000);
            }}
            loading={loading}
            variant="contained"
          >
            Reset Password
          </LoadingButton>
        </form>
      </div>
    </OnboardingLayout>
  );
};

export default Signin;
