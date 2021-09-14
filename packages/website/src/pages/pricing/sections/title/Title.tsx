import { FC } from 'react'
import { Typography } from 'antd'
import '../../../our-vision/sections/title/Title.less'
import { useContentQuery } from '../../../../graphql'

export const Title: FC = () => {
  const { data } = useContentQuery({
    variables: {
      slug: 'pricing-hero',
    },
  })
  const content = data?.content

  return (
    <section className={'title-section'}>
      <Typography.Title className={'page-title'}>{content?.title}</Typography.Title>
      <p className={'subtitle'} style={{ maxWidth: 880 }}>
        {content?.description}
      </p>
      <p className={'content'} style={{ paddingRight: 170 }}>
        {content?.subtitle}
      </p>
    </section>
  )
}
