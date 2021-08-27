import { FC } from 'react';
import { Typography } from 'antd';
import { Title } from './sections/title/Title'
import { Beliefs } from './sections/beliefs/Beliefs'
import './OurVision.less';
export const OurVision: FC = () => {
  return (
    <>
      <Title />
      <Beliefs />
    </>


  )
}