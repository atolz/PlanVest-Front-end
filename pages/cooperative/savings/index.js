import toast from "react-hot-toast";
import GoalSavings from "./GoalSavings";
import { useRouter } from "next/router";
import { LoadingButton } from "@mui/lab";
import FixedSavings from "./fixed/FixedSavings";
import React, { useState } from "react";
import AppLayout from "../../../components/layouts/AppLayout";
import ManagerSwitcher from "../../../components/ManagerSwitcher";
import CreateGoalPlanModal from "../../../components/modal/saving/goal/CreateGoalPlanModal";
import CreateFixedPlanModal from "../../../components/modal/saving/fixed/CreateFixedPlanModal";

const PLANS = [
  {title:"Goal Saving", id:"GOAL_SAVING"},
  {title:"Fixed Saving", id:"FIXED_SAVING"},
  
]


const Savings = () => {
  const [plan, setPlan] = useState("");
  const [trigger, setTrigger] = useState(true);
  const [loading, setLoading] = useState(false);
  const [activeTable, setActiveTable] = useState("GOAL_SAVING");

  return (
    <AppLayout>
       { plan==="FIXED_SAVING" && <CreateFixedPlanModal
         activeTab={plan}
         toggle={setPlan}
         name="FIXED_SAVING"
        //  trigger={trigger}
        //  setTrigger={setTrigger}
        />}

       { plan==="GOAL_SAVING" && <CreateGoalPlanModal
        activeTab={plan}
        toggle={setPlan}
        name="GOAL_SAVING"
        trigger={trigger}
        setTrigger={setTrigger}
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
      <>
        {activeTable === "GOAL_SAVING" && 
          <GoalSavings trigger={trigger} />
        }
        {activeTable === "FIXED_SAVING" && 
          <FixedSavings   />
        }
      </>
     
    </AppLayout>
  );
};

export default Savings;
