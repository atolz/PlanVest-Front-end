import Image from 'next/image';
import { useRouter } from "next/router";
import React,{useState, useEffect} from 'react';
import PlanCard from '../../../components/cards/PlanCard';
import { displayGoalSavings } from "../../../services/cooperative-admin.js"

const GoalSavings = () => {
  const router = useRouter();
  const [filterSelf, setFilterSelf] =useState([]);
  const [filterThird, setFilterThird] =useState([]);
  const [emptySavings, setEmptySavings] =useState('');
  
  function viewThirdParty(id){
    router.push({
      pathname: '/cooperative-admin/savings/third-party',
      query: { id},
    })
  }
    function viewSelf(id){
      router.push({
        pathname: '/cooperative-admin/savings/self/view',
        query: { id},
      })
    }

  useEffect (() =>  {
    const handlePageLoad = async () => {
    try {
     const myData= await displayGoalSavings();
     const testData= myData?.data;
        if (testData.length >= 1) {
          setEmptySavings(false);
        } else {
          setEmptySavings(true);
        }
     const newData= myData.data.data;
      const self = newData.filter(obj => {
        return obj.savingType === 'self-management';
      });
      console.log(self);
      const thirdParty = newData.filter(obj => {
        return obj.savingType === 'third-party';
      });
      console.log(thirdParty);
      setFilterSelf(self)
      setFilterThird(thirdParty)
    } catch (error) {
        // toast.error(data?.message, { duration: 10000 });
    }
    }
  handlePageLoad()
  }, [])


  return (
    <>
      {emptySavings ?
     <div className="mt-[15%] flex flex-col justify-center content-center ">
        <div className="items-center  mx-[auto]"><Image src='/images/empty2.png' alt='empty' width='100px' height='100px' /></div>
        <p className="items-center  mx-[auto]">No Saving plan</p>
      </div> :
   
    <section className="flex flex-col">
        <div className="flex flex-col bg-white px-[2rem] pt-[2rem] rounded-xl  ">
          <p>Self Management Savings</p>
          <hr className="my-[1.5rem] " />

          <div className=" flex  p-[2rem] flex-wrap gap-[2rem] max-h-[320px]  overflow-y-scroll scroll_hide ">
          {filterSelf?.map((item, index) => {
            // console.log(item);
            return (
              <PlanCard key={index} onClick={()=>viewSelf(item.id)} percentage='10' amount={item.targetAmount} statusOfPlan={item.statusOfPlan} title={item.title} bg='beige' />
              );})}
            <PlanCard onClick={()=>viewSelf} amount='600,000,000' percentage='10' bg='beige' statusOfPlan='matured' title='Christmas Savings' />
          </div>
        </div>

        <div className="flex flex-col my-[5rem] bg-white px-[2rem] pt-[2rem] rounded-xl  ">
          <p>Third-Party Management Savings</p>
          <hr className="my-[1.5rem] " />

          <div className="flex p-[2rem] flex-wrap gap-[2rem] max-h-[320px]  overflow-y-scroll scroll_hide">
          {filterThird?.map((item, index) => {
          return (
            <PlanCard key={index} onClick={()=>viewThirdParty(item.id)} percentage='10' amount={item.targetAmount} statusOfPlan={item.statusOfPlan} title={item.title} />
            );})}
            <PlanCard  amount='600,000,000' percentage='10' statusOfPlan='matured' title='Agro-Allied Savings' />
            {/* <PlanCard onClick={viewThirdParty} amount='N600,000,000' percentage='10%' status='Ongoing' title='Christmas Savings' /> */}
          </div>
        </div>

      </section>}
      </>
  )
}

export default GoalSavings;