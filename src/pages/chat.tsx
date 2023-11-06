import React, { useState } from 'react'
import ChatList from '../components/ChatList'

export default function Chat() {
  const [open, setOpen] = useState(false)

  return (
    <div className="chat_container">
      {open && <ChatList />}

      <div
        className="btn_chat"
        role="button"
        tabIndex={0}
        onKeyDown={(e): void => {
          if (e.key === 'Enter' || e.key === ' ') {
            setOpen(!open)
          }
        }}
        onClick={(): void => setOpen(!open)}
      >
        {open ? (
          <img src="/img/quik_chat_off_icon.svg" alt="" />
        ) : (
          <img src="/img/quik_chat_icon.svg" alt="" />
        )}
      </div>
    </div>
  )
}
