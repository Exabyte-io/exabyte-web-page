import { FC } from 'react'
import { Layout } from 'antd'
import BackgroundMb from './images/bg-mb.svg'
import BackgroundLg from './images/bg-lg.svg'
import './ComparisonTable.less'

const ComparisonTable: FC = () => {
  return (
    <Layout className={'comparison-table'}>
      <img className={'comparison-table-bg-mb'} src={BackgroundMb} alt={'img'} />
      <img className={'comparison-table-bg-lg'} src={BackgroundLg} alt={'img'} />
    </Layout>
  )
}

export { ComparisonTable }
