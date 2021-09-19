import { FC } from 'react'
import Image from './image/image.svg'
import './Options.less'
import { useContentQuery } from '../../../../graphql'
import { useMediaQuery } from 'react-responsive'

export const Options: FC = () => {
  const xl = useMediaQuery({ minWidth: '992px' })

  const { data } = useContentQuery({
    variables: {
      slug: 'pricing-content',
    },
  })
  const content = data?.content?.sections?.[1]

  return (
    <section className={'option-section'}>
      <p className={'option-title'}>
        {xl && <img src={Image} alt={'image'} />}
        {content?.title}
      </p>
      <p className={'option-text'}>{content?.subTitle}</p>
    </section>
  )
}
