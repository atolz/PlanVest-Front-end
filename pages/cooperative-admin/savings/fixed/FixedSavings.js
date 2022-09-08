import React from 'react'
import { useRouter } from "next/router";
import PlanCard from '../../../../components/cards/PlanCard'

const FixedSavings = () => {
  const router = useRouter();
  function view(){
    router.push("/cooperative-admin/savings/fixed/view");
  }
  return (
    <div className="flex flex-wrap gap-[1.5rem]">
    <PlanCard amount='N600,000,000' percentage='10%' fixed='true' status='100 days left' title='Agro-Allied Savings'  onClick={view} />
    <PlanCard amount='N600,000,000' percentage='10%' fixed='true' status='Matured' title='Agro-Allied Savings' onClick={view} />
 </div>
  )
}

export default FixedSavings