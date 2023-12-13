import { PlusOutlined } from '@ant-design/icons'
import { Button, ConfigProvider, Form, Input, Select, Upload } from 'antd'
import { useNavigate } from 'react-router-dom'
import Title from '../components_ques/Title'
import {
  questionAccessList,
  questionPoints,
  questionTypes,
} from '../constants/questionBoard'
import { TQuestionField } from '../types/questionBoard'
import { createBoard } from '../apis/board'

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

function CreateQuestion() {
  const currentUrl: TitleType['data'] = ['질문하기', '/createQuestion', '', '']

  const navigate = useNavigate()

  const submitForm = async (values: TQuestionField) => {
    try {
      const boardData = {
        board_title: values.board_title,
        board_contents: values.board_contents,
        board_category: values.board_category,
        board_access: 'public',
        board_point: values.board_point,
        writer_user_info: { user_type: 'questioner' },
        board_img: [],
        // board_create_time: Date.now(),
      }
      await createBoard(boardData)
    } catch (err) {
      console.error(err)
    }
  }

  const onFinish = (values: TQuestionField) => {
    console.log('Success:', values)
    submitForm(values)

    // redirect
    navigate('/questionBoard')
  }

  const onFinishFailed = (errorInfo: unknown) => {
    console.log('Failed:', errorInfo)
  }

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
                    <p>질문 올리기</p>
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

export default CreateQuestion
