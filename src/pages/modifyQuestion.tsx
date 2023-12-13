/* eslint-disable react-hooks/exhaustive-deps */
import { PlusOutlined } from '@ant-design/icons'
import { Button, ConfigProvider, Form, Input, Select, Upload } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { TQuestionField } from '../types/questionBoard'
import Title from '../components_ques/Title'
import {
  questionAccessList,
  questionPoints,
  questionTypes,
} from '../constants/questionBoard'
import { getBoardDetail, modifyBoard } from '../apis/board'

const { TextArea } = Input

const normFile = (e: { fileList: unknown }) => {
  if (Array.isArray(e)) {
    return e
  }
  return e?.fileList
}

type TitleType = {
  data: [string, string, string, string]
}

const currentUrl: TitleType['data'] = ['질문하기', '/createQuestion', '', '']

function UpdateQuestion() {
  const params = useParams()
  const navigate = useNavigate()
  const [form] = Form.useForm()

  const getBoard = async () => {
    try {
      const prevData = await getBoardDetail(params.id as unknown as string)
      form.setFieldsValue({
        board_title: prevData.board_title,
        board_contents: prevData.board_contents,
        board_access: prevData.board_access,
        board_category: prevData.board_category,
        board_point: prevData.board_point,
      })
    } catch (err) {
      console.error(err)
    }
  }

  const modifyForm = async (values: TQuestionField) => {
    try {
      const boardId = params.id as unknown as string
      const boardData = {
        board_title: values.board_title,
        board_contents: values.board_contents,
        board_category: values.board_category,
        board_access: values.board_access,
        board_point: values.board_point,
        writer_user_info: { writer_id: '기믄정' },
        board_img: [],
        // board_create_time: Date.now(),
      }
      await modifyBoard(boardId, boardData)
    } catch (err) {
      console.error(err)
    }
  }

  const onFinish = (values: TQuestionField) => {
    console.log('Success:', values)
    modifyForm(values)

    // redirect
    navigate('/questionBoard')
  }

  const onFinishFailed = (errorInfo: unknown) => {
    console.log('Failed:', errorInfo)
  }

  useEffect(() => {
    getBoard()
  }, [])

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'KoPubWorld-Batang-Medium',
        },
      }}
    >
      <div className="innerBox ques">
        <Title data={currentUrl} />
        <div className="submit_question">
          <Form
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
            form={form}
          >
            <Form.Item<TQuestionField>
              label="제목을 입력해주세요"
              name="board_title"
              className="form_label"
              rules={[{ required: true, message: '제목을 입력해주세요!' }]}
            >
              <Input placeholder="제목을 입력해주세요" className="form_value" />
            </Form.Item>
            <Form.Item<TQuestionField>
              label="내용을 작성해주세요"
              name="board_contents"
              className="form_label"
              rules={[{ required: true, message: '내용을 작성해주세요!' }]}
            >
              <TextArea
                rows={6}
                placeholder="궁금한 점을 자세히 적어주세요"
                className="form_value"
              />
            </Form.Item>
            <div className="form_image">
              <Form.Item<TQuestionField>
                label="이미지를 첨부해주세요"
                name="board_img"
                className="form_label"
                valuePropName="fileList"
                getValueFromEvent={normFile}
              >
                <Upload action="/upload.do" listType="picture-card">
                  <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </div>
                </Upload>
              </Form.Item>
              <div className="form_notice">
                <img
                  src="/img/exclamation-circle.svg"
                  className="exclamation-icon"
                  alt="exclamation-icon"
                />
                <p>필수 사항이 아닙니다</p>
              </div>
            </div>
            <Form.Item<TQuestionField>
              label="공개 범위를 설정해주세요"
              name="board_access"
              className="form_label"
              rules={[{ required: true, message: '공개 범위를 설정해주세요!' }]}
            >
              <Select
                placeholder="누구에게 공개하실 건가요?"
                className="form_selectBox"
              >
                {questionAccessList.map((ques) => (
                  <Select.Option key={ques.id} value={ques.access}>
                    {ques.option}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item<TQuestionField>
              label="유형을 설정해주세요"
              name="board_category"
              className="form_label"
              rules={[{ required: true, message: '유형을 설정해주세요!' }]}
            >
              <Select
                placeholder="어떤 유형에 해당하는 질문인가요?"
                className="form_selectBox"
              >
                {questionTypes.map((ques) => (
                  <Select.Option key={ques.type} value={ques.type}>
                    {ques.type}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item<TQuestionField>
              label="용돈을 설정해주세요"
              name="board_point"
              rules={[{ required: true, message: '용돈을 설정해주세요!' }]}
            >
              <Select placeholder="기본" className="form_selectBox">
                {questionPoints.map((ques) => (
                  <Select.Option key={ques.type} value={ques.point}>
                    {ques.type}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <div className="form_notice">
              <img
                src="/img/exclamation-circle.svg"
                className="exclamation-icon"
                alt="exclamation-icon"
              />
              <p>
                채택한 답변자에게 지급할 용돈을 설정해주세요. 답변을 좀 더
                신속히 받을 수 있습니다.
              </p>
            </div>
            <Form.Item>
              <div className="button_section">
                <div className="form_button">
                  <Button htmlType="reset">
                    <p>작성 취소하기</p>
                  </Button>
                </div>
                <div className="form_button submit">
                  <Button htmlType="submit">
                    <p>질문 수정하기</p>
                  </Button>
                </div>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </ConfigProvider>
  )
}

export default UpdateQuestion
