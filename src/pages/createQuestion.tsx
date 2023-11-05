import Title from '../components_ques/Title'

type TitleType = {
  data: [string, string, string, string]
}

function CreateQuestion() {
  const currentUrl: TitleType['data'] = ['질문하기', '/createQuestion', '', '']

  return (
    <div className="innerBox ques">
      <Title data={currentUrl} />
    </div>
  )
}

export default CreateQuestion
