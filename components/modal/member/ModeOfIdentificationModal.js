import { LoadingButton } from '@mui/lab';
import { Dialog, Radio, Stack, TextField } from '@mui/material';
import React, {useState} from 'react';
import AddMediaFileCard from '../../cards/AddMediaFileCard';

const ModeOfIdentificationModal = ({toggle, open, onClick, onClickBack}) => {

  const [license, setLicense] = useState(false);
  const [nin, setNin] = useState(false);
  const [voterCard, setVoterCard] = useState(false);
  const [passport, setPassport] = useState(false);
  function toggleLincense(){
    setLicense(!license);
  }
  function toggleNin(){
    setNin(!nin);
  }
  function toggleVoterCard(){
    setVoterCard(!voterCard);
  }
  function togglePassport(){
    setPassport(!passport);
  }
  return (
    <Dialog onClose={toggle} open={open}>
        <div className="py-[1rem] px-[auto] rounded-[8px] md:w-[450px] w-full h-[600px] ">
          <div className="flex px-[4rem] flex-row  items-center   ">
              <p>Mode of Identification- Step 2 of 3</p>
              <span onClick={toggle} className="text text-[28px] text-black ml-[auto] cursor-pointer">&#215;</span>
          </div>
          <hr className='w-[full] mx-[auto] my-[1.5rem]  border-solid border border-gray-200' />
          <Stack gap={"1rem"} className='  px-[2rem]   '>
              <div className='bg-[#F0F2F3] rounded-xl p-[2rem]'>
                  <div className=' flex flex-row justify-between '>
                      <p>Drivers Lincense</p>
                      <Radio
                    checked={license}
                    onClick={toggleLincense}
                    name="same"
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 24,
                      },
                      color: "#90979E",
                      "&.Mui-checked": {
                        color: "#110066",
                      },
                    }}
                  />
                  </div>
                  {license && <div className=' flex flex-col gap-[1.5rem]'>
                    <hr className='w-[100%] mx-[auto] my-[1rem]  border-solid border border-gray-200' />
                    <AddMediaFileCard uploading='true'  />
                    <AddMediaFileCard  toUpload='true' fileType="Driver's license back" />
                  </ div>}
                </div>
              <div className='bg-[#F0F2F3] rounded-xl p-[2rem]'>
                  <div className=' flex flex-row justify-between '>
                      <p>NIN</p>
                      <Radio
                    checked={nin}
                    onClick={toggleNin}
                    name="same"
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 24,
                      },
                      color: "#90979E",
                      "&.Mui-checked": {
                        color: "#110066",
                      },
                    }}
                  />
                  </div>
                  {nin && <div className=' flex flex-col gap-[1.5rem]'>
                    <hr className='w-[100%] mx-[auto] my-[1rem]  border-solid border border-gray-200' />
                    <AddMediaFileCard uploading='true'  />
                    <AddMediaFileCard  toUpload='true' fileType='Nin’s card back' />
                  </ div>}
                </div>
              <div className='bg-[#F0F2F3] rounded-xl p-[2rem]'>
                  <div className=' flex flex-row justify-between '>
                      <p>Voters Card</p>
                      <Radio
                    checked={voterCard}
                    onClick={toggleVoterCard}
                    name="same"
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 24,
                      },
                      color: "#90979E",
                      "&.Mui-checked": {
                        color: "#110066",
                      },
                    }}
                  />
                  </div>
                  {voterCard && <div className=' flex flex-col gap-[1.5rem]'>
                    <hr className='w-[100%] mx-[auto] my-[1rem]  border-solid border border-gray-200' />
                    <AddMediaFileCard uploading='true'  />
                    <AddMediaFileCard  toUpload='true' fileType='Voter’s card back' />
                  </ div>}
                </div>
              <div className='bg-[#F0F2F3] rounded-xl p-[2rem]'>
                  <div className=' flex flex-row justify-between '>
                      <p>International Passport</p>
                      <Radio
                    checked={passport}
                    onClick={togglePassport}
                    name="same"
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 24,
                      },
                      color: "#90979E",
                      "&.Mui-checked": {
                        color: "#110066",
                      },
                    }}
                  />
                  </div>
                  {passport && <div className=' flex flex-col gap-[1.5rem]'>
                    <hr className='w-[100%] mx-[auto] my-[1rem]  border-solid border border-gray-200' />
                    <AddMediaFileCard uploading='true'  />
                    <AddMediaFileCard  toUpload='true' fileType='Int Passport’s card back' />
                  </ div>}
                </div>
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
                    Save & Continue
                </LoadingButton>
            </div>
        </ Stack>
        </div>
   </ Dialog>
  )
}

export default ModeOfIdentificationModal;