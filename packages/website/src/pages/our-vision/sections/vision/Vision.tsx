import { FC } from 'react'
import './Vision.less'
import Background from './images/Rectangle_253.svg'
import BackgroundMobile from './images/background-mb.svg'
import { useMediaQuery } from 'react-responsive'
import { useContentQuery } from '../../../../graphql'

export const Vision: FC = () => {
  const md = useMediaQuery({ maxWidth: 768 })
  const { data } = useContentQuery({
    variables: {
      slug: 'vision-page',
    },
  })
  const content = data?.content?.sections

  return (
    <section className={'vision'}>
      <img src={md ? BackgroundMobile : Background} alt={''} className={'background'} />
      <div className={'content'}>
        <div className={'wrapper'}>
          {content?.map(visionBlock => (
            <article className={'entry'} key={visionBlock.id}>
              <div className={'label'}>{visionBlock.title}</div>
              <div className={'text'}>{visionBlock.description}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
