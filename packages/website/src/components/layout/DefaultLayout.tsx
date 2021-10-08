import { FC, Suspense, useState } from 'react'
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
import { Loader } from '../../containers'
import { useContentQuery } from '../../graphql'
import ReactMarkdown from 'react-markdown'

const DefaultLayout: FC = () => {
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

  const { data } = useContentQuery({
    variables: {
      slug: 'header-footer',
    },
  })
  const content = data?.content

  const header = content?.sections?.[0]
  const footer = content?.sections?.[1]

  return (
    <Layout style={{ minHeight: '100vh', width: '100%' }}>
      <div className={!isOpen ? 'burger-menu' : 'burger-menu burger-menu-open'}>
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
                  <Button target={'_blank'} style={{ color: '#fff' }} size={'large'} block type={'link'} href={header?.subTitle}>
                    {header?.title}
                  </Button>
                </Col>
                <Col>
                  <Button
                    target={'_blank'}
                    className={'action-btn-default action-btn-small'}
                    type={'primary'}
                    size={'large'}
                    href={header?.slug}
                    style={{ padding: 0 }}
                  >
                    {header?.description}
                  </Button>
                </Col>
              </Row>
            )}
          </Col>
          {!xl && (
            <Col>
              <img src={BurgerIcon} alt='' onClick={() => setIsOpen(true)} />
            </Col>
          )}
        </Row>
      </Layout.Header>

      <Layout.Content style={{ width: '100%', minHeight: 'unset' }}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Layout.Content>

      <Layout.Footer>
        <Col className={'container'}>
          <Row className={'footer-content-wrapper'} justify={'space-between'}>
            <Col>
              <Space className={'top-left-wrapper'} direction={'vertical'} size={32}>
                <Logo />
                <Space className={'address-info'} direction={'vertical'} size={8}>
                  <Typography.Text>
                    <ReactMarkdown>{footer?.text || ''}</ReactMarkdown>
                  </Typography.Text>
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
