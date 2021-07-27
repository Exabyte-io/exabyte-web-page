import { Suspense, FC } from 'react'
import { Row, Spin } from 'antd'
import { BrowserRouter as Router } from 'react-router-dom'
import { UI } from './UI'
import { API } from './API'
import { Routing } from './Routing'
import { CMS } from './CMS'
import { hot } from 'react-hot-loader/root'

export const Loader: FC = () => (
  <Row justify={'center'} style={{ minHeight: '100vh' }} align={'middle'}>
    <Spin />
  </Row>
)

const App: FC = ({ children }) => (
  <API>
    <CMS>
      <UI>
        <Router>
          <Suspense fallback={<Loader />}>
            <Routing>{children}</Routing>
          </Suspense>
        </Router>
      </UI>
    </CMS>
  </API>
)

export default hot(App)
