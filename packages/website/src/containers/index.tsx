import { Suspense, FC } from 'react'
import { Row, Spin } from 'antd'
import { BrowserRouter as Router } from 'react-router-dom'
import { UI } from './UI'
import { Routing } from './Routing'
import { hot } from 'react-hot-loader/root'




export const Loader: FC = () => (
  <Row justify={'center'} style={{ minHeight: '100vh' }} align={'middle'}>
    <Spin />
  </Row>
)

const App: FC = ({ children }) => (
  <UI>
    <Router>
      <Suspense fallback={<Loader />}>
        <Routing>{children}</Routing>
      </Suspense>
    </Router>
  </UI>
)

export default hot(App)
