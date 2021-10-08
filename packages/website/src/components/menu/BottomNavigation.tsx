import { FC } from 'react'
import { Col, Menu, Row, Typography } from 'antd'
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
        path: '/contact-us',
      },
      {
        name: 'News',
        path: '/news',
      },
      {
        name: 'Jobs',
        path: 'https://angel.co/exabyte-io/jobs',
      },
      {
        name: 'Blog',
        path: 'https://blog.exabyte.io/',
      },
      {
        name: 'Linkedin',
        path: 'https://www.linkedin.com/company/exabyte-io',
      },
      {
        name: 'Github',
        path: 'https://www.github.com/exabyte-io',
      },
      {
        name: 'Twitter',
        path: 'https://www.twitter.com/exabyte_io',
      },
    ],

    product: [
      {
        name: 'Sign Up',
        path: 'https://platform.exabyte.io/login',
      },
      {
        name: 'Sign In',
        path: 'https://platform.exabyte.io/register',
      },
      {
        name: 'Pricing',
        path: 'https://docs.exabyte.io/pricing/service-levels/',
      },
      {
        name: 'Privacy',
        path: 'https://docs.exabyte.io/site-policy/privacy-statement/',
      },
      {
        name: 'Security',
        path: 'https://exabyte.io/#security',
      },
      {
        name: 'Documentation',
        path: 'https://docs.exabyte.io/',
      },
      {
        name: 'Video tutorials',
        path: 'https://www.youtube.com/channel/UCL4UmkYffcskh_BLW9JVNcw/videos',
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
              <a href={value.path} target={value.path?.includes('http') ? '_blank' : ''}>
                {value.name}
              </a>
            </Menu.Item>
          ))}
        </Menu>
      </Col>
      <Col>
        <Typography.Paragraph className={'list-title'}>Product</Typography.Paragraph>
        <Menu style={{ backgroundColor: 'transparent' }} mode='vertical'>
          {footerPages.product.map((value, index) => (
            <Menu.Item key={index} style={{ padding: '0px' }}>
              <a href={value.path} target={value.path?.includes('http') ? '_blank' : ''}>
                {value.name}
              </a>
            </Menu.Item>
          ))}
        </Menu>
      </Col>
    </Row>
  )
}

export { BottomNavigation }
