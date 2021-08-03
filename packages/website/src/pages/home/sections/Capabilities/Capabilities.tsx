import { FC, useState } from 'react'
import './Capabilities.less'
import { Col, Layout, Row, Typography, Collapse } from 'antd'
import DropdownIcon from './images/dropdown-icon.svg'
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

const { Panel } = Collapse

const Capabilities: FC = () => {
  const [open, setOpen] = useState(false)

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
        <Col style={{ padding: '0' }} xl={24}>
          <Collapse
            bordered={false}
            expandIconPosition={'right'}
            onChange={() => setOpen(prevState => !prevState)}
            expandIcon={() =>
              open ? (
                <Row align={'middle'} justify={'center'} style={{ display: 'flex', height: '100%' }}>
                  <Col className={'active-class'}>
                    <img alt={'img'} src={DropdownIcon} />
                  </Col>
                </Row>
              ) : (
                <Row align={'middle'} justify={'center'} style={{ display: 'flex', height: '100%' }}>
                  <Col>
                    <img alt={'img'} src={DropdownIcon} />
                  </Col>
                </Row>
              )
            }
            className={'menu-wrapper'}
          >
            <Panel header='Fin-browser integrated environment for materials design' key='1'>
              <img alt={'img'} src={Dropdown1} className={'menu-wrapper-image'} />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <a href='#' className={'menu-wrapper-link'}>
                  <img alt={'img'} src={GitHubIcon} />
                </a>
                <a href='#' className={'menu-wrapper-link'}>
                  <img alt={'img'} src={InfoIcon} />
                </a>
              </div>
            </Panel>
            <Panel header='Fast and secure cloud high-performance computing' key='2'>
              <img alt={'img'} src={Dropdown2} className={'menu-wrapper-image'} />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <a href='#' className={'menu-wrapper-link'}>
                  <img alt={'img'} src={GitHubIcon} />
                </a>
                <a href='#' className={'menu-wrapper-link'}>
                  <img alt={'img'} src={InfoIcon} />
                </a>
              </div>
            </Panel>
            <Panel header='Web-based designer for inter-operable modeling workflows' key='3'>
              <img alt={'img'} src={Dropdown3} className={'menu-wrapper-image'} />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <a href='#' className={'menu-wrapper-link'}>
                  <img alt={'img'} src={GitHubIcon} />
                </a>
                <a href='#' className={'menu-wrapper-link'}>
                  <img alt={'img'} src={InfoIcon} />
                </a>
              </div>
            </Panel>
            <Panel header='Open-source data standards organizing materials information' key='4'>
              <img alt={'img'} src={Dropdown4} className={'menu-wrapper-image'} />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <a href='#' className={'menu-wrapper-link'}>
                  <img alt={'img'} src={GitHubIcon} />
                </a>
                <a href='#' className={'menu-wrapper-link'}>
                  <img alt={'img'} src={InfoIcon} />
                </a>
              </div>
            </Panel>
            <Panel header='Advanced data analytics and machine learning infrastructure' key='5'>
              <img alt={'img'} src={Dropdown5} className={'menu-wrapper-image'} />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <a href='#' className={'menu-wrapper-link'}>
                  <img alt={'img'} src={GitHubIcon} />
                </a>
                <a href='#' className={'menu-wrapper-link'}>
                  <img alt={'img'} src={InfoIcon} />
                </a>
              </div>
            </Panel>
            <Panel header='Secure collaboration within and between accounts' key='6'>
              <img alt={'img'} src={Dropdown6} className={'menu-wrapper-image'} />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <a href='#' className={'menu-wrapper-link'}>
                  <img alt={'img'} src={GitHubIcon} />
                </a>
                <a href='#' className={'menu-wrapper-link'}>
                  <img alt={'img'} src={InfoIcon} />
                </a>
              </div>
            </Panel>
            <Panel header='Quantum ESPRESSO, VASP, LAMMPS, GROMACS, and other simulation engines' key='7'>
              <img alt={'img'} src={Dropdown7} className={'menu-wrapper-image'} />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <a href='#' className={'menu-wrapper-link'}>
                  <img alt={'img'} src={GitHubIcon} />
                </a>
                <a href='#' className={'menu-wrapper-link'}>
                  <img alt={'img'} src={InfoIcon} />
                </a>
              </div>
            </Panel>
            <Panel header='Command-line interface, remote desktop, RESTful API access options for experts' key='8'>
              <img alt={'img'} src={Dropdown8} className={'menu-wrapper-image'} />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <a href='#' className={'menu-wrapper-link'}>
                  <img alt={'img'} src={GitHubIcon} />
                </a>
                <a href='#' className={'menu-wrapper-link'}>
                  <img alt={'img'} src={InfoIcon} />
                </a>
              </div>
            </Panel>
            <Panel
              header='Encrypted data at rest and in-transfer, network partitioning, and more for maximum security'
              key='9'
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
            </Panel>
          </Collapse>
        </Col>
      </Row>
    </Layout>
  )
}

export { Capabilities }
