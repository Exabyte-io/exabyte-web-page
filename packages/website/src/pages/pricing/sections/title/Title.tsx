import { FC } from 'react'
import bgLg from './title-bg-lg.svg'
import bgMb from './title-bg-mb.svg'
import './Title.less'
import { Typography } from 'antd'
import { useContentQuery } from '../../../../graphql'

export const Title: FC = () => {
  const { data } = useContentQuery({
    variables: {
      slug: 'pricing-hero',
    },
  })
  const content = data?.content

  return (
    <section className={'title'}>
      <div className={'container title-content'}>
        <Typography.Paragraph className={'title-content-title'}>{content?.title}</Typography.Paragraph>
        <Typography.Paragraph className={'title-content-description'}>{content?.description}</Typography.Paragraph>
      </div>
      <img className={'title-bg-lg'} src={bgLg} alt={'image'} />
      <img className={'title-bg-mb'} src={bgMb} alt={'image'} />
    </section>
  )
}
