import { VFC } from 'react'
import { Row, Spin } from 'antd'
import { UI } from './UI'
import { Routing } from './Routing'
import { API } from './API'
import { CMS } from './CMS'

export const Loader: VFC = () => (
  <Row justify={'center'} style={{ minHeight: '100vh' }} align={'middle'}>
    <Spin />
  </Row>
)

const App: VFC = () => (
  <UI>
    <API>
      <CMS>
        <Routing />
      </CMS>
    </API>
  </UI>
)

export default App
