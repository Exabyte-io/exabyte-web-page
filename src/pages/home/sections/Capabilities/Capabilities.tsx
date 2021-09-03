import React, { FC, useState } from 'react'
import './Capabilities.less'
import { Col, Collapse, Layout, Row, Typography } from 'antd'
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
import ClosedArrow from './images/closed-arrow.svg'
import OpenArrow from './images/open-arrow.svg'

const { Panel } = Collapse

interface capabilitiesCollapseItem {
  name: string
  image: string
  githubLink: string
  infoLink: string
}

const capabilitiesCollapseItems: capabilitiesCollapseItem[] = [
  {
    name: 'Fin-browser integrated environment for materials design',
    image: Dropdown1,
    githubLink: 'https://github.com/Exabyte-io/materials-designer',
    infoLink: 'https://docs.exabyte.io/tutorials/materials/slabs-interface/',
  },
  {
    name: 'Fast and secure cloud high-performance computing',
    image: Dropdown2,
    githubLink: 'https://github.com/Exabyte-io/exabyte-benchmarks-suite',
    infoLink: 'https://docs.exabyte.io/benchmarks/2018-11-12-comparison/',
  },
  {
    name: 'Web-based designer for inter-operable modeling workflows',
    image: Dropdown3,
    githubLink: '',
    infoLink: 'https://docs.exabyte.io/workflow-designer/overview/',
  },
  {
    name: 'Open-source data standards organizing materials information',
    image: Dropdown4,
    githubLink: 'https://github.com/Exabyte-io/esse',
    infoLink: 'https://docs.exabyte.io/data-structured/convention/',
  },
  {
    name: 'Advanced data analytics and machine learning infrastructure',
    image: Dropdown5,
    githubLink:
      'https://github.com/Exabyte-io/exabyte-api-examples/blob/master/examples/job/ml-train-model-predict-properties.ipynb',
    infoLink: 'https://docs.exabyte.io/materials/actions/advanced-search/',
  },
  {
    name: 'Secure collaboration within and between accounts',
    image: Dropdown6,
    githubLink: '',
    infoLink: 'https://docs.exabyte.io/collaboration/ui/overview/',
  },
  {
    name: 'Quantum ESPRESSO, VASP, LAMMPS, GROMACS, and other simulation engines',
    image: Dropdown7,
    githubLink: 'https://github.com/Exabyte-io/exaparser',
    infoLink: 'https://docs.exabyte.io/software-directory/overview/',
  },
  {
    name: 'Command-line interface, remote desktop, RESTful API access options for experts',
    image: Dropdown8,
    githubLink: 'https://github.com/Exabyte-io/exabyte-api-examples',
    infoLink: 'https://docs.exabyte.io/remote-connection/overview/',
  },
  {
    name: 'Encrypted data at rest and in-transfer, network partitioning, and more for    maximum security',
    image: Dropdown9,
    githubLink: 'https://exabyte.io/#security',
    infoLink: 'https://docs.exabyte.io/security/overview/',
  },
]

const Capabilities: FC = () => {
  const [openedItem, setOpenedItem] = useState('')
  const [githubLink, setGithubLink] = useState('')
  const [infoLink, setInfoLink] = useState('')
  const [openedCollapseItem, setOpenedCollapseItem] = useState(-1)

  const changeOpenedItem = (image: string, ghLink: string, infLink: string, index: number) => {
    if (openedItem === image) {
      setOpenedItem('')
    } else {
      setOpenedItem(image)
    }

    setGithubLink(ghLink)
    setInfoLink(infLink)

    if (index === openedCollapseItem) {
      setOpenedCollapseItem(-1)
    } else {
      setOpenedCollapseItem(index)
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

        <div className='collapse-menu'>
          <div className='collapse-menu-items'>
            {capabilitiesCollapseItems.map((item, index) => {
              return (
                <div
                  className='collapse-menu-item'
                  key={index}
                  onClick={() => changeOpenedItem(item.image, item.githubLink, item.infoLink, index)}
                >
                  <span>{item.name}</span>
                  <div className={index === openedCollapseItem ? 'active' : ''}>
                    <img src={index === openedCollapseItem ? OpenArrow : ClosedArrow} alt='' />
                  </div>
                </div>
              )
            })}
          </div>
          <div className='collapse-image-wrapper' style={{ display: openedItem !== '' ? 'flex' : 'none' }}>
            <img className='collapse-image' src={openedItem} alt='' />
            <div className='icons' style={{ display: 'flex' }}>
              <a href={infoLink}>
                <img width={25} height={25} src={InfoIcon} alt='' />
              </a>
              <a href={githubLink}>
                <img width={25} height={25} src={GitHubIcon} alt='' />
              </a>
            </div>
          </div>
        </div>

        <Collapse className='collapse-menu-mobile' accordion bordered={false} expandIconPosition={'right'}>
          {capabilitiesCollapseItems.map((item, index) => (
            <Panel key={index} header={item.name}>
              <div className='collapse-menu-mobile-image-wrapper'>
                <img src={item.image} alt='' />
                <div className='collapse-menu-mobile-icons'>
                  <a href={item.infoLink}>
                    <img width={25} height={25} src={InfoIcon} alt='' />
                  </a>
                  <a href={item.infoLink}>
                    <img width={25} height={25} src={GitHubIcon} alt='' />
                  </a>
                </div>
              </div>
            </Panel>
          ))}
        </Collapse>
      </Row>
    </Layout>
  )
}

export { Capabilities }
