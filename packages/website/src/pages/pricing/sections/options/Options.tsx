import { FC } from 'react'
import './Options.less'
import { useContentQuery } from '../../../../graphql'

export const Options: FC = () => {
  const { data } = useContentQuery({
    variables: {
      slug: 'pricing-content',
    },
  })
  const content = data?.content?.sections?.[1]

  return (
    <section className={'option-section'}>
      <p className={'option-title'}>{content?.title}</p>
      <p className={'option-text'}>{content?.subTitle}</p>
    </section>
  )
}
