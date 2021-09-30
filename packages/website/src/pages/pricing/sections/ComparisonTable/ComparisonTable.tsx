import { FC, useEffect, useState } from 'react'
import { Layout, Typography } from 'antd'
import BackgroundMb from './images/bg-mb.svg'
import BackgroundMbShort from './images/bg-mb-short.svg'
import BackgroundLg from './images/bg-lg.svg'
import './ComparisonTable.less'
import { useContentQuery } from '../../../../graphql'
import Features from './images/features.svg'
import Line from './images/line.svg'
import Check from './images/check.svg'
import { Link } from 'react-router-dom'
import Chat from './images/chat.svg'
import { useMediaQuery } from 'react-responsive'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y } from 'swiper'
import Arrow from './images/arrow.svg'

// Import Swiper styles
import 'swiper/less'

const ComparisonTable: FC = () => {
  const { data } = useContentQuery({
    variables: {
      slug: 'pricing-cards',
    },
  })

  const content = data?.content

  const sections = data?.content?.sections

  const lg = useMediaQuery({ minWidth: 992 })

  const list = document.querySelector('.content-wrapper-list')
  const discSpace = document.querySelector('.disc-space')

  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) {
      discSpace?.classList.add('close')
      list?.querySelectorAll('.content-wrapper-list-item').forEach(value => {
        value.querySelector('.center')?.classList.add('close')
        value.classList.add('short')
      })
    } else {
      discSpace?.classList.remove('close')
      list?.querySelectorAll('.content-wrapper-list-item').forEach(value => {
        value.querySelector('.center')?.classList.remove('close')
        value.classList.remove('short')
      })
    }
  }, [open])

  return (
    <Layout className={'comparison-table'}>
      <img className={'comparison-table-bg-mb'} src={open ? BackgroundMb : BackgroundMbShort} alt={'img'} />
      <img className={'comparison-table-bg-lg'} src={BackgroundLg} alt={'img'} />
      <div className={'comparison-table-wrapper container'}>
        <Typography.Paragraph className={'title'}>{content?.title}</Typography.Paragraph>
        <Typography.Paragraph className={'description'}>{content?.description}</Typography.Paragraph>
        <div className={'content-wrapper'}>
          <div className={'content-wrapper-aside'}>
            <div className={'feature-wrapper'}>
              <img src={Features} alt={'image'} />
              <Typography.Paragraph className={'feature-wrapper-title'}>Features</Typography.Paragraph>
            </div>
            <div className={'private-data'}>
              <Typography.Paragraph className={'private-data-title'}>Private Data</Typography.Paragraph>
              <Typography.Paragraph className={'private-data-title'}>Account Members</Typography.Paragraph>
              <Typography.Paragraph className={'private-data-title'}>Support Severity</Typography.Paragraph>
              <Typography.Paragraph className={'private-data-title'}>Entity Limits: Projects</Typography.Paragraph>
            </div>
            <div className={'disc-space close'}>
              <Typography.Paragraph className={'disc-space-title'}>Disk Space</Typography.Paragraph>
              <Typography.Paragraph className={'disc-space-title'}>Dropbox Space</Typography.Paragraph>
              <Typography.Paragraph className={'disc-space-title'}>Command-line Access</Typography.Paragraph>
              <Typography.Paragraph className={'disc-space-title'}>Monthly Subscription Fee</Typography.Paragraph>
              <Typography.Paragraph className={'disc-space-title'}>Yearly Subscription</Typography.Paragraph>
              <Typography.Paragraph className={'disc-space-title'}>Minimum Compute Allocation</Typography.Paragraph>
              <Typography.Paragraph className={'disc-space-title'}>Additional Account Members - Member/Month</Typography.Paragraph>
              <Typography.Paragraph className={'disc-space-title'}>Additional Account Members - Member/Year</Typography.Paragraph>
              <Typography.Paragraph className={'disc-space-title'}>Additional Disk Space - GB/Month</Typography.Paragraph>
              <Typography.Paragraph className={'disc-space-title'}>Additional Dropbox Space - GB/Month</Typography.Paragraph>
              <Typography.Paragraph className={'disc-space-title'}>Ordinary Compute Price - Core-Hour </Typography.Paragraph>
            </div>
          </div>
          {lg ? (
            <ul className={'content-wrapper-list'}>
              {content?.sections?.map((value, index) => (
                <li className={'content-wrapper-list-item short'} key={index}>
                  <div className={'top'}>
                    <Typography.Paragraph className={'title'}>{value.title}</Typography.Paragraph>
                    <Typography.Paragraph className={'description'}>{value.description}</Typography.Paragraph>
                  </div>
                  <div className={'under-top'}>
                    {index === 0 && <img src={Line} alt={'image'} />}
                    {index !== 0 && <img src={Check} alt={'image'} />}
                    {index !== 2 && <Typography.Paragraph className={'number'}>1</Typography.Paragraph>}
                    {index === 2 && <Typography.Paragraph className={'number'}>5</Typography.Paragraph>}
                    {index === 0 && <Typography.Paragraph className={'text'}>Normal</Typography.Paragraph>}
                    {index === 1 && <Typography.Paragraph className={'text'}>High</Typography.Paragraph>}
                    {index === 2 && <Typography.Paragraph className={'text'}>Urgent</Typography.Paragraph>}
                    {index === 0 && <Typography.Paragraph className={'number'}>1</Typography.Paragraph>}
                    {index === 1 && <Typography.Paragraph className={'number'}>2</Typography.Paragraph>}
                    {index === 2 && <Typography.Paragraph className={'number'}>10</Typography.Paragraph>}
                  </div>
                  <div className={'center close'}>
                    {index === 0 && <Typography.Paragraph className={'number'}>10 GB</Typography.Paragraph>}
                    {index === 1 && <Typography.Paragraph className={'number'}>10 GB</Typography.Paragraph>}
                    {index === 2 && <Typography.Paragraph className={'number'}>10 GB</Typography.Paragraph>}
                    {index === 0 && <Typography.Paragraph className={'number'}>1 GB</Typography.Paragraph>}
                    {index === 1 && <Typography.Paragraph className={'number'}>1 GB</Typography.Paragraph>}
                    {index === 2 && <Typography.Paragraph className={'number'}>1 GB</Typography.Paragraph>}
                    {index === 0 && <img src={Line} alt={'image'} />}
                    {index !== 0 && <img src={Check} alt={'image'} />}
                    {index === 0 && <img src={Line} alt={'image'} />}
                    {index === 1 && <Typography.Paragraph className={'number'}>$ 10</Typography.Paragraph>}
                    {index === 2 && <img src={Line} alt={'image'} />}
                    {index === 0 && <img src={Line} alt={'image'} />}
                    {index === 1 && <Typography.Paragraph className={'number'}>$ 100</Typography.Paragraph>}
                    {index === 2 && <Typography.Paragraph className={'number'}>$ 1000</Typography.Paragraph>}
                    {index === 0 && <img src={Line} alt={'image'} />}
                    {index === 1 && <img src={Line} alt={'image'} />}
                    {index === 2 && <Typography.Paragraph className={'number'}>$ 1000</Typography.Paragraph>}
                    {index === 0 && <img src={Line} alt={'image'} />}
                    {index === 1 && <img src={Line} alt={'image'} />}
                    {index === 2 && <Typography.Paragraph className={'number'}>$ 20</Typography.Paragraph>}
                    {index === 0 && <img src={Line} alt={'image'} />}
                    {index === 1 && <img src={Line} alt={'image'} />}
                    {index === 2 && <Typography.Paragraph className={'number'}>$ 200</Typography.Paragraph>}
                    {index === 0 && <img src={Line} alt={'image'} />}
                    {index === 1 && <Typography.Paragraph className={'number'}>$ 0,2</Typography.Paragraph>}
                    {index === 2 && <Typography.Paragraph className={'number'}>$ 0,2</Typography.Paragraph>}
                    {index === 0 && <img src={Line} alt={'image'} />}
                    {index === 1 && <Typography.Paragraph className={'number'}>$ 0,2</Typography.Paragraph>}
                    {index === 2 && <Typography.Paragraph className={'number'}>$ 0,2</Typography.Paragraph>}
                    {index === 0 && <img src={Line} alt={'image'} />}
                    {index === 1 && <Typography.Paragraph className={'number'}>$ 0,12</Typography.Paragraph>}
                    {index === 2 && <Typography.Paragraph className={'number'}>$ 0,12</Typography.Paragraph>}
                  </div>
                  <div className={'bottom'}>
                    <p className={'number'}>
                      ${`${value.subTitle}`}
                      <span className={'year'}>/ year</span>
                    </p>
                    <Link to={'/'} className={'link'}>
                      GET STARTED
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <Swiper
              modules={[Navigation, A11y]}
              slidesPerView={1}
              spaceBetween={10}
              navigation
              className={'content-wrapper-list'}
              onSlideChange={slide => console.log(slide)}
            >
              <SwiperSlide className={'content-wrapper-list-item short'}>
                <div className={'top'}>
                  <Typography.Paragraph className={'title'}>{sections?.[0].title}</Typography.Paragraph>
                  <Typography.Paragraph className={'description'}>{sections?.[0].description}</Typography.Paragraph>
                </div>
                <div className={'under-top'}>
                  <img src={Line} alt={'image'} />
                  <Typography.Paragraph className={'number'}>1</Typography.Paragraph>
                  <Typography.Paragraph className={'text'}>Normal</Typography.Paragraph>
                  <Typography.Paragraph className={'number'}>1</Typography.Paragraph>
                </div>
                <div className={'center close'}>
                  <Typography.Paragraph className={'number'}>10 GB</Typography.Paragraph>
                  <Typography.Paragraph className={'number'}>1 GB</Typography.Paragraph>
                  <img src={Line} alt={'image'} />
                  <img src={Line} alt={'image'} />
                  <img src={Line} alt={'image'} />
                  <img src={Line} alt={'image'} />
                  <img src={Line} alt={'image'} />
                  <img src={Line} alt={'image'} />
                  <img src={Line} alt={'image'} />
                  <img src={Line} alt={'image'} />
                  <img src={Line} alt={'image'} />
                </div>
                <div className={'bottom'}>
                  <p className={'number'}>
                    ${`${sections?.[0].subTitle}`}
                    <span className={'year'}>/ year</span>
                  </p>
                  <Link to={'/'} className={'link'}>
                    GET STARTED
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className={'content-wrapper-list-item short'}>
                <div className={'top'}>
                  <Typography.Paragraph className={'title'}>{sections?.[1].title}</Typography.Paragraph>
                  <Typography.Paragraph className={'description'}>{sections?.[1].description}</Typography.Paragraph>
                </div>
                <div className={'under-top'}>
                  <img src={Check} alt={'image'} />
                  <Typography.Paragraph className={'number'}>1</Typography.Paragraph>
                  <Typography.Paragraph className={'text'}>High</Typography.Paragraph>
                  <Typography.Paragraph className={'number'}>2</Typography.Paragraph>
                </div>
                <div className={'center close'}>
                  <Typography.Paragraph className={'number'}>10 GB</Typography.Paragraph>
                  <Typography.Paragraph className={'number'}>1 GB</Typography.Paragraph>
                  <img src={Check} alt={'image'} />
                  <Typography.Paragraph className={'number'}>$ 10</Typography.Paragraph>
                  <Typography.Paragraph className={'number'}>$ 100</Typography.Paragraph>
                  <img src={Line} alt={'image'} />
                  <Typography.Paragraph className={'number'}>$ 1000</Typography.Paragraph>
                  <img src={Line} alt={'image'} />
                  <img src={Line} alt={'image'} />
                  <Typography.Paragraph className={'number'}>$ 0,2</Typography.Paragraph>
                  <Typography.Paragraph className={'number'}>$ 0,2</Typography.Paragraph>
                  <Typography.Paragraph className={'number'}>$ 0,12</Typography.Paragraph>
                </div>
                <div className={'bottom'}>
                  <p className={'number'}>
                    ${`${sections?.[1].subTitle}`}
                    <span className={'year'}>/ year</span>
                  </p>
                  <Link to={'/'} className={'link'}>
                    GET STARTED
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className={'content-wrapper-list-item short'}>
                <div className={'top'}>
                  <Typography.Paragraph className={'title'}>{sections?.[2].title}</Typography.Paragraph>
                  <Typography.Paragraph className={'description'}>{sections?.[2].description}</Typography.Paragraph>
                </div>
                <div className={'under-top'}>
                  <img src={Check} alt={'image'} />
                  <Typography.Paragraph className={'number'}>5</Typography.Paragraph>
                  <Typography.Paragraph className={'text'}>Urgent</Typography.Paragraph>
                  <Typography.Paragraph className={'number'}>10</Typography.Paragraph>
                </div>
                <div className={'center close'}>
                  <Typography.Paragraph className={'number'}>10 GB</Typography.Paragraph>
                  <Typography.Paragraph className={'number'}>1 GB</Typography.Paragraph>
                  <img src={Check} alt={'image'} />
                  <img src={Line} alt={'image'} />
                  <Typography.Paragraph className={'number'}>$ 1000</Typography.Paragraph>
                  <Typography.Paragraph className={'number'}>$ 1000</Typography.Paragraph>
                  <Typography.Paragraph className={'number'}>$ 20</Typography.Paragraph>
                  <Typography.Paragraph className={'number'}>$ 200</Typography.Paragraph>
                  <Typography.Paragraph className={'number'}>$ 0,2</Typography.Paragraph>
                  <Typography.Paragraph className={'number'}>$ 0,2</Typography.Paragraph>
                  <Typography.Paragraph className={'number'}>$ 0,12</Typography.Paragraph>
                </div>
                <div className={'bottom'}>
                  <p className={'number'}>
                    ${`${sections?.[2].subTitle}`}
                    <span className={'year'}>/ year</span>
                  </p>
                  <Link to={'/'} className={'link'}>
                    GET STARTED
                  </Link>
                </div>
              </SwiperSlide>
              <div className='prev'>
                <img src={Arrow} alt={'img'} />
              </div>
              <div className='next'>
                <img src={Arrow} alt={'img'} />
              </div>
            </Swiper>
          )}
        </div>
        <div className={'bottom-content'}>
          <button className={'link'} onClick={() => setOpen(prevState => !prevState)}>
            {' '}
            Less info about plans
          </button>
          <Typography.Paragraph className={'title'}>ENTERPRISE+</Typography.Paragraph>
          <Typography.Paragraph className={'description'}>Need private clusters, managed cloud, and extended privacy?</Typography.Paragraph>
          <div className={'chat'}>
            <img src={Chat} alt={'img'} />
            <Typography.Paragraph className={'chat-title'}>Contact us about the "Enterprise+" option.</Typography.Paragraph>
          </div>
          <Link to={'/'} className={'contact'}>
            Contact us
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export { ComparisonTable }
