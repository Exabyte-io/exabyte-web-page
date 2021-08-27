import { FC } from 'react';
import { Typography } from 'antd';
import './our-vision.less';

export const OurVision: FC = () => {
  return (
    <>
      <div className={'title-section'}>
        <Typography.Title className={'title-section__title'}> Our Vision </Typography.Title>
        <p className={'title-section__subtitle'}>
          Material progress - it's elemental
        </p>
        <p className={'title-section__content'}>
          Materials modeling today is an esoteric, albeit critical, discipline, hamstrung by a proliferation of
          specialized point tools, computational complexity, lack of standards, and an unmanaged explosion of data.
          In order for the promise of materials modeling to be realized, the technology has to become FAIR:
          producing Findable data, Accessible and easy-to-use, with Inter-operable tools, and having
          Re-usable well-defined workflows. We believe these goals are attainable now - and are proving it,
          with examples listed here.
        </p>
      </div>
    </>


  )
}