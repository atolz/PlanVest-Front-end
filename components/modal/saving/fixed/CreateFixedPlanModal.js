
import React, {useState} from 'react';
import Image from 'next/image';
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { CalendarPicker, LoadingButton } from "@mui/lab";
import { Dialog, Stack, TextField } from '@mui/material';
import PLVDesktopDatePicker from '../../../form-elements/PLVDesktopDatePicker';
// import PLVDesktopDatePicker from '../../../form-elements/PLVDesktopDatePicker';
import {createFixedSavings} from '../../../../services/cooperative-admin.js';
const CreateFixedPlanModal = ({activeTab, toggle, name}) => {
    const router = useRouter();
    const [passType, setPassType] = useState("password");
    const state= (activeTab === name);

    // const createPlan=()=>{
    //   initiateValues= {
    //     title:"",
    //     startDate: null,
    //     endDate: null,
    //     savingType: "",
    //     duration: "",
    //     amountLocked:"",
    //   }
    // }

    const [inputValue, setInputValue] =useState({
      title:"",
      startDate: null,
      endDate: null,
      amountTobeSaved:"",
  });

  const handleSubmit = async () => {
    try {
        await createFixedSavings(inputValue);
        console.log('this is fixed?')
        toggle(!toggle);
        setInputValue({
            title:"",
            startDate: null,
            endDate: null,
            amountTobeSaved:"",
        })
    } catch (error) {
        toast.error(data?.message, { duration: 10000 });
    }
    
  }
    return (
      <Dialog onClose={()=>toggle("")} open={state}>
        <div className="pt-[2rem] pb-[3rem] rounded-[8px] md:w-[450px] w-full ">
          <div className="flex px-[4rem] items-end mb-8 ">
              <p>Create Fixed Plan</p>
              <span onClick={()=>toggle("")} className="text text-[28px] text-black ml-[auto] cursor-pointer">&#215;</span>
          </div>
          <hr className='w-[100%] mx-[auto] my-[2rem] border-solid border border-gray-200' />
          <Stack gap={"3rem"} className='px-[4rem] items-center flex flex-col'>
              <TextField name="id-savings-title" type={"text"} id="savings" onChange={(e)=>setInputValue({...inputValue, title:e.target.value})} value={inputValue.title} label="Title of Savings" variant="filled" />
                <PLVDesktopDatePicker onChange={(e)=>setInputValue({...inputValue, startDate:e._d})} value={inputValue.startDate} label="Start Date" />
                <PLVDesktopDatePicker onChange={(e)=>setInputValue({...inputValue, endDate:e._d})} value={inputValue.endDate} label="End Date" />
                <TextField name="id-amount" onChange={(e)=>setInputValue({...inputValue, amountTobeSaved:e.target.value})} value={inputValue.amountTobeSaved} type={"text"} id="Amount" label="Amount to be locked" variant="filled" />
              <div className='w-[100%]'>
              <LoadingButton
                  onClick={handleSubmit}
                  variant="contained"
              >
                  Lock
              </LoadingButton>
              </div>
    
          </Stack>
      </div>
  </Dialog>
  )
}

export default CreateFixedPlanModal;
