/* eslint-disable react/no-array-index-key */
import React from 'react'
import { INotice } from '../types/notice'

const formatContent = (filteredNotice: INotice): JSX.Element[] => {
  const noticeContent = filteredNotice.contents
  const convertedContent = noticeContent.split('\n').map((line, index) => {
    const spaces = ' '.repeat(8)
    const formattedLine = line.replace(/\t/g, spaces)
    return (
      <React.Fragment key={index}>
        <span className="article content">{formattedLine}</span>
        <br />
      </React.Fragment>
    )
  })

  return convertedContent
}

export default formatContent
