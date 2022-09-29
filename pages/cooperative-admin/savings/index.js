import { LoadingButton } from "@mui/lab";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import AppLayout from "../../../components/layouts/AppLayout";
import ManagerSwitcher from "../../../components/ManagerSwitcher";
import FixedSavings from "./fixed/FixedSavings";
import GoalSavings from "./GoalSavings";
import { displayGoalSavings } from "../../../services/cooperative-admin.js"
import CreateGoalPlanModal from "../../../components/modal/saving/goal/CreateGoalPlanModal";
import CreateFixedPlanModal from "../../../components/modal/saving/fixed/CreateFixedPlanModal";

const PLANS = [
  {title:"Goal Saving", id:"GOAL_SAVING"},
  {title:"Fixed Saving", id:"FIXED_SAVING"},
  
]
const Savings = () => {
  const router = useRouter();
  const [activeTable, setActiveTable] = useState("GOAL_SAVING");
  const [plan, setPlan] = useState("");
  const [emptySavings, setEmptySavings] =useState(true)
  const [loading, setLoading] = useState(false);
  const [dataValue, setDataValue] =useState([])
  // const dataValue= setDataValue(myData.data.data);

  useEffect (() =>  {
    const handleSubmit = async () => {
    try {
     const myData= await displayGoalSavings()
     setDataValue(myData?.data?.data);
      console.log(myData)
      setInputValue({
          title:"",
          startDate: null,
          endDate: null,
          savingType: "",
          targetAmount:"",
          duration: "",
          debitDate: null,
          statusOfPlan:"",
          frequencyOfSavings:"",
      })
  } catch (error) {
      // toast.error(data?.message, { duration: 10000 });
  }
  }
  handleSubmit()
  }, [])
   
    


  return (
    <AppLayout>
       { plan==="FIXED_SAVING" && <CreateFixedPlanModal
         activeTab={plan}
         toggle={setPlan}
         name="FIXED_SAVING"
        />}


       { plan==="GOAL_SAVING" && <CreateGoalPlanModal
        activeTab={plan}
        toggle={setPlan}
        name="GOAL_SAVING"
         />}

      <div className="flex flex-row justify-between">
      <ManagerSwitcher
        handleChange={(item) => {
          setActiveTable(item);
        }}
        items={PLANS}
      ></ManagerSwitcher>

      <div className="w-[200px] ">
      <LoadingButton
            onClick={()=>setPlan(activeTable)}
            loading={loading}
            variant="contained"
          >
            Create Plan
          </LoadingButton>
      </div>
     </div>
     {emptySavings ?
     <div className="mt-[15%] flex flex-col justify-center content-center ">
        <div className="items-center  mx-[auto]"><Image onClick={()=>setEmptySavings(!emptySavings)} src='/images/empty2.png' alt='empty' width='100px' height='100px' /></div>
        <p className="items-center  mx-[auto]">No Saving plan</p>
      </div> : 
      <>
      {activeTable === "GOAL_SAVING" && <>
      {dataValue.map((item, index) => {
        return (
      <GoalSavings key={index} amount={item.targetAmount} statusOfPlan={item.statusOfPlan} percentage={item.interestAmount} title={item.title} />
      );})}
            </>}
      {activeTable === "FIXED_SAVING" && <FixedSavings />}
      
      </>
      }
     
    </AppLayout>
  );
};

export default Savings;
