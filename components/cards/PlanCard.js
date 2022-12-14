import React from 'react';
import Image from 'next/image';
import formatNumberWithCommas from '../../utils/addCommas';
import CurrencySymbol from '../general/CurrencySymbol';

const PlanCard = ({amount, percentage, status, statusOfPlan, title, bg='', fixed, onClick}) => {
  return (

    <div onClick={onClick} className={`${bg == "beige" ? 'bg-pv_bg' : "bg-[#cdd7e9]"} flex flex-col gap-[2rem] w-[450px] h-[190px] rounded-xl p-[2rem] cursor-pointer `}> 

         {fixed ? 
        <>
            <div className='flex flex-row justify-between'>
                <p className="h-full body_heavy text-[#9999B4]  flex items-center">{title}</p>
                <p className={`h-full flex items-center text-[#9999B4] `}>{status} 
                <span className='ml-[0.4rem]'>{status == 'matured' ?
                    <Image src='/images/lock.svg' alt='lock' width='20px' height='15px' />:
                    <Image src='/images/unlock.svg' alt='unlock' width='20px' height='15px' />}
                </span></p>
            </div>
            <div><p className="h-full text-[#1D1D1D] font-extrabold text-[24px] flex items-center"><CurrencySymbol/>{formatNumberWithCommas(amount)}</p></div>
                
            <div className='flex flex-row justify-between'>
                <Image src='/images/users.svg' alt='img' width='200px' height='50px' />
                <p className="h-full text-[#137C4B] flex items-center">{percentage}%</p>
            </div>
            </>:
            <>
            <div className='flex flex-row justify-between'>
                <p className="h-full body_heavy text-[#9999B4]  flex items-center">{title}</p>
                <p className={`h-full flex items-center  ${statusOfPlan == "matured" ? "text-[#137C4B]" :  "Ongoing" ? "text-[#B548C6]" : "text-[#9999B4] "}`}>{statusOfPlan}</p>
            </div>
            <div><p className="h-full text-[#1D1D1D] font-extrabold text-[24px] flex items-center"><CurrencySymbol/>{formatNumberWithCommas(amount)}</p></div>
                
            <div className='flex flex-row justify-between'>
                <Image src='/images/users.svg' alt='img' width='200px' height='50px' />
                <p className="h-full text-[#137C4B] flex items-center">{percentage}%</p>
            </div></> 
        }
    </div>
  )
}

export default PlanCard;