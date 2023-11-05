import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import App from './App'
import './styles/style.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#88dd45',
          colorPrimaryBorder: '#71b93a',
          colorPrimaryHover: '#71b93a',
          fontFamily: 'KoPubWorld-Batang-Medium',
          fontSize: 20,
        },
        components: {
          Form: {
            labelFontSize: 26,
          },
        },
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>,
)
