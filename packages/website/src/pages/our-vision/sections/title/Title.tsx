import { FC } from 'react'
import { Typography } from 'antd'
import { useContentQuery } from '../../../../graphql'
import './Title.less'

export const Title: FC = () => {
  const { data } = useContentQuery({
    variables: {
      slug: 'vision-page',
    },
  })
  const content = data?.content

  return (
    <section className={'title-section'}>
      <Typography.Title className={'page-title'}>{content?.title}</Typography.Title>
      <p className={'subtitle'}>{content?.subtitle}</p>
      <p className={'content'}>{content?.description}</p>
    </section>
  )
}
