import React from 'react';
import Image from 'next/image';

const MemberDetails = () => {
  return (
    <div className='flex flex-col my-[3rem] gap-[2rem] '>
        <div className='flex flex-row justify-between p-[3rem] pr-[4rem] bg-white rounded-xl'>
            <Image src='/images/member-avatar.svg' alt='investor' width='190px' height='145px' />
            <div className='flex flex-col gap-[3rem] '>
                <div className='flex flex-col gap-[0.1rem] '>
                    <p className='text-[#9999B4]  '>First Name</p>
                    <p className=' text-[#666668]'> Winner</p>
                </div>
                <div className='flex flex-col gap-[0.1rem] '>
                    <p className='text-[#9999B4]  '>Gender</p>
                    <p className=' text-[#666668]'> Female</p>
                </div>
            </div>
            <div className='flex flex-col gap-[3rem] '>
                <div className='flex flex-col gap-[0.1rem] '>
                    <p className='text-[#9999B4]  '>Last Name</p>
                    <p className=' text-[#666668]'> Okpere</p>
                </div>
                <div className='flex flex-col gap-[0.1rem] '>
                    <p className='text-[#9999B4]  '>State</p>
                    <p className=' text-[#666668]'> Lagos State</p>
                </div>
            </div>
            <div className='flex flex-col gap-[3rem] '>
                <div className='flex flex-col gap-[0.1rem] '>
                    <p className='text-[#9999B4]  '>Phone Number</p>
                    <p className=' text-[#666668]'> 08023848383</p>
                </div>
                <div className='flex flex-col gap-[0.1rem] '>
                    <p className='text-[#9999B4]  '>Address</p>
                    <p className=' text-[#666668]'> 25 Okojie Strt, Ikeja.</p>
                </div>
            </div>
            <div className='flex flex-col gap-[3rem] '>
                <div className='flex flex-col gap-[0.1rem] '>
                    <p className='text-[#9999B4]  '>Email Address</p>
                    <p className=' text-[#666668]'> winnerokpere@gmail.com</p>
                </div>
            </div>
            {/* <div className='flex flex-col gap-[2rem] my-[1rem]'>
                <p className='text-[#9999B4]  '>Application Date: <span className='ml-[0.3rem] text-[#666668]'> 23/05/2022</span></p>
                <p className='text-[#9999B4]  '>Location: <span className='ml-[0.3rem] text-[#666668]'> Abuja</span></p>
            </div>
            <div className='flex flex-col gap-[2rem] my-[1rem]'>
                <p className='text-[#9999B4]  '>Establishment Date: <span className='ml-[0.3rem] text-[#666668]'> 23/05/2022</span></p>
                <p className='text-[#9999B4]  '>Target Amount: <span className='ml-[0.3rem] text-[#666668]'> N200,000</span></p>
            </div> */}
        </div>
        {/* <div className='flex flex-row justify-between p-[3rem] bg-white rounded-xl'>
            <p className='text-[#9999B4]  '>ROI: <span className='ml-[0.3rem] text-[#666668]'> 10%</span></p>
            <p className='text-[#9999B4]  '>Start Date: <span className='ml-[0.3rem] text-[#666668]'> 23/05/2022</span></p>
            <p className='text-[#9999B4]  '>Start Date: <span className='ml-[0.3rem] text-[#666668]'> 23/05/2022</span></p>
            <p className='text-[#9999B4]  '>Duration: <span className='ml-[0.3rem] text-[#666668]'> 3 months</span></p>
            <p className='text-[#9999B4]  '>Slots: <span className='ml-[0.3rem] text-[#666668]'> 40</span></p>
            <p className='text-[#9999B4]  '>Amount per slot: <span className='ml-[0.3rem] text-[#666668]'> N40,000</span></p>
        </div> */}
    </div>
  )
}

export default MemberDetails