import { LoadingButton } from "@mui/lab";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Image from 'next/image';
import AppLayout from "../../../components/layouts/AppLayout";
import ManagerSwitcher from "../../../components/ManagerSwitcher";
import AllInvestment from "../../../components/pages/investment/AllInvestment";
import PendingInvestment from "../../../components/pages/investment/PendingInvestment";
import ApprovedInvestment from "../../../components/pages/investment/ApprovedInvestment";
import DeclinedInvestment from "../../../components/pages/investment/DeclinedInvestment";


const INVESTMENTS = [
  {title:"All (2000)", id:"ALL_INVESTMENTS"},
  {title:"Pending (400)", id:"PENDING_INVESTMENTS"},
  {title:"Approved (200)", id:"APPROVED_INVESTMENTS"},
  {title:"Declined (1400)", id:"DECLINED_INVESTMENTS"},
  
]
const Investments = () => {
  const router = useRouter();
  const [activeTable, setActiveTable] = useState("ALL_INVESTMENTS");
  const [createPlan, setCreatePlan] = useState(false);
  const [emptySavings, setEmptySavings] =useState(true)
  const [loading, setLoading] = useState(false);
  return (
    <AppLayout>
      

        <ManagerSwitcher
          handleChange={(item) => {
            setActiveTable(item);
          }}
          items={INVESTMENTS}
        ></ManagerSwitcher>
          
      {emptySavings ?
      <div className="mt-[15%] flex flex-col justify-center content-center ">
          <div className="items-center  mx-[auto]"><Image onClick={()=>setEmptySavings(!emptySavings)} src='/images/empty2.png' alt='empty' width='100px' height='100px' /></div>
          <p className="items-center  mx-[auto]">No Investment plan</p>
        </div> : 
        <>
          {activeTable === "ALL_INVESTMENTS" && <AllInvestment />}
          {activeTable === "PENDING_INVESTMENTS" && <PendingInvestment />}
          {activeTable === "APPROVED_INVESTMENTS" && <ApprovedInvestment />}
          {activeTable === "DECLINED_INVESTMENTS" && <DeclinedInvestment />}
        
        </>
        }
      
      </AppLayout>
  );
};

export default Investments;