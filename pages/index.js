import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Button from "@mui/material/Button";
import { InputAdornment, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { primaryColor } from "../styles/variables.module.scss";
import ShowPassword from "../components/form-elements/ShowPassword";

export default function Home() {
  const [passType, setPassType] = useState("password");
  useEffect(() => {
    console.log("color is", primaryColor);
  });
  return (
    <div className=" max-w-[600px] mx-auto mt-[10px]">
      <h1 className="mb-2 text-gray-800">App Components</h1>
      <Button variant="contained">Sign In</Button>
      <div> -----------------------</div>
      <Button variant="outlined" color="error">
        Sign In
      </Button>
      <div> -----------------------</div>
      <Button variant="outlined" color="error" endIcon={<span>End Icon</span>}>
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
    </div>
  );
}
