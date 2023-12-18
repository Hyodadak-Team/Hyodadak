/* eslint-disable no-underscore-dangle */
import { useEffect, useRef, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import '../styles/questionDetail.scss'
import PartnerRequest from '../components_ques/PartnerRequest'
import {
  createAnswer,
  createComment,
  deleteBoard,
  getBoardDetail,
} from '../apis/board'
import timeDifference from '../utils/timeDifference'
// props 타입 설정(유저)
interface QuestionDetailProps {
  user: boolean
}

// 게시글 상세 내용 타입설정

type CommentsType = {
  comment_contents: string
  comment_create_time: string
  comment_user_info: CommentUserInfoType
}
type CommentUserInfoType = {
  user_id: string
  pro_img: string
}
type AnswerUserInfoType = {
  pro_img: string
  interest_category: Array<string>
  user_id: string
}

type AnswersType = {
  answer_user_info: AnswerUserInfoType
  answer_contents: string
  answer_create_time: number
  comments: Array<CommentsType>
  _id: string
}

interface IWriterInfo {
  user_type: string
  user_id: string
}

interface IPostDataType {
  answers: Array<AnswersType>
  board_access: string
  board_category: Array<string>
  board_contents: string
  board_img: Array<string>
  board_point: number
  board_title: string
  create_time: string
  selected_answer: Array<AnswersType>
  status: string
  views: number
  // writer_id: string
  _id: string
  writer_user_info: IWriterInfo
}

type CommentInputRefType = { id: string; ref: HTMLTextAreaElement | null }

export default function DetailPageAnswerer(props: QuestionDetailProps) {
  const params = useParams()
  const navigate = useNavigate()
  const [postData, setPostData] = useState<IPostDataType>()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [submitToggle, setSubmitToggle] = useState<boolean>(false)
  const { user } = props
  const partnerReqBox = useRef<HTMLDivElement>(null)
  const answerInput = useRef<HTMLTextAreaElement>(null)
  const commentInput = useRef<Array<CommentInputRefType>>([])
  const getPostDetail = async () => {
    try {
      const res = await getBoardDetail(params.id as unknown as string)
      setPostData(() => res)
    } catch (error) {
      console.error(error)
    }
  }

  // 답변등록
  const postAnswer = async () => {
    try {
      await createAnswer(
        params.id as unknown as string,
        answerInput.current?.value,
      )
      getPostDetail()
    } catch (err) {
      console.error(err)
    }
  }
  const anwerOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    postAnswer()
    if (answerInput.current) {
      answerInput.current.value = ''
    }
    setSubmitToggle((prev) => !prev)
  }
  // 댓글 등록
  const postComment = async (
    answerId: string,
    targetAnswer: CommentInputRefType | undefined,
  ) => {
    try {
      await createComment(
        params.id as unknown as string,
        answerId,
        targetAnswer?.ref?.value,
      )
      getPostDetail()
    } catch (err) {
      console.error(err)
    }
  }
  const commentOnSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    answerId: string,
  ) => {
    e.preventDefault()
    const targetAnswer = commentInput.current.find(
      (target) => target.id === answerId,
    )
    postComment(answerId, targetAnswer)
    if (targetAnswer?.ref?.value) {
      targetAnswer.ref.value = ''
    }
    setSubmitToggle((prev) => !prev)
  }

  const partnerReqBoxClick = () => {
    // if (
    //   partnerReqBox.current?.classList.value ===
    //   'questionDetail_answerList_box_profile_partnerRequest'
    // ) {
    //   partnerReqBox.current.classList.value =
    //     'questionDetail_answerList_box_profile_partnerRequest hide'
    // }
    // 추후 Redux 상태관리를 통해 모달창 열고 닫기
    if (
      partnerReqBox.current?.classList.value ===
      'questionDetail_answerList_box_profile_partnerRequest hide'
    ) {
      partnerReqBox.current.classList.value =
        'questionDetail_answerList_box_profile_partnerRequest'
    }
  }

  useEffect(() => {
    getPostDetail()
    // 의존성 배열 eslint 오류 해결 할 것
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const deletePost = async (boardId: string | undefined) => {
    try {
      await deleteBoard(boardId as unknown as string)
      navigate('/questionBoard')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      {user ? (
        // user가 true인 경우 -> res
        <div className="res">
          <div className="questionDetail_header innerBox ">
            <div className="questionDetail_header_property">
              <p className="questionDetail_header_property_point">
                {postData?.board_point}
              </p>
              <p className="questionDetail_header_property_category">
                {postData?.writer_user_info.user_id} ·{' '}
                {postData?.board_category}
              </p>
              <p className="questionDetail_header_property_time">
                {timeDifference(postData?.create_time as unknown as string)}
              </p>
            </div>
            <div className="questionDetail_header_title">
              {postData?.status === 'complete' ? (
                <p className="questionDetail_header_title_state">채택완료</p>
              ) : (
                ''
              )}
              <p className="questionDetail_header_title_title">
                {postData?.board_title}
              </p>
            </div>
          </div>
          <div className="questionDetail_detail innerBox ">
            {postData?.board_img.map((imgName) => {
              return (
                <img
                  key={imgName}
                  className="questionDetail_detail_img"
                  src={`/img/${imgName}`}
                  alt="ktx예시"
                />
              )
            })}
            <p className="questionDetail_detail_text">
              {postData?.board_contents}
            </p>
            <div className="questionDetail_detail_property">
              <img
                className="questionDetail_detail_property_viewIcon"
                src="/img/detail_eye_icon.svg"
                alt="조회수"
              />
              <p className="questionDetail_detail_property_viewCount">
                {postData?.views}
              </p>
              <img
                className="questionDetail_detail_property_answerIcon"
                src="/img/detail_reply_icon.svg"
                alt="댓글"
              />
              <p className="questionDetail_detail_property_answerCount">
                {postData?.answers.length}
              </p>
            </div>
          </div>
          <div className="questionDetail_answer">
            <form
              onSubmit={(e) => {
                anwerOnSubmit(e)
              }}
              className="innerBox"
            >
              <textarea
                ref={answerInput}
                className="questionDetail_answer_input"
                placeholder="답변을 상세히 기입해주세요"
              />
              <div className="questionDetail_answer_btn">
                <img
                  className="questionDetail_answer_btn_img"
                  src="/img/detail_img_icon.svg"
                  alt="이미지 업로드"
                />
                <input
                  className="questionDetail_answer_btn_submit"
                  type="submit"
                  value="답변하기"
                />
              </div>
            </form>
          </div>

          {postData?.answers.map((answer) => {
            return (
              <div
                key={answer.answer_user_info.user_id}
                className="questionDetail_answerList innerBox "
              >
                <div className="questionDetail_answerList_box">
                  <div className="questionDetail_answerList_box_profile">
                    <div className="questionDetail_answerList_box_profile_left">
                      <img
                        className="questionDetail_answerList_box_profile_left_img"
                        src={`/img/${answer.answer_user_info.pro_img}`}
                        alt="프로필 이미지"
                      />
                      <div className="questionDetail_answerList_box_profile_left_text">
                        <p className="questionDetail_answerList_box_profile_left_text_id">
                          {answer.answer_user_info.user_id}
                        </p>
                        <p className="questionDetail_answerList_box_profile_left_text_category">
                          {answer.answer_user_info.interest_category.map(
                            (
                              category: string,
                              idx: number,
                              array: Array<string>,
                            ) => {
                              return idx === array.length - 1
                                ? `${category}`
                                : `${category}, `
                            },
                          )}
                          에서 활동 중
                        </p>
                      </div>
                    </div>
                    <div className="questionDetail_answerList_box_profile_right">
                      <p className="questionDetail_answerList_box_profile_right_level">
                        Lv.3
                      </p>
                    </div>
                  </div>
                  <div className="questionDetail_answerList_box_detail">
                    <p className="questionDetail_answerList_box_detail_text">
                      {answer.answer_contents}
                    </p>
                    <p className="questionDetail_answerList_box_detail_viewReply">
                      {answer.comments.length}개의 댓글 보기
                    </p>
                  </div>
                  <div className="questionDetail_answerList_box_reply">
                    {answer.comments.map((comment, idx) => {
                      return (
                        <div
                          key={`${comment.comment_user_info.user_id + idx}`}
                          className="questionDetail_answerList_box_reply_list"
                        >
                          <div className="questionDetail_answerList_box_reply_list_img_box">
                            <img
                              className="questionDetail_answerList_box_reply_list_img"
                              src={`/img/${comment.comment_user_info.pro_img}`}
                              alt="프로필이미지"
                            />
                          </div>
                          <div className="questionDetail_answerList_box_reply_list_text">
                            <div className="questionDetail_answerList_box_reply_list_text_info">
                              <p>{comment.comment_user_info.user_id}</p>
                              <p>
                                | {timeDifference(comment.comment_create_time)}
                              </p>
                            </div>
                            <p className="questionDetail_answerList_box_reply_list_text_content">
                              {comment.comment_contents}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                    <form
                      className="questionDetail_answerList_box_reply_input"
                      onSubmit={(e) => {
                        commentOnSubmit(e, answer._id)
                      }}
                    >
                      <div className="questionDetail_answerList_box_reply_input_img">
                        <img
                          src="/img/detail_profile_dog.svg"
                          alt="프로필 이미지"
                        />
                      </div>
                      <div className="questionDetail_answerList_box_reply_input_box">
                        <textarea
                          className="questionDetail_answerList_box_reply_input_text"
                          placeholder="하고싶은 말을 적어보세요!"
                          ref={(ref) => {
                            // 해당 answer의 input이 ref에 없으면 추가
                            const targetEl = commentInput.current.find(
                              (target) => target.id === answer._id,
                            )
                            if (!targetEl) {
                              commentInput.current.push({ id: answer._id, ref })
                            }
                          }}
                        />
                        <input
                          className="questionDetail_answerList_box_reply_input_submit"
                          type="submit"
                          value="작성"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        // user가 false인 경우 -> ques
        <div className="innerBox ques">
          <div className="questionDetail_header">
            <div className="ques_navbar">
              <img
                src="/img/home_icon.svg"
                className="icon home"
                alt="home-icon"
              />
              <Link to="/">
                <li>처음으로</li>
              </Link>
              <div className="divide-line" />
              <Link to="/quest_detail">
                <li>질문게시판</li>
              </Link>
            </div>
            <div className="questionDetail_header_title">
              {postData?.status === 'complete' ? (
                <p className="questionDetail_header_title_state">채택완료</p>
              ) : (
                ''
              )}
              <p className="questionDetail_header_title_title">
                {postData?.board_title}
              </p>
            </div>
            <div className="questionDetail_header_sub">
              <p className="questionDetail_header_sub_property">
                {/* 카테고리 string으로 변경되면 수정할 것 */}
                {postData?.writer_user_info.user_id} ·{' '}
                {postData?.board_category} ·{' '}
                {timeDifference(postData?.create_time as unknown as string)}
              </p>
              <div className="questionDetail_header_sub_modify">
                {/* 사용자가 게시글의 주인인 경우 조건 추가 해서 렌더링 */}
                <Link to={`/modify/${postData?._id}`}>
                  <div className="questionDetail_header_sub_modify_modify">
                    <img src="/img/detail_pen_icon.svg" alt="수정하기" />
                    <p>게시물 수정하기</p>
                  </div>
                </Link>
                <div
                  className="questionDetail_header_sub_modify_delete"
                  onClick={() => deletePost(postData?._id)}
                  onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      deletePost(postData?._id)
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <img src="/img/detail_waste_icon.svg" alt="삭제하기" />
                  <p>게시물 삭제하기</p>
                </div>
              </div>
            </div>
          </div>
          <div className="questionDetail_detail">
            {postData?.board_img.map((imgName) => {
              return (
                <img
                  key={imgName}
                  className="questionDetail_detail_img"
                  src={`/img/${imgName}`}
                  alt="ktx예시"
                />
              )
            })}

            <p className="questionDetail_detail_text">
              {postData?.board_contents}
            </p>
            <div className="questionDetail_detail_property">
              <img
                className="questionDetail_detail_property_viewIcon"
                src="/img/detail_Pinkeye_icon.svg"
                alt="조회수"
              />
              <p className="questionDetail_detail_property_viewCount">
                {postData?.views}
              </p>
              <img
                className="questionDetail_detail_property_answerIcon"
                src="/img/detail_Pinkchat_icon.svg"
                alt="댓글"
              />
              <p className="questionDetail_detail_property_answerCount">
                답변 {postData?.answers.length}
              </p>
            </div>
          </div>
          {postData?.answers.map((answer) => {
            return (
              <div
                key={answer.answer_user_info.user_id}
                className="questionDetail_answerList"
              >
                <div className="questionDetail_answerList_box">
                  <div className="questionDetail_answerList_box_profile">
                    <div className="questionDetail_answerList_box_profile_left">
                      <img
                        className="questionDetail_answerList_box_profile_left_img"
                        src={`/img/${answer.answer_user_info.pro_img}`}
                        alt="프로필 이미지"
                      />
                      <div className="questionDetail_answerList_box_profile_left_text">
                        <div className="questionDetail_answerList_box_profile_left_text_top">
                          <p className="questionDetail_answerList_box_profile_left_text_level">
                            Lv.3
                          </p>
                          <p className="questionDetail_answerList_box_profile_left_text_id">
                            {answer.answer_user_info.user_id}
                          </p>
                        </div>
                        <div className="questionDetail_answerList_box_profile_left_text_bottom">
                          <p className="questionDetail_answerList_box_profile_left_text_category">
                            {answer.answer_user_info.interest_category.map(
                              (
                                category: string,
                                idx: number,
                                array: Array<string>,
                              ) => {
                                return idx === array.length - 1
                                  ? `${category}`
                                  : `${category}, `
                              },
                            )}
                            에서 활동 중
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="questionDetail_answerList_box_profile_right">
                      {/* 사용자가 게시글의 주인인 경우 조건 추가 해서 렌더링 */}
                      <button type="button" onClick={partnerReqBoxClick}>
                        <p className="questionDetail_answerList_box_profile_right_request">
                          파트너 요청하기
                        </p>
                      </button>
                      <div
                        ref={partnerReqBox}
                        className="questionDetail_answerList_box_profile_partnerRequest hide"
                      >
                        <PartnerRequest />
                      </div>
                      <p className="questionDetail_answerList_box_profile_right_select">
                        채택하기
                      </p>
                    </div>
                  </div>
                  <div className="questionDetail_answerList_box_detail">
                    <p className="questionDetail_answerList_box_detail_text">
                      {answer.answer_contents}
                    </p>
                    <p className="questionDetail_answerList_box_detail_viewReply">
                      {answer.comments.length}개의 댓글 보기
                    </p>
                  </div>
                  <div className="questionDetail_answerList_box_reply">
                    {answer.comments.map((comment, idx) => {
                      return (
                        <div
                          key={`${comment.comment_user_info.user_id + idx}`}
                          className="questionDetail_answerList_box_reply_list"
                        >
                          <div className="questionDetail_answerList_box_reply_list_img_box">
                            <img
                              className="questionDetail_answerList_box_reply_list_img"
                              src={`/img/${comment.comment_user_info.pro_img}`}
                              alt="프로필이미지"
                            />
                          </div>
                          <div className="questionDetail_answerList_box_reply_list_text">
                            <div className="questionDetail_answerList_box_reply_list_text_info">
                              <p>{comment.comment_user_info.user_id}</p>
                              <p>
                                |{' '}
                                {timeDifference(
                                  comment.comment_create_time as unknown as string,
                                )}
                              </p>
                              {/* 댓글 작성자인 경우에만 보이도록 조건부 렌더링 */}
                              <img
                                src="/img/detail_pen_icon.svg"
                                alt="수정하기"
                              />
                              <img
                                src="/img/detail_waste_icon.svg"
                                alt="삭제하기"
                              />
                            </div>
                            <p className="questionDetail_answerList_box_reply_list_text_content">
                              {comment.comment_contents}
                            </p>
                          </div>
                        </div>
                      )
                    })}

                    <form
                      className="questionDetail_answerList_box_reply_input"
                      onSubmit={(e) => {
                        commentOnSubmit(e, answer._id)
                      }}
                    >
                      <div className="questionDetail_answerList_box_reply_input_img">
                        <img
                          src="/img/detail_profile_dog.svg"
                          alt="프로필 이미지"
                        />
                      </div>

                      <div className="questionDetail_answerList_box_reply_input_box">
                        <textarea
                          className="questionDetail_answerList_box_reply_input_text"
                          placeholder="하고싶은 말을 적어보세요!"
                          ref={(ref) => {
                            // 해당 answer의 input이 ref에 없으면 추가
                            const targetEl = commentInput.current.find(
                              (target) => target.id === answer._id,
                            )
                            if (!targetEl) {
                              commentInput.current.push({ id: answer._id, ref })
                            }
                          }}
                        />
                        <input
                          className="questionDetail_answerList_box_reply_input_submit"
                          type="submit"
                          value="작성"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
