import Image from 'next/image';
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import React,{useState, useEffect} from 'react';
import PlanCard from '../../../../components/cards/PlanCard';
import { displayFixedSavings } from "../../../../services/cooperative-admin.js"

const FixedSavings = () => {
  const router = useRouter();
  const [emptySavings, setEmptySavings] =useState('');
  const [fixedDataValue, setFixedDataValue] =useState([]);
 

  function view(id){
    router.push({
      pathname: '/cooperative-admin/savings/fixed/view',
      query: { id},
    })
  }
  // ty to create a modal after succesful creation, load and display all with your timer
   
  // display fixed goal
    useEffect (() =>  {
      const handleFix = async () => {
        try {
        const fixData= await displayFixedSavings()
        console.log('this is fetching fixed savings for display')
        const newData= fixData?.data;
        if (newData.length >= 1) {
          setEmptySavings(false);
        } else {
          setEmptySavings(true);
        }
        setFixedDataValue(fixData?.data?.data);
          console.log(fixData)
          setInputValue({
            title:"",
            startDate: null,
            endDate: null,
            amountTobeSaved:"",
          })
      } catch (error) {
          // toast.error(data?.message, { duration: 10000 });
      }}
      handleFix()
    }, [])
  return (
    <>
    {emptySavings ?
     <div className="mt-[15%] flex flex-col justify-center content-center ">
        <div className="items-center  mx-[auto]"><Image src='/images/empty2.png' alt='empty' width='100px' height='100px' /></div>
        {/* <div className="items-center  mx-[auto]"><Image onClick={()=>setEmptySavings(!emptySavings)} src='/images/empty2.png' alt='empty' width='100px' height='100px' /></div> */}
        <p className="items-center  mx-[auto]">No Saving plan</p>
      </div> :
    <div className="flex flex-wrap gap-[1.5rem]">
      {fixedDataValue?.map((item, index) => {
        return (
          <PlanCard key={index} onClick={()=>view(item.id)} amount={item.amountTobeSaved} title={item.title}  percentage='10' status='100 days left' fixed='true' />
        );})}
    <PlanCard amount='600,000,' percentage='10' fixed='true' status='Matured' title='Agro-Allied Savings'  onClick={view} />
 </div>}
    </>
  )
}

export default FixedSavings;