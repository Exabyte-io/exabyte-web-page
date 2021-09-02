import { FC } from 'react'
import { Main } from './sections/Main/Main'
import { Layout } from 'antd'
import './News.less'

const News: FC = () => {
  return (
    <Layout.Content style={{ padding: '120px 0 30px' }}>
      <Main />
    </Layout.Content>
  )
}

export { News }
