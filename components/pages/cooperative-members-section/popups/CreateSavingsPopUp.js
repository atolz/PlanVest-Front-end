import { LoadingButton } from "@mui/lab";
import { Button, InputAdornment, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import React, { useState } from "react";
import PLVDesktopDatePicker from "../../../form-elements/PLVDesktopDatePicker";
import PLVMenu from "../../../form-elements/PLVMenu";
import SvgIconWrapper from "../../../general/SvgIconWrapper";
import PopupLayout from "../../../layouts/PopupLayout";
import { createFixedSavings, createGoalSavings, createPersonalFixedSavings, createPersonalGoalSavings } from "../../../../services/cooperative-members.js";
import toast from "react-hot-toast";
import { SavingsTypes } from "../../../../pages/cooperative-members/savings";
import Hrule from "../../../general/Hrule";
import PLVSwitch from "../../../general/PLVSwitch";

const CreateValidationSchema = yup.object({
  savingType: yup.string("Select saving type").required("Select saving type"),
  title: yup.string("Enter saving title").required("This field is required"),
  startDate: yup.date("").required("Enter a start date").typeError("Enter a valid date"),
  endDate: yup.date("").min(yup.ref("startDate"), "End date can not be less than start date").required("Enter an end date").typeError("Enter a valid date"),
  amount: yup.number().min(100, "Min amount 100.").required("Pls enter an amount").typeError("Enter a valid number"),
  //   amountTobeSaved: yup.number().min(100, "Min amount 100.").required("Pls enter an amount").typeError("Enter a valid number"),
});

const CreateSavingsPopup = ({ onClose = () => {}, onAddCard = () => {}, onCreateSavings = () => {} }) => {
  const [loading, setLoading] = useState(false);
  const [autoSave, setAutoSave] = useState(true);
  // const [savingType, setSaving]

  const onCreate = async (values) => {
    console.log(values);
    let data;
    if (values.savingType == "Goal Savings") {
      data = await createPersonalGoalSavings({ ...values, targetAmount: values.amount });
    } else {
      data = await createPersonalFixedSavings({ ...values, amountTobeSaved: values.amount });
    }
    console.log("Data", data);
    if (data.status) {
      toast.success(data?.message, { duration: 8000, id: "status" });
      values.savingType == "Goal Savings" ? onCreateSavings(SavingsTypes.GOAL) : onCreateSavings(SavingsTypes.FIXED);
    } else {
      toast.error(data?.message, { duration: 8000, id: "status" });
    }
  };
  return (
    <PopupLayout title="Create Plan" onClose={onClose}>
      <Formik
        initialValues={{
          savingType: "",
          title: "",
          startDate: "",
          endDate: "",
          savingType: "",
          duration: "",
          amount: "",
        }}
        validationSchema={CreateValidationSchema}
        onSubmit={onCreate}
      >
        {({ isSubmitting, errors, touched, handleChange, values, setFieldValue, submitCount }) => {
          return (
            <Form className="grid gap-[1.6rem]">
              <div>
                <PLVMenu
                  onChange={(val) => {
                    setFieldValue("savingType", val);
                  }}
                  error={errors.savingType}
                  initText={"Select Savings Type"}
                  items={["Goal Savings", "Fixed Savings"]}
                  className=" bg-input"
                ></PLVMenu>
              </div>
              <Field as={TextField} error={touched.title && errors.title} helperText={touched.title && errors.title} name="title" type={"text"} id="title" label="Title of Savings" variant="filled" />
              <PLVDesktopDatePicker
                error={errors?.startDate && submitCount >= 1}
                helperText={submitCount >= 1 && errors?.startDate}
                onChange={(date) => {
                  setFieldValue("startDate", date);
                }}
                label="Start date"
              ></PLVDesktopDatePicker>
              <PLVDesktopDatePicker
                error={errors?.endDate && submitCount >= 1}
                helperText={submitCount >= 1 && errors?.endDate}
                onChange={(date) => {
                  setFieldValue("endDate", date);
                }}
                label="End date"
              ></PLVDesktopDatePicker>
              <Field
                as={TextField}
                error={errors?.amount && touched.amount}
                helperText={touched.amount && errors?.amount}
                InputProps={{
                  startAdornment: <InputAdornment position="start">&#8358;</InputAdornment>,
                }}
                name="amount"
                type={"number"}
                id="amount"
                label="Target Amount"
                variant="filled"
              />
              {/* <Field
                as={TextField}
                error={errors?.amountTobeSaved}
                helperText={errors?.amountTobeSaved}
                InputProps={{
                  startAdornment: <InputAdornment position="start">&#8358;</InputAdornment>,
                }}
                name="amountTobeSaved"
                type={"number"}
                id="amount"
                label="Amount to be saved"
                variant="filled"
              /> 
              */}
              {values.savingType == "Goal Savings" && (
                <>
                  <Hrule className={"mt-[1.4rem]"}></Hrule>
                  <div className="flex items-center justify-between">
                    <p className=" text-label text-[1.6rem]">Auto debit option</p>

                    <PLVSwitch
                      label={autoSave ? "On" : "Off"}
                      checked={autoSave}
                      onChange={() => {
                        setAutoSave(!autoSave);
                      }}
                      inputProps={{ "aria-label": "controlled" }}
                    ></PLVSwitch>
                  </div>
                  <TextField
                    InputProps={{
                      startAdornment: <InputAdornment position="start">&#8358;</InputAdornment>,
                    }}
                    name="Amount to save per time"
                    type={"number"}
                    id="Amount to save per time"
                    label="Amount to save per time"
                    variant="filled"
                  />
                  <PLVDesktopDatePicker label="Select debit date"></PLVDesktopDatePicker>
                </>
              )}
              <LoadingButton type="submit" loading={isSubmitting} variant="contained" sx={{ mt: 3 }}>
                Create
              </LoadingButton>
            </Form>
          );
        }}
      </Formik>
    </PopupLayout>
  );
};

export default CreateSavingsPopup;
