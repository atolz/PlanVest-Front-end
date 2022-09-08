import React from 'react';
import Image from 'next/image';
import { useRouter } from "next/router";
import { LoadingButton } from "@mui/lab";
import MySelect from '../../../form-elements/MySelect';
import { Button, Dialog, Stack, TextField } from '@mui/material';
import PillOnSelect from '../../../form-elements/PillOnSelect';
import PLVDesktopDatePicker from '../../../form-elements/PLVDesktopDatePicker';

const CreateGoalPlanModal = ({activeTab, toggle, name}) => {
    const router = useRouter();
    const state= (activeTab === name);
    // const [passType, setPassType] = useState("password");

    return (
      <Dialog onClose={()=>toggle("")} open={state}>
          <div className="px-[2rem] pt-[2rem] pb-[3rem] rounded-[8px] md:w-[510px] w-full ">
          <div className="flex px-[4rem] items-end mb-8 ">
              <p>Create Goal Plan</p>
              <span onClick={()=>toggle("")} className="text text-[28px] text-black ml-[auto] cursor-pointer">&#215;</span>
          </div>
          <div className='p-[4rem]'>
          <MySelect  label="Select Savings Type" items={["Self Management", "Third-Party Management"]}></MySelect>
            
          </div>
            <Stack gap={"3rem"} className=' w-[100%] px-[4rem] items-start flex flex-col'>
            
            <PLVDesktopDatePicker label="Start Date" />
            <PLVDesktopDatePicker label="End Date" />
                
                
                <TextField name="id-savings" type={"text"} id="savings" label="Amount to be saved" variant="filled" />
                <TextField name="id-amount" type={"text"} id="Amount" label="Amount to be contributed per member" variant="filled" />
                <hr className='w-full border-solid border-gray-200' />
                <p className='text-[#9999B4]  '>Frequency of savings</p>
              
                <div className=' w-full flex flex-row gap-[2rem] justify-between'>
                    <Button className='bg-[#E7EBED] text-[#666668]'>Daily</Button>
                    <Button className='bg-[#E7EBED] text-[#666668]'>Weekly</Button>
                    <Button className='bg-[#E7EBED] text-[#666668]'>Monthly</Button>
                </div>
                 <PLVDesktopDatePicker label="Select collection date" />
                 <hr className='w-full border-solid border-gray-200' />
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

export default CreateGoalPlanModal;