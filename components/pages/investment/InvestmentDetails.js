import React from 'react';
import Image from 'next/image';

const InvestmentDetails = () => {
  return (
    <div className='flex flex-col my-[3rem] gap-[2rem]'>
        <div className='flex flex-row gap-[3rem] p-[3rem] bg-white rounded-xl'>
            <Image src='/images/investor.svg' alt='investor' width='80px' height='80px' />
            <div className='flex flex-col gap-[2rem] my-[1rem]'>
                <p className=' text-[#666668]'> Alhiyu Sambara</p>
                <p className='text-[#9999B4]  '>Fish Farm</p>
            </div><hr className='border border-solid border-[#EBEBEB] ' />
            <div className='flex flex-col gap-[2rem] my-[1rem]'>
                <p className='text-[#9999B4]  '>Application Date: <span className='ml-[0.3rem] text-[#666668]'> 23/05/2022</span></p>
                <p className='text-[#9999B4]  '>Location: <span className='ml-[0.3rem] text-[#666668]'> Abuja</span></p>
            </div><hr className='border border-solid border-[#EBEBEB] ' />
            <div className='flex flex-col gap-[2rem] my-[1rem]'>
                <p className='text-[#9999B4]  '>Establishment Date: <span className='ml-[0.3rem] text-[#666668]'> 23/05/2022</span></p>
                <p className='text-[#9999B4]  '>Target Amount: <span className='ml-[0.3rem] text-[#666668]'> N200,000</span></p>
            </div>
        </div>
        <div className='flex flex-row justify-between p-[3rem] bg-white rounded-xl'>
            <p className='text-[#9999B4]  '>ROI: <span className='ml-[0.3rem] text-[#666668]'> 10%</span></p>
            <p className='text-[#9999B4]  '>Start Date: <span className='ml-[0.3rem] text-[#666668]'> 23/05/2022</span></p>
            <p className='text-[#9999B4]  '>Start Date: <span className='ml-[0.3rem] text-[#666668]'> 23/05/2022</span></p>
            <p className='text-[#9999B4]  '>Duration: <span className='ml-[0.3rem] text-[#666668]'> 3 months</span></p>
            <p className='text-[#9999B4]  '>Slots: <span className='ml-[0.3rem] text-[#666668]'> 40</span></p>
            <p className='text-[#9999B4]  '>Amount per slot: <span className='ml-[0.3rem] text-[#666668]'> N40,000</span></p>
        </div>
    </div>
  )
}

export default InvestmentDetails