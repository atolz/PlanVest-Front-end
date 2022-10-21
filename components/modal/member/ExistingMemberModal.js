
import Image from 'next/image';
import { LoadingButton } from '@mui/lab';
import Checkbox from '@mui/material/Checkbox';
import React, {useEffect, useState} from 'react';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
// import CheckboxesTags from '../../form-elements/MultiSelectSearch';
import { Dialog , Stack, Autocomplete, TextField} from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import {getAllCoopMember, addCoopMember} from '../../../services/cooperative-admin.js';




// import PopupLayout from '../../layouts/PopupLayout';

const ExistingMemberModal = ({open, toggle}) => {
 
  const [existingMember, SetExistingMember] = useState([]);

  const [postMember, SetPostMember] = useState([]);
  const [fetchingMembers, setFetchingMembers] = useState(false);

  const [skills,setSkills] = useState([])
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

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

console.log(skills, ":ski::")

const handleSelectedMembers =()=>{
  console.log('====================================');
  console.log('i no sabi wetin dey occur');
  console.log('====================================');
  addCoopMember(postMember);
  SetPostMember({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
  })
  // backend is expecting array of users with id
  // I am not sure how to send that back
}


  return (
    <Dialog onClose={toggle} open={open} className='m-[auto] flex '>
    <div className=" rounded-[8px] md:w-[400px] w-full h-[350px] ">
      <div className="flex px-[2rem] flex-row items-center ">
        <p>Add Existing User</p>
        <span onClick={toggle} className="text text-[28px] text-black ml-[auto] cursor-pointer">&#215;</span>
      </div>
      <hr className='w-[full] mx-[auto] my-[0.5rem]  border-solid border border-gray-200' />
      
      <div className='flex flex-col p-[2rem] gap-[2rem]'>

         

      <p  > Please select members</p  >
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

     <div>

          {/* <div className='w-[full] flex flex-row bg-[#F0F2F3] rounded-lg py-[2rem] px-[1.2rem]'>
              <input
                  className="mr-[2rem] bg-[#F0F2F3] line-height-2 w-full text-[14px] border-[#F0F2F3] outline-none border-solid focus:border-[#F0F2F3] placeholder:text-black rounded-2xl"
                  type='search'
                   placeholder="Search member"
              ></input>
              <Image src='/images/search.svg' alt='search' height='20px' width='20px' />
          </div> */}

          {/* <Stack>
          <Autocomplete
            options={skill}
            value={existingMember}
            onChange={(newValue)=>{SetExistingMember(newValue)
              console.log((newValue));
            }}
            renderInput={(params) => (
              <TextField {...params} placeholder="select member"  />
              )}
          />
            </Stack> */}
            {/* <> {skills}</> */}

            {/* <CheckboxesTags /> */}
            </div>
          <LoadingButton
              onClick={handleSelectedMembers}

              variant="contained"
              className='mt-[1rem]'
            >
            Save
          </LoadingButton>
      </div>

    </div>
  </Dialog>
  )
}

export default ExistingMemberModal;