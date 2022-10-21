import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import toast from "react-hot-toast";
import Checkbox from '@mui/material/Checkbox';
import { useRouter } from "next/router";
import { LoadingButton } from "@mui/lab";

import { Button, Dialog, Autocomplete, Stack, TextField } from '@mui/material';
import PLVDesktopDatePicker from '../../../form-elements/PLVDesktopDatePicker';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckboxesTags from '../../../form-elements/MultiSelectSearch';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import {createGoalSavings,getAllCoopMember, addGoalSavingsMember} from '../../../../services/cooperative-admin.js';


const CreateGoalPlanModal = ({activeTab, toggle, name, trigger, setTrigger}) => {
    const router = useRouter();
    // alaf state and activetab
    const state= (activeTab === name);
    const [loading, setLoading] = useState(false);

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  const [skills,setSkills] = useState([])
    const [existingMember, SetExistingMember] = useState([]);
    const [fetchingMembers, setFetchingMembers] = useState(false);
    const [inputValue, setInputValue] =useState({
          title:"",
          startDate: null,
          endDate: null,
          savingType: "",
          targetAmount:"",
          duration: "",
          debitDate: null,
          frequencyOfSavings:"",
      });
//   calculate duration by diff of end n start divided by 30 in months n round up with ceil to nearest whole
    const myDateDiff= (inputValue.endDate- inputValue.startDate);
    const myMonthlyDuration= (myDateDiff / 30);
    const myDuration= Math.ceil(myMonthlyDuration );

    const handleSubmit = async () => {
        try {
            await createGoalSavings({...inputValue, skills});
            console.log('this is goal savings?')
            toggle(!toggle);
            setInputValue({
                title:"",
                startDate: null,
                endDate: null,
                savingType: "",
                targetAmount:"",
                duration: myDuration,
                debitDate: null,
                frequencyOfSavings:"",
            })
            setTrigger(!trigger)
            // setLoading(true);
            // window.location.reload();
            
        } catch (error) {
            toast.error(inputValue?.message, { duration: 10000 });
        }}

        const handleSelectChange=(e,value)=>{
            SetExistingMember(value)
          }
        useEffect(()=>{
  
            (async () => {
              try {
                setFetchingMembers(true);
                const res = await getAllCoopMember() ;
                // console.log(res, "RES")
                setSkills(res.data.data)
                
              } catch (error) {
                console.log(error.message, "ERR in skills")
              } finally{
                setFetchingMembers(false)
                // console.log(skills, "SKIIII")
              }
            })()
          
          },[])

    return (

      <Dialog onClose={()=>toggle("")} open={state} scroll="body" sx={{ boxShadow: "none" }} className='scroll_hide'>
          <div className="px-[2rem] pt-[2rem] pb-[3rem] rounded-[8px] md:w-[450px] w-full  ">

          <div className="flex px-[4rem] items-end mb-8 ">
              <p>Create Goal Plan</p>
              <span onClick={()=>toggle("")} className="text text-[28px] text-black ml-[auto] cursor-pointer">&#215;</span>
          </div>
          <div className='p-[4rem] flex flex-col gap-[3rem]' >
                <select onChange={(e)=>setInputValue({...inputValue, savingType:e.target.value})} value={inputValue.savingType}  className="selectedType">
                    <option value="">Select Savings Type</option>
                    <option value="self-management">Self Management</option>
                    <option value="third-party">Third-Party Management</option>
                </select>
                <TextField name="id-title" onChange={(e)=>setInputValue({...inputValue, title:e.target.value})} value={inputValue.title} type={"text"} id="title" label="Title of Savings" variant="filled" />
         </div>
            <Stack gap={"3rem"} className=' w-[100%] px-[4rem] items-start flex flex-col'>
                <PLVDesktopDatePicker onChange={(e)=>setInputValue({...inputValue, startDate:e})} value={inputValue.startDate} label="start Date" />
                <PLVDesktopDatePicker onChange={(e)=>setInputValue({...inputValue, endDate:e})} value={inputValue.endDate} label="End Date" />
                <TextField name="id-savings" onChange={(e)=>setInputValue({...inputValue, targetAmount:e.target.value})} value={inputValue.targetAmount} type={"text"} id="savings" label="Amount to be saved" variant="filled" />
                <TextField name="id-amount" onChange={(e)=>setInputValue({...inputValue, amountToContribute:e.target.value})} value={inputValue.amountToContribute} type={"text"} id="Amount" label="Amount to be contributed per member" variant="filled" />
                <hr className='w-full border-solid border-gray-200' />
                <p className='text-[#9999B4]  '>Frequency of savings</p>
                <div className=' w-full flex flex-row gap-[2rem] justify-between'>
                    <Button onClick={(e)=>setInputValue({...inputValue, frequencyOfSavings:e.target.value})} value='daily'  className='bg-[#E7EBED] focus:bg-[#137C4B] focus:text-white text-[#666668]'>Daily</Button>
                    <Button onClick={(e)=>setInputValue({...inputValue, frequencyOfSavings:e.target.value})} value='weekly' className='bg-[#E7EBED] focus:bg-[#137C4B] focus:text-white text-[#666668]'>Weekly</Button>
                    <Button onClick={(e)=>setInputValue({...inputValue, frequencyOfSavings:e.target.value})} value='monthly' className='bg-[#E7EBED] focus:bg-[#137C4B] focus:text-white text-[#666668]'>Monthly</Button>
                </div>
                 <PLVDesktopDatePicker onChange={(e)=>setInputValue({...inputValue, debitDate:e})} value={inputValue.debitDate}  label="Select debit date" />
                 <hr className='w-full border-solid border-gray-200' />
                 <p className='text-[#9999B4]  '>Add  members</p>
                <div className='w-[100%]'>

                {/* <CheckboxesTags /> */}
                {!fetchingMembers?   <Autocomplete
                        multiple
                        id="checkboxes-tags-demo"
                        defaultValue={existingMember}
                        onChange={handleSelectChange}
                        options={skills}
                        disableCloseOnSelect
                        getOptionLabel={(option) => (option.firstName + " " + option.lastName)}
                        renderOption={(props, option, { selected }) => (
                            <li {...props}>
                            <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{ marginRight: 8 }}
                                checked={selected}
                            />
                            {(option.firstName + " " + option.lastName)}
                            </li>
                        )}
                        style={{ width: '100%' }}
                        renderInput={(params) => (
                            <TextField sx={{'& .MuiInputBase-root': {paddingTop:0}}} {...params} placeholder="Select members"  />
                        )}
                        /> : <>loading...</>}

                {/* <PillOnSelect items={["Michael Kennedy", "Melissa Russell", "Latifa Melek", "Joshua Patt", "Danny Yen"]} label={"Select Members"} /> */}
                
                <LoadingButton
                    onClick={handleSubmit}
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