import { FC, useState } from 'react'
import { Breadcrumb, Layout, Row } from 'antd'
import { Logo } from '../logo/Logo'
import { TopNavigation } from '../menu/TopNavigation'
import { Outlet } from 'react-router-dom'
import { ActionButton } from '../button/actionButton'
import { useMediaQuery } from 'react-responsive'
import { BurgerButton } from '../button/BurgerButton'
import './DefaultLayout.less'

const DefaultLayout: FC = () => {
  const [open, setOpen] = useState(false)

  // const md = useMediaQuery({ minWidth: '768px' })
  const xl = useMediaQuery({ minWidth: '992px' })

  return (
    <Layout style={{ minHeight: '100vh', width: '100%' }}>
      <Layout.Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Row align={'middle'} justify={'space-between'} style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
          <Logo />
          {xl && <TopNavigation />}
          {xl && (
            <Row align={'middle'}>
              <ActionButton title={'SignIn'} type={'transparent'} styles={{ marginRight: '30px' }} />
              <ActionButton title={'Sign Up'} type={'default'} size={'small'} />
            </Row>
          )}
          {!xl && <BurgerButton onClick={setOpen} />}
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
}

export { DefaultLayout }
