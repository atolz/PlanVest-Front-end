import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Button from "@mui/material/Button";
import { InputAdornment, TextField, Dialog } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { primaryColor } from "../styles/variables.module.scss";
import ShowPassword from "../components/form-elements/ShowPassword";
import PopupLayout from "../components/layouts/PopupLayout";
import { LoadingButton } from "@mui/lab";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passType, setPassType] = useState("password");
  useEffect(() => {
    console.log("color is", primaryColor);
  });
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className=" max-w-[600px] mx-auto mt-[10px]">
      <h1 className="mb-2 text-gray-800">App Components</h1>
      <Button variant="contained">Sign In</Button>
      <div> -----------------------</div>
      <Button variant="outlined" color="error">
        Sign In
      </Button>
      <div> -----------------------</div>
      <LoadingButton
        endIcon={<span>End Icon</span>}
        onClick={() => {
          setLoading(!loading);
          console.log("in loading");
          // setTimeout(() => {
          //   setLoading(false);
          // }, 3000);
        }}
        loading={loading}
        variant="contained"
      >
        Submit
      </LoadingButton>
      <div> -----------------------</div>
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
        Go to dashboard
      </LoadingButton>
      <div> -----------------------</div>
      <Button
        onClick={() => {
          setLoading(false);
        }}
        variant="outlined"
        color="error"
        endIcon={<span>End Icon</span>}
      >
        Stop Loading
      </Button>
      <form>
        <input name="email" type="email" className=" hidden" />
        <input name="password" type="password" className=" hidden" />
        <div> -----------------------</div>
        <TextField name="id-Emaile" type={"email"} id="Email" label="Email" variant="filled" />
        <div> -----------------------</div>
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
      </form>
      <div> -----------------------</div>
      <Button
        onClick={() => {
          console.log("Button clidked");
          setOpen(true);
        }}
        variant="contained"
      >
        Open Modal
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <PopupLayout
          title="Modal"
          onClose={() => {
            setOpen(false);
          }}
        >
          <Button variant="contained">Sign In</Button>
          <div> -----------------------</div>
          <Button variant="outlined" color="error">
            Sign In
          </Button>

          <form>
            <input name="email" type="email" className=" hidden" />
            <input name="password" type="password" className=" hidden" />
            <div> -----------------------</div>
            <TextField name="id-Emaile" type={"email"} id="Email" label="Email" variant="filled" />
            <div> -----------------------</div>
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
          </form>
          <div> -----------------------</div>
          <Button
            onClick={() => {
              setOpen(false);
            }}
            variant="contained"
          >
            Close
          </Button>
        </PopupLayout>
      </Dialog>
    </div>
  );
}
