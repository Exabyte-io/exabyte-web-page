import { FC } from 'react'
import { Breadcrumb, Layout, Row } from 'antd'
import { Logo } from '../logo/Logo'
import { TopNavigation } from '../menu/TopNavigation'
import { Outlet } from 'react-router-dom'
import './DefaultLayout.less'

const DefaultLayout: FC = () => (
  <Layout style={{ minHeight: '100vh', width: '100%' }}>
    <Layout.Header>
      <Row align={'middle'} justify={'space-between'}>
        <Logo />
        <TopNavigation />
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
