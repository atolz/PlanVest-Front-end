import Image from 'next/image';
import React, {useState} from 'react';
import { useRouter } from "next/router";
import Header from '../../../../../components/layouts/Header';
import ErrorModal from '../../../../../components/modal/ErrorModal';
import AppLayout from '../../../../../components/layouts/AppLayout';
import SuccessModal from '../../../../../components/modal/SuccessModal';
import SavingsCard from '../../../../../components/pages/savings/SavingsCard';
import AddMemberModal from '../../../../../components/modal/saving/goal/AddMember';
import LogPaymentModal from '../../../../../components/modal/saving/goal/LogPayment';
import PaymentTransaction from '../../../../../components/tables/savings/goal/PaymentTransactions';


// const GOALSAVINGS = [
//   {title:"All (2000)", id:"ALL_SAVINGS"},
//   {title:"Pending (400)", id:"PENDING_SAVINGS"},
//   {title:"Successful (1400)", id:"SUCCESS_SAVINGS"},
//   {title:"Failed (200)", id:"FAILED_SAVINGS"},
  
// ]
const ViewGoal = () => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [paymentLog, setPaymentLog] = useState(false);
  const [addMember, setAddMember] = useState(false);
  const [transferSuccess, setTransferSuccess] = useState(false);
  
  function viewDetails(){
    router.push('/cooperative-admin/savings/goal/third-party/view-details')
  }
  
  return (
    <AppLayout>

        {/* {Log payment Modal} */}
        
        { paymentLog && <LogPaymentModal
        toggle={()=>setPaymentLog(false)}
        open={()=>setPaymentLog(true)} />}

        {/* { Error Modal */}
        { error && <ErrorModal
        toggle={()=>setError(false)}
        open={()=>setError(true)} />}

        {/* {Add Member Modal} */}
        { addMember && <AddMemberModal
        toggle={()=>setAddMember(false)}
        open={()=>setAddMember(true)} />}

        {/* {Transfer to wallet SUCCESS modal} */}
        { transferSuccess && <SuccessModal
        msg='N300,000 was successfully transferred to your wallet.'
        btnText='Check Wallet'
        toggle={()=>setTransferSuccess(false)}
        open={()=>setTransferSuccess(true)} />}

        <Header title='Christmas Savings' withBack='true' withTwoBtn='true' 
            unColoredBtnTitle='Log In Payment' coloredBtnTitle='Add Members'
            coloredBtnClick={setAddMember} unColoredBtnClick={setPaymentLog} 
            />
        <SavingsCard />
        <div className='bg-white rounded-xl py-[3rem] px-[2rem]'>
        <div className=' rounded-lg flex flex-row p-[1rem] bg-[#F0F2F3]'>
                <Image src='/images/search.svg' alt='search' height='20px' width='20px' />
                <input
                    className=" bg-[#F0F2F3] ml-[2rem] w-full text-[14px] border-[#F0F2F3] border-solid focus:border-[#F0F2F3] placeholder:text-black rounded-2xl"
                    type='search'
                    placeholder='Search'
                ></input>
            </div>
        </div>
        <PaymentTransaction onClick={viewDetails} />
    </AppLayout>
  )
}

export default ViewGoal;