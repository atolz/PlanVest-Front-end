import React, {useState} from 'react';
import AppLayout from '../../../components/layouts/AppLayout';
import { useRouter } from "next/router";
import Search from '../../../components/form-elements/Search';
import { LoadingButton } from '@mui/lab';
import MembersTable from '../../../components/tables/members/MembersTable';
import PersonalDetailsModal from '../../../components/modal/member/PersonalDetailsModal';
import ModeOfIdentificationModal from '../../../components/modal/member/ModeOfIdentificationModal';
import NextOfKinInfoModal from '../../../components/modal/member/NextOfKinInfoModal';
import MemberTypeModal from '../../../components/modal/member/MemberTypeModal';

const View = () => {
  const router = useRouter();
  const [memberType, setMemberType] = useState(false);
  const [personalDetails, setPersonalDetails] = useState(false);
  const [indentityMode, setIndentityMode] = useState(false);
  const [kin, setKin] = useState(false);
      
  function viewPage(){
    router.push("/cooperative-admin/members/view");
  }
  function editPage(){
    router.push("/cooperative-admin/members/edit");
  }
  function viewNewMember(){
    setMemberType(false)
    setPersonalDetails(true)
  }
  function viewId(){
    setPersonalDetails(false)
    setIndentityMode(true)
  }
  function backtoViewId(){
    setKin(false)
    setIndentityMode(true)
  }
  function backtoViewPersonalDetails(){
    setIndentityMode(false)
    setPersonalDetails(true)
  }
  function viewKin(){
    setIndentityMode(false)
    setKin(true)
  }
  
  
  return (
    <AppLayout>
        {/* { member type Modal */}
        { memberType && <MemberTypeModal
          onClose={()=>setPersonalDetails(false)}
          existingMember 
          newMember={viewNewMember}
         />}

        {/* { Personal details Modal */}
        { personalDetails && <PersonalDetailsModal
        toggle={()=>setPersonalDetails(false)}
        open={()=>setPersonalDetails(true)} 
        onClick={viewId} />}


        {/* {Mode of Identification modal} */}
        { indentityMode && <ModeOfIdentificationModal
        toggle={()=>setIndentityMode(false)}
        open={()=>setIndentityMode(true)} 
        onClick={viewKin}
        onClickBack={backtoViewPersonalDetails}
        />}
        
        {/* {Next of kin modal} */}
        { kin && <NextOfKinInfoModal
        toggle={()=>setKin(false)}
        open={()=>setKin(true)} 
        onClickBack={backtoViewId }
        />}

        <div className='flex flex-row justify-between w-[100%] my-[3rem] '>
          <div className='w-[78%] '><Search /> </div>
          <div className='w-[20%] m-[0px] '>
            <LoadingButton
                onClick={setMemberType}
                // loading={loading}
                variant="contained"
              >
                Add Members
              </LoadingButton></div>
        </div>
        <MembersTable viewClick={viewPage} editClick={editPage} />
    </AppLayout>
  )
}

export default View;