import { FC, useState } from 'react'
import { Breadcrumb, Col, Layout, Row, Typography } from 'antd'
import { Logo } from '../logo/Logo'
import { TopNavigation } from '../menu/TopNavigation'
import { Outlet } from 'react-router-dom'
import { ActionButton } from '../button/actionButton'
import { useMediaQuery } from 'react-responsive'
import { BurgerButton } from '../button/BurgerButton'
import GetInTouchBtn from './get-in-toch-icon.svg'
import { BottomNavigation } from '../menu/BottomNavigation'
import './DefaultLayout.less'

const DefaultLayout: FC = () => {
  const [, setOpen] = useState(false)

  // const md = useMediaQuery({ minWidth: '768px' })
  const xl = useMediaQuery({ minWidth: '992px' })

  return (
    <Layout style={{ minHeight: '100vh', width: '100%' }}>
      <Layout.Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Row align={'middle'} justify={'space-between'} style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
          <Logo style={{ display: 'flex' }} />
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
      <Layout.Footer>
        <Col style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>

          <Row className={'footer-content-wrapper'}>
            {/*top left wrapper*/}
            <div className={'top-left-wrapper'}>
              <Logo style={{ marginBottom: '30px' }} />
              <Typography.Paragraph className={'address-info'}>
                1161 Mission street, suite 505
                <br />
                San Francisco, CA 94103
                <br />
                +1 (510) 473-7770
                <br />
                info@exabyte.io
              </Typography.Paragraph>
            </div>
            {/*top left wrapper*/}

            {/*touch form*/}
            <div className={'touch-form-wrapper'}>
              <Typography.Paragraph className={'touch-form-label'}>Get in touch</Typography.Paragraph>
              <form className={'touch-form'}>
                <input placeholder={'Email'} className={'touch-form-input'} />
                <button className={'touch-form-btn'}>
                  <GetInTouchBtn />
                </button>
              </form>
            </div>
            {/*touch form*/}

            {/*footer navigation*/}
            <BottomNavigation />
            {/*footer navigation*/}
          </Row>

          <Typography.Paragraph className={'all-rights'}>
            ©{new Date().getFullYear()} Exabyte Inc. All rights reserved.
          </Typography.Paragraph>
        </Col>
      </Layout.Footer>
    </Layout>
  )
}

export { DefaultLayout }
