import { LoadingButton } from '@mui/lab';
import { Dialog, Stack, TextField } from '@mui/material';
import React from 'react'
import MySelect from '../../form-elements/Select';

const PersonalDetailsModal = ({toggle, open, onClick}) => {
  return (
    <Dialog onClose={toggle} open={open}>
        <div className="py-[1rem] px-[auto] rounded-[8px] md:w-[450px] w-full h-[550px] ">
          <div className="flex px-[4rem] flex-row  items-center   ">
              <p>Personal Details - Step 1 of 3</p>
              <span onClick={toggle} className="text text-[28px] text-black ml-[auto] cursor-pointer">&#215;</span>
          </div>
          <hr className='w-[full] mx-[auto] my-[1rem]  border-solid border border-gray-200' />
          <Stack gap={"1rem"} className='  px-[4rem]   '>
            <TextField name="id-Name" type={"text"} id="fname" placeholder=" Opeyemi" label="First Name" variant="filled" />
            <TextField name="id-Email" type={"text"} id="lname" placeholder="Afolabi" label="Last Name" variant="filled" />
            <TextField name="id-Email" type={"email"} id="Email" placeholder="opeyemi.afolabi45@gmail.com" label="Email Address (optional)" variant="filled" />
            <TextField name="id-Number" type={"tel"} id="tel" placeholder="+234 906 598 424" label="Phone Number" variant="filled" />
            <MySelect  label=" Gender" items={["Female", "Male", "Others"]}></MySelect>
            <TextField name="id-Pin" type={"number"} id="state" label="State" variant="filled" />
            <TextField name="id-Pin" type={"text"} id="Address" placeholder="House 2 Afolabi Cl. Lagos" label="Address" variant="filled" />
            <LoadingButton
                    onClick={onClick}
                    variant="contained"
                    className='mt-[1rem]'
                >
                    Save & Continue
                </LoadingButton>
        </ Stack>
        </div>
   </ Dialog>
  )
}

export default PersonalDetailsModal;