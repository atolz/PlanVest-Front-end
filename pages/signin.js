import React, { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { TextField } from "@mui/material";
import OnboardingLayout from "../components/layouts/OnboardingLayout";
import ShowPassword from "../components/form-elements/ShowPassword";
import { useRouter } from "next/router";
import Link from "next/link";
import SignupWIthButton from "../components/form-elements/SignupWIthButton";
import Hrule from "../components/general/Hrule";

const Signin = () => {
  const [passType, setPassType] = useState("password");
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <OnboardingLayout>
      <div className="max-w-[49.2rem] w-full  h-full flex flex-col justify-center overflow-scroll scroll_hide ">
        <h2 className="mb-[1rem] text-[2.4rem] text-text">Sign In</h2>
        <p className="mb-[3.2rem] text-label">Let’s know a bit about your company and get you setup.</p>
        <form className="grid gap-[1.9rem]">
          <input name="email" type="email" className=" hidden" />
          <input name="password" type="password" className=" hidden" />

          <TextField name="id-Emaile" type={"email"} id="Email" label="Email" variant="filled" />

          <div>
            <TextField
              name="id-passwordd"
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
              id="password"
              label="Password"
              variant="filled"
            />
            <Link href={"/forgot-password"}>
              <a className=" text-text text-[1.5rem] mt-2 cursor-pointer">Forgot Password?</a>
            </Link>
          </div>
          <LoadingButton
            onClick={() => {
              setLoading(!loading);
              console.log("in loading");
              setTimeout(() => {
                setLoading(false);
                router.push("/cooperative-members/dashboard");
              }, 3000);
            }}
            loading={loading}
            variant="contained"
            sx={{ marginTop: "14px" }}
          >
            Sign In
          </LoadingButton>
          <p className=" text-pv_dark font-medium">
            Don’t have an account?
            <Link href={"/register"}>
              <a className=" text-pv_primary cursor-pointer"> Register</a>
            </Link>
          </p>
        </form>
        <div className="flex items-center justify-between my-[2.9rem] px-3">
          <div className=" flex-1 border-border border-0 border-b bg-transparent border-solid"></div> <p className="mx-[1.2rem] text-text font-medium text-[1.6rem] ">Or</p>
          <Hrule></Hrule>
        </div>
        <div className=" grid gap-[2.5rem] grid-flow-col">
          <SignupWIthButton img={"/fb.png"} type={"Facebook"}></SignupWIthButton>
          <SignupWIthButton img={"/google.png"} type={"Google"}></SignupWIthButton>
        </div>
      </div>
    </OnboardingLayout>
  );
};

export default Signin;
