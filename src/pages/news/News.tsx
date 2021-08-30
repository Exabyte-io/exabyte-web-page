import { FC } from 'react'
import { Main } from './sections/Main/Main'
import { Layout } from 'antd'

const News: FC = () => {
  return (
    <Layout.Content>
      <Main />
    </Layout.Content>
  )
}

export { News }
