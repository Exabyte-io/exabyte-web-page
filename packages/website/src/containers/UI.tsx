import { FC } from 'react'
import { ConfigProvider } from 'antd'




const UI: FC = ({ children }) => <ConfigProvider componentSize={'large'}>{children}</ConfigProvider>

export { UI }
