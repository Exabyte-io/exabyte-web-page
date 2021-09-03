import { FC } from 'react'
import { Main } from './sections/Main/Main'
import { Layout } from 'antd'
import './News.less'

const News: FC = () => {
  return (
    <Layout.Content style={{ position: 'relative', overflow: 'hidden' }}>
      <Main />
    </Layout.Content>
  )
}

export { News }
