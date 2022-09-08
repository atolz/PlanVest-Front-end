import React, {useState} from 'react';
import AppLayout from '../../../../components/layouts/AppLayout';
import Header from '../../../../components/layouts/Header';
import ManagerSwitcher from '../../../../components/ManagerSwitcher';
import ErrorModal from '../../../../components/modal/ErrorModal';
import TopUpModal from '../../../../components/modal/saving/fixed/TopUpModal';
import TransferWalletModal from '../../../../components/modal/saving/fixed/TransferWalletModal';
import SuccessModal from '../../../../components/modal/SuccessModal';
import AllTransaction from '../../../../components/tables/savings/fixed/AllTransactions';
import FailedTransaction from '../../../../components/tables/savings/fixed/FailedTransaction';
import PendingTransaction from '../../../../components/tables/savings/fixed/PendingTransaction';
import SuccessTransaction from '../../../../components/tables/savings/fixed/SuccessfulTran';


const FIXEDSAVINGS = [
  {title:"All (2000)", id:"ALL_SAVINGS"},
  {title:"Pending (400)", id:"PENDING_SAVINGS"},
  {title:"Successful (1400)", id:"SUCCESS_SAVINGS"},
  {title:"Failed (200)", id:"FAILED_SAVINGS"},
  
]


const ViewFixed = () => {
  const [activeTable, setActiveTable] = useState("All (2000)");
  const [error, setError] = useState(false);
  const [startTopUp, setStartTopUp] = useState(false);
  const [startTransfer, setStartTransfer] = useState(false);
  const [transferSuccess, setTransferSuccess] = useState(false);
  
  function myFunc(){
    setStartTransfer(false)
    setTransferSuccess(true)
  }
  function myFunc2(){
    setStartTopUp(false)
    setError(true)
  }
  return (
    <AppLayout>

        {/* {Top Up Modal} */}
        
        {/* { startTopUp && <CreatePlanModal */}
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

        <Header title='Christmas Savings' withBack='true' withTwoBtn='true' 
            unColoredBtnTitle='Top-up' coloredBtnTitle='Transfer to Wallet'
            coloredBtnClick={setStartTransfer} unColoredBtnClick={setStartTopUp} 
            />
        <div className='bg-white p-[3rem] rounded-xl flex flex-row my-[3rem] '>
            <div className='flex flex-col gap-[3rem] border-r border-gray-200'>
                <div>
                    <p className='text-[#9999B4]'>Target Amount</p>
                    <p>N800m</p>
                </div>
                <div>
                    <p className='text-[#9999B4]'>Status of the plan </p>
                    <p>Ongoing</p>
                </div>
            </div>
            <hr className=' border border-solid border-[#EBEBEB]  mx-[8rem]' />
            <div className='flex flex-col gap-[3rem] border-r border-gray-200'>
                <div>
                    <p className='text-[#9999B4]'>Interest Earned - 10%</p>
                    <p>N400</p>
                </div>
                <div>
                    <p className='text-[#9999B4]'>Start Date </p>
                    <p>30/09/2021</p>
                </div>
            </div>
            <hr className=' border border-solid border-[#EBEBEB]  mx-[8rem]' />
            <div className='flex flex-col gap-[3rem] border-r border-gray-200'>
                <div>
                    <p className='text-[#9999B4]'>Amount to be locked</p>
                    <p>N30,000</p>
                </div>
                <div>
                    <p className='text-[#9999B4]'>End Date </p>
                    <p>30/11/2021</p>
                </div>
            </div>
            
        </div>

        <ManagerSwitcher
        handleChange={(item) => {
          setActiveTable(item);
        }}
        items={FIXEDSAVINGS}
      ></ManagerSwitcher>
        {activeTable === "ALL_SAVINGS" && <AllTransaction />}
        {activeTable === "PENDING_SAVINGS" && <PendingTransaction />}
        {activeTable === "SUCCESS_SAVINGS" && <SuccessTransaction />}
        {activeTable === "FAILED_SAVINGS" && <FailedTransaction />}
    </AppLayout>
  )
}

export default ViewFixed;