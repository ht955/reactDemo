
import React from 'react'
import { ConfigProvider  } from 'antd'
import dayjs from 'dayjs'
import zhCN from 'antd/locale/zh_CN'
import './App.css'
import routes from '@/router'
 
import { useRoutes } from 'react-router-dom'
dayjs.locale('zh-cn')
const App: React.FC = () => {
  const element = useRoutes(routes)
  return (
    <ConfigProvider locale={zhCN} csp={{ nonce: 'YourNonceCode' }}>
        <main className='App'>{ element }</main>
      </ConfigProvider>
  )
}

export default App;
