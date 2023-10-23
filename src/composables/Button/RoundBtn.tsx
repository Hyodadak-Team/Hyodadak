import { Link } from 'react-router-dom'
import { IRoundBtnProps } from '../../types'

function RoundBtn({ icon, path, content }: IRoundBtnProps) {
  return (
    <Link to={`/${path}`}>
      <button type="button" className="round_btn">
        {icon && (
          <>
            <img
              src={`/img/${icon}-icon.svg`}
              alt="list-icon"
              className="icon default"
            />
            <img
              src={`/img/${icon}-icon_hover.svg`}
              alt="list-icon_hover"
              className="icon hover"
            />
          </>
        )}
        <p>{content}</p>
      </button>
    </Link>
  )
}
RoundBtn.defaultProps = {
  icon: undefined,
  path: undefined,
}

export default RoundBtn
