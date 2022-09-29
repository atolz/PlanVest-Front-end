import React from 'react';
import PopupLayout from '../../layouts/PopupLayout';

const MemberTypeModal = ({existingMember, newMember, onClose}) => {
  return (
    <div>
        <PopupLayout withBorder={true} title="Add User" onClose={onClose}>
            <div onClick={newMember} className='bg-[#F0F2F3] rounded-xl p-[4rem]'>Click to add New User</div>
            <div onClick={existingMember} className='bg-[#F0F2F3] rounded-xl p-[4rem]'>Click to add Exisiting User</div>
        </PopupLayout>
    </div>
  )
}

export default MemberTypeModal;