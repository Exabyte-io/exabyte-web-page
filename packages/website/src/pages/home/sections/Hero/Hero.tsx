import { FC } from 'react'
import heroMb from './images/home-hero-mb.svg'
import heroLg from './images/home-hero-lg.svg'
import { useMediaQuery } from 'react-responsive'
import { ActionButton } from '../../../../components/button/ActionButton'
import './Hero.less'
import { AccessButton } from '../../../../components/button/AccessButton'
import { useContentQuery } from '../../../../graphql'

const Hero: FC = () => {
  const md = useMediaQuery({ maxWidth: 768 })

  const { data } = useContentQuery({
    variables: {
      slug: 'main-page-hero',
    },
  })
  const content = data?.content

  return (
    <div className='home-hero-section'>
      <img src={md ? heroMb : heroLg} alt='' className='background-img' />
      <div className='content'>
        <div className='text-content'>
          <div className='title'>{content?.title}</div>
          <div className='text'>{content?.description}</div>
          <div className='buttons'>
            <ActionButton title={content?.sections?.[0].title} type={'default'} size={'medium'} src={content?.sections?.[0].subTitle} />
            <AccessButton url={content?.sections?.[1].subTitle} />
          </div>
        </div>

        <div className='full-video'>
          <div className='wistia_responsive_padding' style={{ padding: ((56.25 % 0) % 0) % 0, position: 'relative', width: '100%' }}>
            <div className='wistia_responsive_wrapper' style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
              <div
                className='wistia_embed wistia_async_1ahn5osgio videoFoam=true autoPlay=true'
                style={{ height: '100%', position: 'relative', width: '100%' }}
              >
                <div
                  className='wistia_swatch'
                  style={{
                    height: '100%',
                    left: 0,
                    opacity: 0,
                    overflow: 'hidden',
                    position: 'absolute',
                    top: 0,
                    transition: 'opacity 200ms',
                    width: '100%',
                  }}
                >
                  <img
                    src='https://fast.wistia.com/embed/medias/1ahn5osgio/swatch'
                    style={{ filter: 'blur(5px)', height: '100%', objectFit: 'contain', width: '100%' }}
                    alt=''
                    aria-hidden='true'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Hero }
