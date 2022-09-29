import Image from 'next/image';
import React, {useState} from 'react';
import { useRouter } from "next/router";
import Header from '../../../../components/layouts/Header';
import ErrorModal from '../../../../components/modal/ErrorModal';
import AppLayout from '../../../../components/layouts/AppLayout';
import SuccessModal from '../../../../components/modal/SuccessModal';
import TopUpModal from '../../../../components/modal/saving/fixed/TopUpModal';
import SavingsCard from '../../../../components/pages/savings/SavingsCard';
import TransferWalletModal from '../../../../components/modal/saving/fixed/TransferWalletModal';
import PaymentTransaction from '../../../../components/tables/savings/goal/PaymentTransactions';


// const GOALSAVINGS = [
//   {title:"All (2000)", id:"ALL_SAVINGS"},
//   {title:"Pending (400)", id:"PENDING_SAVINGS"},
//   {title:"Successful (1400)", id:"SUCCESS_SAVINGS"},
//   {title:"Failed (200)", id:"FAILED_SAVINGS"},
  
// ]
const ViewGoal = () => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [startTopUp, setStartTopUp] = useState(false);
  const [startTransfer, setStartTransfer] = useState(false);
  const [transferSuccess, setTransferSuccess] = useState(false);

  const { view } = router.query

  
 const isMaturedPage = (view==='matured')
  
  function myFunc(){
    setStartTransfer(false)
    setTransferSuccess(true)
  }
  function myFunc2(){
    setStartTopUp(false)
    setError(true)
  }
  function viewDetails(){
    router.push('/cooperative-admin/savings/goal/self/view-details')
  }
  return (
    <AppLayout>

        {/* {Top Up Modal} */}
        { startTopUp && <TopUpModal 
        toggle={()=>setStartTopUp(false)}
        open={()=>setStartTopUp(true)}
        onClick={myFunc2} />}

        {/* { Error Modal */}
        { error && <ErrorModal
        toggle={()=>setError(false)}
        open={()=>setError(true)} />}

        {/* {Transfer to wallet Modal} */}
        { startTransfer && <TransferWalletModal
        toggle={()=>setStartTransfer(false)}
        open={()=>setStartTransfer(true)}
        onClick={myFunc} />}

        {/* {Transfer to wallet SUCCESS modal} */}
        { transferSuccess && <SuccessModal
        msg='N300,000 was successfully transferred to your wallet.'
        btnText='Check Wallet'
        toggle={()=>setTransferSuccess(false)}
        open={()=>setTransferSuccess(true)} />}

          {isMaturedPage? <Header title='Company Title' withBack='true' coloredBtnTitle='Pay Members'
            coloredBtnClick={setStartTransfer} unColoredBtnClick={setStartTopUp} 
            />:  <Header title='company title' withBack='true' coloredBtnTitle='Add Members'
            coloredBtnClick={setStartTransfer} withTwoBtn unColoredBtnTitle="Log In Payment" unColoredBtnClick={setStartTopUp} 
            />}
       
            
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