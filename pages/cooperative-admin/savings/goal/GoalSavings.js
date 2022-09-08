import React from 'react';
import { useRouter } from "next/router";
import PlanCard from '../../../../components/cards/PlanCard'

const GoalSavings = () => {
  const router = useRouter();
  function viewThirdParty(){
    router.push("/cooperative-admin/savings/goal/third-party/view");
  }
  function viewSelf(url){
    router.push(`/cooperative-admin/savings/goal/self/${url}`);
  }
  return (
    <section className="flex flex-col">
        <div className="flex flex-col bg-white px-[2rem] pt-[2rem] rounded-xl  ">
          <p>Self Management Savings</p>
          <hr className="my-[1.5rem] " />
          <div className="flex flex-wrap gap-[1.5rem] max-h-[320px] overflow-y-auto">
            <PlanCard onClick={()=>viewSelf("matured")} amount='N600,000,000' percentage='10%' bg='beige' status='Matured' title='Agro-Allied Savings' />
            <PlanCard onClick={()=>viewSelf("matured")} amount='N600,000,000' percentage='10%' bg='beige' status='Matured' title='Agro-Allied Savings' />
            <PlanCard onClick={()=>viewSelf("ongoing")} amount='N600,000,000' percentage='10%' bg='beige' status='Ongoing' title='Christmas Savings' />
          </div>
        </div>

        <div className="flex flex-col my-[5rem] bg-white px-[2rem] pt-[2rem] rounded-xl  ">
          <p>Third-Party Management Savings</p>
          <hr className="my-[1.5rem] " />
          <div className="flex flex-wrap gap-[1.5rem] max-h-[320px] overflow-y-auto">
            <PlanCard onClick={viewThirdParty} amount='N600,000,000' percentage='10%' status='Matured' title='Agro-Allied Savings' />
            <PlanCard onClick={viewThirdParty} amount='N600,000,000' percentage='10%' status='Matured' title='Agro-Allied Savings' />
            <PlanCard onClick={viewThirdParty} amount='N600,000,000' percentage='10%' status='Ongoing' title='Christmas Savings' />
          </div>
        </div>

      </section>
  )
}

export default GoalSavings;