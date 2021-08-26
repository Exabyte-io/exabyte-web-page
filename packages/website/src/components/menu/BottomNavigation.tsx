import { FC } from 'react'
import { Col, Menu, Row, Typography } from 'antd'
import { NavLink } from 'react-router-dom'
import './BottomNavigation.less'

const BottomNavigation: FC = () => {
  const footerPages = {
    company: [
      {
        name: 'About',
        path: '/about',
      },
      {
        name: 'Contact',
        path: '/contact',
      },
      {
        name: 'News',
        path: '/news',
      },
      {
        name: 'Jobs',
        path: '/jobs',
      },
      {
        name: 'Blog',
        path: '/blog',
      },
      {
        name: 'Linkedin',
        path: '/linkedin',
      },
      {
        name: 'Github',
        path: '/github',
      },
      {
        name: 'Twitter',
        path: '/twitter',
      },
    ],

    product: [
      {
        name: 'Sign Up',
        path: '/sign-up',
      },
      {
        name: 'Sign In',
        path: '/sign-in',
      },
      {
        name: 'Pricing',
        path: '/pricing',
      },
      {
        name: 'Privacy',
        path: '/privacy',
      },
      {
        name: 'Security',
        path: '/security',
      },
      {
        name: 'Documentation',
        path: '/documentation',
      },
      {
        name: 'Video tutorials',
        path: '/video-tutorials',
      },
    ],
  }

  return (
    <Row justify={'space-between'} style={{ width: '100%' }} className={'bottom-navigation-wrapper'}>
      <Col>
        <Typography.Paragraph className={'list-title'}>Company</Typography.Paragraph>
        <Menu style={{ backgroundColor: 'transparent' }} mode='vertical'>
          {footerPages.company.map((value, index) => (
            <Menu.Item key={index} style={{ padding: '0px' }}>
              <NavLink to={value.path}>{value.name}</NavLink>
            </Menu.Item>
          ))}
        </Menu>
      </Col>
      <Col>
        <Typography.Paragraph className={'list-title'}>Product</Typography.Paragraph>
        <Menu style={{ backgroundColor: 'transparent' }} mode='vertical'>
          {footerPages.product.map((value, index) => (
            <Menu.Item key={index} style={{ padding: '0px' }}>
              <NavLink to={value.path}>{value.name}</NavLink>
            </Menu.Item>
          ))}
        </Menu>
      </Col>
    </Row>
  )
}

export { BottomNavigation }
