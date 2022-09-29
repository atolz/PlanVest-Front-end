
import React from 'react';
import * as yup from "yup";
import toast from "react-hot-toast";
import { LoadingButton } from '@mui/lab';
import { Field, Form, Formik } from "formik";
import MySelect from '../../form-elements/Select';
import { Dialog, Stack, TextField } from '@mui/material';


const PersonalDetailsModal = ({toggle, open, onClick}) => {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const registerValidationSchema = yup.object({
    email: yup.string("Enter your email").email("Enter a valid email").required("Email is required"),
    password: yup.string("Enter your password").min(8, "Password should be of minimum 8 characters length").required("Password is required"),
    phoneNumber: yup.string().required("Phone number is required"),
    transactionPin: yup.string("Enter your preferred Pin").min(4, "Transaction Pin should be of minimum 4 characters length").max(4, "Transaction Pin should be of maximum 4 characters length").required("Transaction Pin is required"),
    cooperativeName: yup.string("Enter your fullname").required("Fullname is required"),
    agree: yup.bool().oneOf([true], "Field must be checked"),
  });
  return (
    <Dialog onClose={toggle} open={open}>
        <div className="py-[1rem] px-[auto] rounded-[8px] md:w-[450px] w-full h-[550px] ">
          <div className="flex px-[4rem] flex-row  items-center   ">
              <p>Personal Details - Step 1 of 3</p>
              <span onClick={toggle} className="text text-[28px] text-black ml-[auto] cursor-pointer">&#215;</span>
          </div>
          <hr className='w-[full] mx-[auto] my-[1rem]  border-solid border border-gray-200' />
          <Formik
            initialValues={{
              fname:"",
              lname:"",
              email: "",
              phoneNumber: "",
              state: "",
              address: "",
            }}
            validationSchema={registerValidationSchema}
            onSubmit={onRegister}
          >
          <Stack gap={"1rem"} className='  px-[4rem]   '>
            <TextField name="id-Name" type={"text"} id="fname" placeholder=" Opeyemi" label="First Name" variant="filled" />
            <TextField name="id-Email" type={"text"} id="lname" placeholder="Afolabi" label="Last Name" variant="filled" />
            <TextField name="id-Email" type={"email"} id="Email" placeholder="opeyemi.afolabi45@gmail.com" label="Email Address (optional)" variant="filled" />
            <TextField name="id-Number" type={"tel"} id="tel" placeholder="+234 906 598 424" label="Phone Number" variant="filled" />
            <MySelect  label=" Gender" items={["Female", "Male", "Others"]}></MySelect>
            <TextField name="id-Pin" type={"number"} id="state" label="State" variant="filled" />
            <TextField name="id-Pin" type={"text"} id="Address" placeholder="House 2 Afolabi Cl. Lagos" label="Address" variant="filled" />
            <Field
                    as={TextField}
                    error={touched.phoneNumber && errors.phoneNumber}
                    helperText={touched.phoneNumber && errors.phoneNumber}
                    name="phoneNumber"
                    type={"text"}
                    id="phoneNumber"
                    label="Phone Number"
                  />
            <LoadingButton
                    onClick={onClick}
                    variant="contained"
                    className='mt-[1rem]'
                >
                    Save & Continue
                </LoadingButton>
        </ Stack>
        </Formik>
        </div>
   </ Dialog>
  )
}

export default PersonalDetailsModal;