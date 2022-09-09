import React from 'react'

const SavingsCard = () => {
  return (
    <div className='bg-white p-[3rem] rounded-xl flex flex-wrap md:flex-row my-[3rem] '>

            <div className='flex flex-col gap-[1rem] mt-[1git rem] '>
                <div className='flex flex-row md:flex-col gap-[1rem] md:gap-0'>
                    <p className='text-[#9999B4]'>Target Amount</p>
                    <p>N800m</p>
                </div>
                <div className='flex flex-row md:flex-col gap-[1rem] md:gap-0'>
                    <p className='text-[#9999B4]'>Amount saved </p>
                    <p>N30,000</p>
                </div>
                <div className='flex flex-row md:flex-col gap-[1rem] md:gap-0'>

                    <p className='text-[#9999B4]'>Status of the plan </p>
                    <p>Ongoing</p>
                </div>
            </div>
            <hr className=' hidden md:block border border-solid border-[#EBEBEB]  mx-[8rem]' />

            <div className='flex flex-col gap-[1rem] mt-[1git rem] border-r border-gray-200'>
                <div className='flex flex-row md:flex-col gap-[1rem] md:gap-0'>
                    <p className='text-[#9999B4]'>Interest Earned - 10%</p>
                    <p>N400</p>
                </div>
                <div className='flex flex-row md:flex-col gap-[1rem] md:gap-0'>
                    <p className='text-[#9999B4]'>Start Date </p>
                    <p>30/09/2021</p>
                </div>
                <div className='flex flex-row md:flex-col gap-[1rem] md:gap-0'>

                    <p className='text-[#9999B4]'>End Date </p>
                    <p>30/11/2021</p>
                </div>
            </div>
            <hr className=' hidden md:block border border-solid border-[#EBEBEB]  mx-[8rem]' />

            <div className='flex flex-col gap-[1rem] mt-[1git rem] border-r border-gray-200'>
                <div className='flex flex-row md:flex-col gap-[1rem] md:gap-0'>
                    <p className='text-[#9999B4]'>Frequency of Savings</p>
                    <p>Monthly</p>
                </div>
                <div className='flex flex-row md:flex-col gap-[1rem] md:gap-0'>
                    <p className='text-[#9999B4]'>Debit Date/Time</p>
                    <p>21st of every month by 4pm</p>
                </div>
                <div className='flex flex-row md:flex-col gap-[1rem] md:gap-0'>

                    <p className='text-[#9999B4]'>Amount to be paid</p>
                    <p>N100,000</p>
                </div>
                
            </div>
            
        </div>
  )
}

export default SavingsCard