/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import { Form, Input, Modal, Select } from 'antd'
import { questionTypes } from '../constants/questionBoard'

const { TextArea } = Input
export default function EditUserInfoModal({
  openUserInfo,
  setOpenUserInfo,
}: {
  openUserInfo: boolean
  setOpenUserInfo: (el: boolean) => void
}) {
  const [confirmLoading, setConfirmLoading] = useState(false)

  const handleOk = () => {
    setConfirmLoading(true)
    setTimeout(() => {
      setOpenUserInfo(false)
      setConfirmLoading(false)
    }, 2000)
  }

  const handleCancel = () => {
    setOpenUserInfo(false)
  }

  return (
    <Modal
      className="edit_user_info"
      title="정보 수정"
      open={openUserInfo}
      confirmLoading={confirmLoading}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="확인"
      cancelText="취소"
      width="400px"
    >
      <Form className="edit_user_form">
        <Form.Item
          label="이름"
          name="user_name"
          rules={[{ message: '이름을 입력해주세요!' }]}
        >
          <Input placeholder="이름을 입력해주세요" />
        </Form.Item>
        <Form.Item
          label="한줄 소개"
          name="intro"
          rules={[{ message: '한줄 소개를 작성해주세요' }]}
        >
          <TextArea rows={6} placeholder="한줄 소개를 작성해주세요" />
        </Form.Item>
        <Form.Item
          label="관심유형"
          name="interest_category"
          rules={[{ message: '유형을 설정해주세요!' }]}
        >
          {/* 에러 해결 요망 */}
          <Select mode="multiple" allowClear placeholder="유형을 설정해주세요">
            {questionTypes.map((ques) => (
              <Select.Option key={ques.type} value={ques.type}>
                {ques.type}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  )
}
