/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import { Modal } from 'antd'

export default function ProfileModal({
  type,
  openProfile,
  setOpenProfile,
}: {
  type: string
  openProfile: boolean
  setOpenProfile: (el: boolean) => void
}) {
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [selectedProfile, setSelectedProfile] = useState('female') // 나중에 백엔드에서 값 받아와서 기본값 설정

  const handleOk = () => {
    setConfirmLoading(true)
    setTimeout(() => {
      setOpenProfile(false)
      setConfirmLoading(false)
    }, 2000)
  }

  const handleCancel = () => {
    setOpenProfile(false)
  }

  const handleProfileClick = (profile: string): void => {
    setSelectedProfile(profile)
  }

  const position = type.split(' ')[0]
  return (
    <Modal
      className={type}
      title="프로필 선택"
      open={openProfile}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      okText="확인"
      cancelText="취소"
      width="400px"
    >
      <ul className="flexBtw">
        <li
          className={selectedProfile === 'female' ? 'profile_clicked' : ''}
          onClick={() => handleProfileClick('female')}
        >
          <img src={`/img/profile_${position}_female.svg`} alt="여성" />
        </li>
        <li
          className={selectedProfile === 'male' ? 'profile_clicked' : ''}
          onClick={() => handleProfileClick('male')}
        >
          <img src={`/img/profile_${position}_male.svg`} alt="남성" />
        </li>
      </ul>
    </Modal>
  )
}
