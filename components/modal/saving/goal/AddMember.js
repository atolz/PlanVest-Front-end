import { LoadingButton } from '@mui/lab'
import { Dialog, TextField } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import PillOnSelect from '../../../form-elements/PillOnSelect'

const AddMemberModal = ({toggle, open}) => {
  return (
    <Dialog onClose={toggle} open={open}>
    <div className=" pt-[2rem] pb-[3rem] rounded-[8px] md:w-[500px] w-full ">
      <div className=" px-[4rem] flex items-end mb-8 ">
          <p>Add Member</p>
          <span onClick={toggle} className="text text-[28px] text-black ml-[auto] cursor-pointer">&#215;</span>
      </div>
      <hr className='w-[105%] mx-[auto] my-[2rem] border-solid border border-gray-200' />
      
    <Stack gap={"3rem"} className=' w-[100%] px-[4rem] items-start flex flex-col'>
            <p className='text-[#9999B4]  '>Add  members</p>
                 <TextField name="id-savings" type={"text"} id="savings" label="Email, comma seperated" variant="filled" />
                <PillOnSelect items={["Michael Kennedy", "Melissa Russell", "Latifa Melek", "Joshua Patt", "Danny Yen"]} label={"Email, comma seperated"} />
                <div className='w-[100%]'>
                <LoadingButton
                    onClick={() => {
                        // router.push("/signin");
                        }}
                    variant="contained"
                >
                    Create
                </LoadingButton>
                </div>
    
          </Stack>
          </div>
          </Dialog>
  )
}

export default AddMemberModal;