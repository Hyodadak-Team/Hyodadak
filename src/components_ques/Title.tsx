import React from 'react'
import { Link } from 'react-router-dom'

type TitleType = {
  data: [string, string, string, string]
}

export default function Title({ data }: TitleType) {
  const [current, curLink, more, moreLink] = data
  return (
    <>
      <div className="ques_navbar">
        <img src="/img/home_icon.svg" className="icon home" alt="home-icon" />
        <Link to="/">
          <li>처음으로</li>
        </Link>
        <div className="divide-line" />
        <Link to={curLink}>
          <li>{current}</li>
        </Link>
        {more && (
          <>
            <div className="divide-line" />
            <Link to={more}>
              <li>{moreLink}</li>
            </Link>
          </>
        )}
      </div>
      <div className="ques_title">
        <p>{current}</p>
      </div>
    </>
  )
}
