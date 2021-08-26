import React, { FC } from 'react'
import './Capabilities.less'
import { Col, Layout, Row, Typography, Menu } from 'antd'
import Dropdown1 from './images/dropdown1.svg'
import Dropdown2 from './images/dropdown2.svg'
import Dropdown3 from './images/dropdown3.svg'
import Dropdown4 from './images/dropdown4.svg'
import Dropdown5 from './images/dropdown5.svg'
import Dropdown6 from './images/dropdown6.svg'
import Dropdown7 from './images/dropdown7.svg'
import Dropdown8 from './images/dropdown8.svg'
import Dropdown9 from './images/dropdown9.svg'
import GitHubIcon from '../Capabilities/images/git-hub-icon.svg'
import InfoIcon from '../Capabilities/images/info-icon.svg'
import { useMediaQuery } from 'react-responsive'

const { SubMenu } = Menu

const rootSubmenuKeys = ['sub1', 'sub2', 'sub4']

const Capabilities: FC = () => {
  const xl = useMediaQuery({ minWidth: 992 })

  //menu
  const [openKeys, setOpenKeys] = React.useState(['sub1'])

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const onOpenChange = keys => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1)
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }

  return (
    <Layout className={'section capabilities-wrapper'}>
      <Row
        align={'middle'}
        justify={'space-between'}
        className={'container'}
        gutter={[48, 48]}
        style={{ width: '100%', margin: '0 auto' }}
      >
        <Col style={{ padding: '0' }} xl={24} className={'top-wrapper'}>
          <Typography.Paragraph className={'top-wrapper-title'}>Platform Capabilities</Typography.Paragraph>
          <Typography.Paragraph className={'top-wrapper-description'}>
            From idea to result - let's get there faster together!
          </Typography.Paragraph>
        </Col>
        <Col style={{ padding: '0' }} xs={24} sm={24} md={24} xl={14}>
          <Menu mode={xl ? 'vertical' : 'inline'} openKeys={openKeys} onOpenChange={onOpenChange}>
            <SubMenu key='sub1' title='Fin-browser integrated environment for materials design'>
              <Menu.Item key='1'>
                <img alt={'img'} src={Dropdown1} className={'menu-wrapper-image'} />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <a href='#' className={'menu-wrapper-link'}>
                    <img alt={'img'} src={GitHubIcon} />
                  </a>
                  <a href='#' className={'menu-wrapper-link'}>
                    <img alt={'img'} src={InfoIcon} />
                  </a>
                </div>
              </Menu.Item>
            </SubMenu>
            <SubMenu key='sub2' title='Fast and secure cloud high-performance computing'>
              <img alt={'img'} src={Dropdown2} className={'menu-wrapper-image'} />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <a href='#' className={'menu-wrapper-link'}>
                  <img alt={'img'} src={GitHubIcon} />
                </a>
                <a href='#' className={'menu-wrapper-link'}>
                  <img alt={'img'} src={InfoIcon} />
                </a>
              </div>
            </SubMenu>
            <SubMenu key='sub3' title='Web-based designer for inter-operable modeling workflows'>
              <img alt={'img'} src={Dropdown3} className={'menu-wrapper-image'} />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <a href='#' className={'menu-wrapper-link'}>
                  <img alt={'img'} src={GitHubIcon} />
                </a>
                <a href='#' className={'menu-wrapper-link'}>
                  <img alt={'img'} src={InfoIcon} />
                </a>
              </div>
            </SubMenu>
            <SubMenu key='sub4' title='Open-source data standards organizing materials information'>
              <img alt={'img'} src={Dropdown4} className={'menu-wrapper-image'} />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <a href='#' className={'menu-wrapper-link'}>
                  <img alt={'img'} src={GitHubIcon} />
                </a>
                <a href='#' className={'menu-wrapper-link'}>
                  <img alt={'img'} src={InfoIcon} />
                </a>
              </div>
            </SubMenu>
            <SubMenu key='sub5' title='Advanced data analytics and machine learning infrastructure'>
              <img alt={'img'} src={Dropdown5} className={'menu-wrapper-image'} />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <a href='#' className={'menu-wrapper-link'}>
                  <img alt={'img'} src={GitHubIcon} />
                </a>
                <a href='#' className={'menu-wrapper-link'}>
                  <img alt={'img'} src={InfoIcon} />
                </a>
              </div>
            </SubMenu>
            <SubMenu key='sub6' title='Secure collaboration within and between accounts'>
              <img alt={'img'} src={Dropdown6} className={'menu-wrapper-image'} />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <a href='#' className={'menu-wrapper-link'}>
                  <img alt={'img'} src={GitHubIcon} />
                </a>
                <a href='#' className={'menu-wrapper-link'}>
                  <img alt={'img'} src={InfoIcon} />
                </a>
              </div>
            </SubMenu>
            <SubMenu key='sub7' title='Quantum ESPRESSO, VASP, LAMMPS, GROMACS, and other simulation engines'>
              <img alt={'img'} src={Dropdown7} className={'menu-wrapper-image'} />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <a href='#' className={'menu-wrapper-link'}>
                  <img alt={'img'} src={GitHubIcon} />
                </a>
                <a href='#' className={'menu-wrapper-link'}>
                  <img alt={'img'} src={InfoIcon} />
                </a>
              </div>
            </SubMenu>
            <SubMenu key='sub8' title='Command-line interface, remote desktop, RESTful API access options for experts'>
              <img alt={'img'} src={Dropdown8} className={'menu-wrapper-image'} />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <a href='#' className={'menu-wrapper-link'}>
                  <img alt={'img'} src={GitHubIcon} />
                </a>
                <a href='#' className={'menu-wrapper-link'}>
                  <img alt={'img'} src={InfoIcon} />
                </a>
              </div>
            </SubMenu>
            <SubMenu
              key='sub9'
              title='Encrypted data at rest and in-transfer, network partitioning, and more for maximum security'
            >
              <img alt={'img'} src={Dropdown9} className={'menu-wrapper-image'} />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <a href='#' className={'menu-wrapper-link'}>
                  <img alt={'img'} src={GitHubIcon} />
                </a>
                <a href='#' className={'menu-wrapper-link'}>
                  <img alt={'img'} src={InfoIcon} />
                </a>
              </div>
            </SubMenu>
          </Menu>
        </Col>
      </Row>
    </Layout>
  )
}

export { Capabilities }
