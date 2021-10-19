import { CSSProperties, FC } from 'react'
import { Typography } from 'antd'
import unlockSrc from './unlock.svg'
import './AccessButton.less'

type AccessBtnProps = {
  style?: CSSProperties
  url: string | undefined
}

const AccessButton: FC<AccessBtnProps> = ({ style, url }) => (
  <a href={url} style={style} className={'access-btn-wrapper'} target={'_blank'}>
    <img alt='img' src={unlockSrc} style={{ marginRight: 12 }} className={'access-btn-wrapper-img'} />
    <Typography.Paragraph className={'access-btn-wrapper-text'}>We support Open Access</Typography.Paragraph>
  </a>
)

export { AccessButton }
