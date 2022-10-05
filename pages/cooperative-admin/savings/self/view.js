import Image from 'next/image';
import React, {useState, useEffect} from 'react';
import { useRouter } from "next/router";
import Header from '../../../../components/layouts/Header';
import ErrorModal from '../../../../components/modal/ErrorModal';
import AppLayout from '../../../../components/layouts/AppLayout';
import SuccessModal from '../../../../components/modal/SuccessModal';
import SavingsCard from '../../../../components/pages/savings/SavingsCard';
import TopUpModal from '../../../../components/modal/saving/fixed/TopUpModal';
import { displaySingleGoalSavings } from '../../../../services/cooperative-admin.js/index.js';
import TransferWalletModal from '../../../../components/modal/saving/fixed/TransferWalletModal';
import PaymentTransaction from '../../../../components/tables/savings/goal/PaymentTransactions';


const ViewGoal = () => {
  const router = useRouter();
  const { id } = router.query;
  const [error, setError] = useState(false);
  const [inputValue, setInputValue] =useState([]);
  const [startTopUp, setStartTopUp] = useState(false);
  const [startTransfer, setStartTransfer] = useState(false);
  const [transferSuccess, setTransferSuccess] = useState(false);
     
  //   endDate: null,
  //   amountPaid: "",
  //   debitDate: null,
  //   startDate: null,
  //   amountSaved: "",
  //   statusOfPlan: "",
  //   targetAmount: "",
  //   interestEarned: "",
  //   interestPercent: "",
  //   frequencyOfSavings: "",
  // });
  
  useEffect (() =>  {
    const handleSubmit = async (id) => {
    try {
      const myData= await displaySingleGoalSavings(id)
      const newData= myData?.data;
      console.log(newData)
      setInputValue(newData)
      
      } catch (error) {
        // toast.error(data?.message, { duration: 10000 });
      }
      }
      if(id){
        console.log(id)
        handleSubmit(id)
      }
      }, [id])
 

  function myFunc(){
    setStartTransfer(false)
    setTransferSuccess(true)
  }
  function myFunc2(){
    setStartTopUp(false)
    setError(true)
  }
  function viewDetails(){
    router.push('/cooperative-admin/savings/self/view-details')
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

          {inputValue?.statusOfPlan === 'matured' ?
            <Header title='Company Title' withBack='true' coloredBtnTitle='Pay Members'
            coloredBtnClick={setStartTransfer} unColoredBtnClick={setStartTopUp} 
            />
            :  <Header title='company title' withBack='true' coloredBtnTitle='Add Members'
            coloredBtnClick={setStartTransfer} withTwoBtn unColoredBtnTitle="Log In Payment" unColoredBtnClick={setStartTopUp} 
            />}
       
            
        <SavingsCard
          endDate={inputValue?.endDate}
          amountSaved='0'
          startDate={inputValue?.startDate}
          debitDate={inputValue?.debitDate}
          amountPaid={inputValue?.amount}
          statusOfPlan={inputValue?.statusOfPlan}
          targetAmount={inputValue?.targetAmount}
          interestEarned={inputValue?.interestEarned}
          interestPercent={inputValue?.interestPercent}
          frequencyOfSavings={inputValue?.frequencyOfSavings}
        />
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


// how the goal savings was before malfunction
// const GoalSavings = () => {
//   const router = useRouter();
//   const [goalDataValue, setGoalDataValue] =useState([])
//   const [filterSelf, setFilterSelf] =useState([])
//   const [filterThird, setFilterThird] =useState([])

//   function viewThirdParty(){
//     router.push("/cooperative-admin/savings/third-party");
//   }
//   function viewSelf(url){
//     router.push(`/cooperative-admin/savings/self/${url}`);
//   }

//   useEffect (() =>  {
//     const handleSubmit = async () => {
//     try {
//      const myData= await displayGoalSavings()
//     //  const myDateDiff= (endDate- startDate);
//     //  const myMonthlyDuration= (myDateDiff / 30);
//     //  const myDuration= Math.ceil(myMonthlyDuration );
     
//      console.log('this is fetching goal savings for display')
//      setGoalDataValue(myData?.data?.data);

//       // console.log(newData)

//       const newData= myData.data.data;
//       console.log(newData)
//       const self = newData.filter(obj => {
//         return obj.savingType === 'self-management';
//       });
//       console.log(self);
//       const thirdParty = newData.filter(obj => {
//         return obj.savingType === 'third-party';
//       });
//       console.log(thirdParty);
//       setFilterSelf(self)
//       setFilterThird(thirdParty)
//     } catch (error) {
//         // toast.error(data?.message, { duration: 10000 });
//     }
//     }
//   handleSubmit()
//   }, [])


//   return (

// condition for checking status

// const myData= await displaySingleGoalSavings()
//       const newData= myData?.data?.data;
//       if (obj.statusOfPlan === 'matured') {
//         router.push("cooperative-members/dashboard");
//       }
//       else if (obj.statusOfPlan === 'ongoing') {
//         router.push("cooperative-members/dashboard");
//       }