import { FC, useState } from 'react'
import { Button, Col, Layout, Row, Space, Typography } from 'antd'
import { Logo } from '../logo/Logo'
import { TopNavigation } from '../menu/TopNavigation'
import { Outlet } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { BurgerButton } from '../button/BurgerButton'
import { BottomNavigation } from '../menu/BottomNavigation'
import { TouchForm } from '../form/TouchForm'
import './DefaultLayout.less'

const DefaultLayout: FC = () => {
  // const md = useMediaQuery({ minWidth: '768px' })
  const xl = useMediaQuery({ minWidth: '992px' })

  const [, setOpen] = useState(false)

  return (
    <Layout style={{ minHeight: '100vh', width: '100%' }}>
      <Layout.Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Row align={'middle'} justify={'space-between'} className={'container'}>
          <Col flex={'240px'}>
            <Logo />
          </Col>
          {xl && (
            <Col flex={'auto'}>
              <TopNavigation />
            </Col>
          )}
          <Col>
            {xl && (
              <Row align={'middle'} gutter={16}>
                <Col>
                  <Button style={{ color: '#fff' }} size={'large'} block type={'link'} href={'/sign-in'}>
                    Sign In
                  </Button>
                </Col>
                <Col>
                  <Button
                    className={'action-btn-default action-btn-medium'}
                    type={'primary'}
                    size={'large'}
                    href={'/sign-up'}
                  >
                    Sign Up
                  </Button>
                </Col>
              </Row>
            )}
          </Col>
          <Col> {!xl && <BurgerButton onClick={setOpen} />}</Col>{' '}
        </Row>
      </Layout.Header>

      <Layout.Content style={{ width: '100%', minHeight: 'unset' }}>
        <Outlet />
      </Layout.Content>

      <Layout.Footer>
        <Col className={'container'}>
          <Row className={'footer-content-wrapper'} justify={'space-between'}>
            <Col>
              <Space className={'top-left-wrapper'} direction={'vertical'} size={32}>
                <Logo />
                <Space className={'address-info'} direction={'vertical'} size={8}>
                  <Typography.Text>1161 Mission street, suite 505</Typography.Text>
                  <Typography.Text>San Francisco, CA 94103</Typography.Text>
                  <Typography.Text>+1 (510) 473-7770</Typography.Text>
                  <Typography.Text>info@exabyte.io</Typography.Text>
                </Space>
              </Space>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <TouchForm />
            </Col>
            <Col xs={24} sm={9} lg={6}>
              <BottomNavigation />
            </Col>
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
