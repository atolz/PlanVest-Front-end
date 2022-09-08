import { LoadingButton } from "@mui/lab";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Image from 'next/image';
import AppLayout from "../../../components/layouts/AppLayout";
import ManagerSwitcher from "../../../components/ManagerSwitcher";
import LoanManager from "../../../components/pages/loan/Manager";
import AllLoan from "../../../components/pages/loan/AllLoan";
import PendingLoan from "../../../components/pages/loan/PendingLoan";
import ApprovedLoan from "../../../components/pages/loan/ApprovedLoan";
import DeclinedLoan from "../../../components/pages/loan/DeclinedLoan";
import AllCorporateLoan from "../../../components/pages/loan/corperate/AllCorporateLoan";
import PendingCorporateLoan from "../../../components/pages/loan/corperate/PendingCorporateLoan";
import ApprovedCorporateLoan from "../../../components/pages/loan/corperate/ApprovedCorporateLoan";
import DeclinedCorporateLoan from "../../../components/pages/loan/corperate/DeclinedCorporateLoan";


const LOANS = [
  {title:"All (2000)", id:"ALL_LOAN"},
  {title:"Pending (400)", id:"PENDING_LOAN"},
  {title:"Approved (200)", id:"APPROVED_LOAN"},
  {title:"Declined (1400)", id:"DECLINED_LOAN"},
  
]
const LoanPage = () => {
  const router = useRouter();
//   const [activeManager, setActiveManager] = useState();
  const [activeTable, setActiveTable] = useState("ALL_LOAN");
  const [activeTable2, setActiveTable2] = useState("Personal Loans");
  // const [createPlan, setCreatePlan] = useState(false);
  const [emptySavings, setEmptySavings] =useState(true)
  const [loading, setLoading] = useState(false);
  return (
    <AppLayout>
       {/* { createPlan && <CreatePlanModal
        toggle={()=>setCreatePlan(false)}
        open={()=>setCreatePlan(true)} />} */}

        <LoanManager
                handleChange={(item) => {
                setActiveTable2(item);
                }}
                items={["Personal Loans", "Corporate Loans", "My Loans"]}
            ></LoanManager>
            {activeTable2 == "Personal Loans" && <>
        <ManagerSwitcher
                handleChange={(item) => {
                setActiveTable(item);
                }}
                className='ml-[2rem]'
                items={LOANS}
            ></ManagerSwitcher>
        
        {emptySavings ?
        <div className="mt-[15%] flex flex-col justify-center content-center ">
            <div className="items-center  mx-[auto]"><Image onClick={()=>setEmptySavings(!emptySavings)} src='/images/loanempty.svg' alt='empty' width='150px' height='150px' /></div>
            <p className="items-center  mx-[auto]">No Loan Application</p>
          </div> : 
          <>
            {activeTable === "ALL_LOAN" && <AllLoan />}
            {activeTable === "PENDING_LOAN" && <PendingLoan />}
            {activeTable === "APPROVED_LOAN" && <ApprovedLoan />}
            {activeTable === "DECLINED_LOAN" && <DeclinedLoan />}
          
          </>
          }
          </>}
            {activeTable2 == "Corporate Loans" && <>
            <ManagerSwitcher
                    handleChange={(item) => {
                    setActiveTable(item);
                    }}
                    className='ml-[2rem]'
                    items={LOANS}
                ></ManagerSwitcher>
            
            {emptySavings ?
            <div className="mt-[15%] flex flex-col justify-center content-center ">
                <div className="items-center  mx-[auto]"><Image onClick={()=>setEmptySavings(!emptySavings)} src='/images/loanempty.svg' alt='empty' width='150px' height='150px' /></div>
                <p className="items-center  mx-[auto]">No Corperate Loan Application</p>
              </div> : 
              <>
                {activeTable == "ALL_LOAN" && <AllCorporateLoan />}
                {activeTable == "PENDING_LOAN" && <PendingCorporateLoan />}
                {activeTable == "APPROVED_LOAN" && <ApprovedCorporateLoan />}
                {activeTable == "DECLINED_LOAN" && <DeclinedCorporateLoan />}
              
              </>
              }
              </>}
     
    </AppLayout>
  );
};

export default LoanPage;