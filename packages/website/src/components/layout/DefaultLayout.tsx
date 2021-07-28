import { FC, useState } from 'react'
import { Col, Layout, Row, Typography } from 'antd'
import { Logo } from '../logo/Logo'
import { TopNavigation } from '../menu/TopNavigation'
import { Outlet } from 'react-router-dom'
import { ActionButton } from '../button/actionButton'
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

      <Layout.Content style={{ width: '100%', minHeight: 'unset' }}>
        <Outlet />
      </Layout.Content>

      <Layout.Footer>
        <Col className={'container'}>
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
            <TouchForm />
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
