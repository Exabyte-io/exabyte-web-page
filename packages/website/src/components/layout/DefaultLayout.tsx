import { FC, useState } from 'react'
import { Button, Col, Layout, Row, Space, Typography } from 'antd'
import { Logo } from '../logo/Logo'
import { TopNavigation } from '../menu/TopNavigation'
import { NavLink, Outlet } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { BottomNavigation } from '../menu/BottomNavigation'
import { TouchForm } from '../form/TouchForm'
import './DefaultLayout.less'
import CloseIcon from './images/close-icon.svg'
import BurgerIcon from './images/burger-icon.svg'

const DefaultLayout: FC = () => {
  // const md = useMediaQuery({ minWidth: '768px' })
  const xl = useMediaQuery({ minWidth: '992px' })

  const mobileNavMenuItems = [
    {
      name: 'Case Studies',
      link: '/case-studies',
    },
    {
      name: 'Pricing',
      link: '/pricing',
    },
    {
      name: 'News',
      link: '/news',
    },
    {
      name: 'Contact Us',
      link: '/contact-us',
    },
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Our Vision',
      link: '/our_vision',
    },
  ]

  const [isOpen, setIsOpen] = useState(false)

  return (
    <Layout style={{ minHeight: '100vh', width: '100%' }}>
      <div style={{ display: isOpen ? 'flex' : 'none' }} className='burger-menu'>
        <div className='content'>
          <div onClick={() => setIsOpen(false)} className='close-icon'>
            <img src={CloseIcon} alt='' />
          </div>
          <ul>
            {mobileNavMenuItems.map((item, index) => (
              <li key={index}>
                <NavLink onClick={() => setIsOpen(false)} to={item.link}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Layout.Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Row align={'middle'} justify={'space-between'} className={'container'} wrap={false}>
          <Col flex={'140px'}>
            <Logo />
          </Col>
          {xl && (
            <Col lg={13} xl={13}>
              <TopNavigation />
            </Col>
          )}
          <Col>
            {xl && (
              <Row align={'middle'} wrap={false}>
                <Col>
                  <Button style={{ color: '#fff' }} size={'large'} block type={'link'} href={'/sign-in'}>
                    Sign In
                  </Button>
                </Col>
                <Col>
                  <Button
                    className={'action-btn-default action-btn-small'}
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
          <Col> {!xl && <img src={BurgerIcon} alt='' onClick={() => setIsOpen(true)} />}</Col>
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
