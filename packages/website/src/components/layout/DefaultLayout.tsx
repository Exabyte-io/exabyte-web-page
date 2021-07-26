import { FC } from 'react'
import { Breadcrumb, Layout, Row } from 'antd'
import { Logo } from '../logo/Logo'
import { TopNavigation } from '../menu/TopNavigation'
import { Outlet } from 'react-router-dom'
import './DefaultLayout.less'
import { ActionButton } from '../button/actionButton'

const DefaultLayout: FC = () => (
  <Layout style={{ minHeight: '100vh', width: '100%' }}>
    <Layout.Header>
      <Row align={'middle'} justify={'space-between'}>
        <Logo />
        <TopNavigation />
        <Row align={'middle'}>
          <ActionButton title={'SignIn'} type={'transparent'} styles={{ marginRight: '30px' }} />
          <ActionButton title={'Sign Up'} type={'default'} size={'small'} />
        </Row>
      </Row>
    </Layout.Header>
    <Layout.Content style={{ padding: 50 }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>
      <Outlet />
    </Layout.Content>
    <Layout.Footer style={{ textAlign: 'center' }}>App ©{new Date().getFullYear()}</Layout.Footer>
  </Layout>
)

export { DefaultLayout }
