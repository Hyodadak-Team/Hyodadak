import { Link } from 'react-router-dom'
import { IRoundBtnProps } from '../../types'

function GradientBtn({ icon, path, content }: IRoundBtnProps) {
  return (
    <Link to={`/${path}`} className="gradient_btn">
      {icon && (
        <img className="icon" src={`/img/${icon}-icon.svg`} alt="list-icon" />
      )}
      <p>{content}</p>
    </Link>
  )
}
GradientBtn.defaultProps = {
  icon: undefined,
  path: undefined,
}

export default GradientBtn
