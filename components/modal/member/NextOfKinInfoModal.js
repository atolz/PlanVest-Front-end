import { LoadingButton } from '@mui/lab';
import { Dialog, Stack, TextField } from '@mui/material';
import React from 'react';

const NextOfKinInfoModal = ({toggle, open, onClick, onClickBack}) => {
  return (
    <Dialog onClose={toggle} open={open}>
        <div className="py-[2rem] px-[auto] rounded-[8px] md:w-[450px] w-full h-[600px] ">
          <div className="flex px-[4rem] flex-row  items-center   ">
              <p>Next of Kin- Step 3 of 3</p>
              <span onClick={toggle} className="text text-[28px] text-black ml-[auto] cursor-pointer">&#215;</span>
          </div>
          <hr className='w-[110%] mx-[auto] my-[2rem]  border-solid border border-gray-200' />
          <Stack gap={"2rem"} className='  px-[4rem]   '>
            <TextField name="id-Name" type={"text"} id="fname" placeholder=" Opeyemi" label="Full Name" variant="filled" />
            <TextField name="id-Number" type={"tel"} id="tel" placeholder="+234 906 598 424" label="Phone Number" variant="filled" />
            <TextField name="id-Email" type={"email"} id="Email" placeholder="opeyemi.afolabi45@gmail.com" label="Email Address (optional)" variant="filled" />
            <TextField name="id-Pin" type={"text"} id="Location" placeholder="Lagos, Nigeria" label="Location" variant="filled" />
            <TextField name="id-Pin" type={"text"} id="Relationship" label="Relationship" variant="filled" />
            <div className='w-[100%] gap-[2rem] flex flex-row'>
            <LoadingButton
                    onClick={onClickBack}
                    variant="contained"
                    className='bg-[#ABCDBD] text-[#137C4B] hover:bg-[#137C4B] hover:text-white'
                >
                    Back
                </LoadingButton>
            <LoadingButton
                    onClick={onClick}
                    variant="contained"
                    
                >
                    Save
                </LoadingButton>
            </div>
        </ Stack>
        </div>
   </ Dialog>
  )
}

export default NextOfKinInfoModal;