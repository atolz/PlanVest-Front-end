import { TextField } from "@mui/material";

import { LoadingButton } from "@mui/lab";
import Button from "@mui/material/Button";
import React from "react";
import AppLayout from "../../components/layouts/AppLayout";

const Dashboard = () => {
  return (
    <AppLayout>
      <div className="flex items-center">
        <div>
          <h2 className="h2 mb-[1.6rem]">Welcome Back Linda 👋🏼</h2>
          <p className="body_1">Your current status and analytics are here</p>
        </div>
        <Button variant="contained" sx={{ width: 208, ml: "auto" }}>
          Supposed Select
        </Button>

        {/* <TextField sx={{ width: 300, ml: 10 }} name="id-Emaile" type={"email"} id="Email" label="Email" variant="filled" /> */}
      </div>
    </AppLayout>
  );
};

export default Dashboard;
