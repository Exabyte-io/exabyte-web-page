import React, { FC, useState } from 'react'
import './Capabilities.less'
import { Col, Collapse, Layout, Row, Typography } from 'antd'
import GitHubIcon from '../Capabilities/images/git-hub-icon.svg'
import InfoIcon from '../Capabilities/images/info-icon.svg'
import ClosedArrow from './images/closed-arrow.svg'
import OpenArrow from './images/open-arrow.svg'
import { useContentQuery } from '../../../../graphql'

const { Panel } = Collapse

const Capabilities: FC = () => {
  const [openedItem, setOpenedItem] = useState('')
  const [githubLink, setGithubLink] = useState('')
  const [infoLink, setInfoLink] = useState('')
  const [openedCollapseItem, setOpenedCollapseItem] = useState(-1)

  const { data } = useContentQuery({
    variables: {
      slug: 'main-capabilities',
    },
  })
  const content = data?.content

  const changeOpenedItem = (image?: string, ghLink?: string, infLink?: string, index: number) => {
    if (image) {
      if (openedItem === image) {
        setOpenedItem('')
      } else {
        setOpenedItem(image)
      }
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
      <Row align={'middle'} justify={'space-between'} className={'container'} gutter={[48, 48]} style={{ width: '100%', margin: '0 auto' }}>
        <Col style={{ padding: '0' }} xl={24} className={'top-wrapper'}>
          <Typography.Paragraph className={'top-wrapper-title'}>{content?.title}</Typography.Paragraph>
          <Typography.Paragraph className={'top-wrapper-description'}>{content?.description}</Typography.Paragraph>
        </Col>

        <div className='collapse-menu'>
          {content && (
            <div className='collapse-menu-items'>
              {content?.sections?.map((item, index) => {
                return (
                  <div
                    className='collapse-menu-item'
                    key={index}
                    onClick={() => changeOpenedItem(item?.media?.url, item?.subTitle, item?.description, index)}
                  >
                    <span>{item.title}</span>
                    <div className={index === openedCollapseItem ? 'active' : ''}>
                      <img src={index === openedCollapseItem ? OpenArrow : ClosedArrow} alt='' />
                    </div>
                  </div>
                )
              })}
            </div>
          )}
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
          {content?.sections?.map((item, index) => (
            <Panel key={index} header={item?.title}>
              <div className='collapse-menu-mobile-image-wrapper'>
                <img src={item?.media?.url} alt='' />
                <div className='collapse-menu-mobile-icons'>
                  <a href={item?.subTitle}>
                    <img width={25} height={25} src={InfoIcon} alt='' />
                  </a>
                  <a href={item?.description}>
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
