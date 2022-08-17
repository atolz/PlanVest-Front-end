import React, { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { TextField } from "@mui/material";
import OnboardingLayout from "../components/layouts/OnboardingLayout";
import ShowPassword from "../components/form-elements/ShowPassword";
import { useRouter } from "next/router";

const Signin = () => {
  const [passType, setPassType] = useState("password");
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <OnboardingLayout>
      <div className="max-w-[49.2rem] w-full -translate-y-[10%]">
        <h2 className="mb-[1rem] text-[2.4rem] text-text">Sign In</h2>
        <p className="mb-[3.2rem] text-label">Let’s know a bit about your company and get you setup.</p>
        <form className="grid gap-[1.9rem]">
          <input name="email" type="email" className=" hidden" />
          <input name="password" type="password" className=" hidden" />

          <TextField name="id-Emaile" type={"email"} id="Email" label="Email" variant="filled" />

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
          >
            Sign In
          </LoadingButton>
        </form>
      </div>
    </OnboardingLayout>
  );
};

export default Signin;
