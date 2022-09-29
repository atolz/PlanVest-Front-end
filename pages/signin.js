import React, { useContext, useState } from "react";
import { LoadingButton } from "@mui/lab";
import { Button, TextField } from "@mui/material";
import OnboardingLayout from "../components/layouts/OnboardingLayout";
import ShowPassword from "../components/form-elements/ShowPassword";
import { useRouter } from "next/router";
import Link from "next/link";
import SignupWIthButton from "../components/form-elements/SignupWIthButton";
import Hrule from "../components/general/Hrule";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import { login } from "../services/cooperative-members.js";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContextProvider";

const Signin = () => {
  const [passType, setPassType] = useState("password");
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setExpiresOnLogIn, setUser } = useContext(AuthContext);

  const logInValidationSchema = yup.object({
    email: yup.string("Enter your email").email("Enter a valid email").required("Email is required"),
    password: yup.string("Enter your password").min(8, "Password should be of minimum 8 characters length").required("Password is required"),
  });

  const onLogin = async (values) => {
    const data = await login(values);
    if (data.status) {
      localStorage?.setItem("token", data.accessToken);
      setUser(data?.data);
      setExpiresOnLogIn(data?.accessToken);
      toast.success(data?.message ?? "Login successful!");
      router.push("cooperative-members/dashboard");
    } else {
      toast.error(data?.message, { duration: 10000 });
    }
  };
  function logCoop(){
    router.push('/cooperative-admin/signin')
  }
  function logUser(){
    router.push('/cooperative-members/register')
  }

  return (
    <OnboardingLayout>
      <div className="max-w-[49.2rem] w-full  h-full flex flex-col justify-center overflow-scroll scroll_hide ">
      <div className="flex flex-row gap-[2rem] mb-[2rem]">
        <Button onClick={logCoop} className="bg-black w-[250px] hover:bg-gray-400">Cooperative</Button>
        <Button onClick={logUser} variant='outlined'  className="border border-1-black bg-white hover:bg-gray-400 text-black w-[250px]">User</Button>
        </div>
        <h2 className="mb-[1rem] text-[2.4rem] text-text">Sign In</h2>
        <p className="mb-[3.2rem] text-label">Let’s know a bit about your company and get you setup.</p>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={logInValidationSchema}
          onSubmit={onLogin}
        >
          {({ isSubmitting, errors, touched, handleChange, values }) => {
            return (
              <Form className="grid gap-[1.9rem]">
                <input name="email" type="email" className=" hidden" />
                <input name="password" type="password" className=" hidden" />

                <Field as={TextField} error={touched.email && errors.email} helperText={touched.email && errors.email} name="email" type={"email"} id="Email" label="Email" />

                <div>
                  <Field
                    error={touched.password && errors.password}
                    helperText={touched.password && errors.password}
                    as={TextField}
                    name="password"
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
                <LoadingButton type="submit" loading={isSubmitting} variant="contained" sx={{ marginTop: "14px" }}>
                  Sign In
                </LoadingButton>
                <p className=" text-pv_dark font-medium">
                  Don’t have an account?
                  <Link href={"cooperative-members/register"}>
                    <a className=" text-pv_primary cursor-pointer"> Register</a>
                  </Link>
                </p>
              </Form>
            );
          }}
        </Formik>
        {/* <form className="grid gap-[1.9rem]">
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
        </form> */}
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
