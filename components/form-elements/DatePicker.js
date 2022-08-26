import { InputAdornment, TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React from "react";
import SvgIconWrapper from "../general/SvgIconWrapper";

const PLVDatePicker = () => {
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DesktopDatePicker
        label="Date desktop"
        // open={true}
        renderInput={(params) => (
          <TextField
            variant="filled"
            {...params}
            // InputProps={{
            //   endAdornment: <InputAdornment position="start">kg</InputAdornment>,
            // }}
          />
        )}
        components={{
          OpenPickerIcon: () => {
            return <SvgIconWrapper className={" !text-pv_primary cursor-pointer"} iconName={"calendar"}></SvgIconWrapper>;
          },
        }}
        inputFormat="MM/dd/yyyy"
        value={value}
        onChange={handleChange}
      />
    </LocalizationProvider>
  );
};

export default PLVDatePicker;
