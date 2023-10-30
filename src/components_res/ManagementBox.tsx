import React from 'react'
import { Link } from 'react-router-dom'

type ManageType = {
  data: string[]
}

export default function ManagementBox({ data }: ManageType) {
  const [title, intro, img, link] = data
  return (
    <Link to={link} className="manageBox">
      <div className="manageTextBox flexBtw">
        <div>
          <p>{title}</p>
          <p>{intro}</p>
        </div>
        <img src="/img/right-icon-gray.svg" alt="" />
      </div>
      <div className="picture flexBox">
        <img src={`/img/${img}.svg`} alt="" />
      </div>
    </Link>
  )
}
