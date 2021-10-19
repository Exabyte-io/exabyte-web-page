import { FC } from 'react'
import { Menu } from 'antd'
import { withNavigation } from '../../containers/Routing'

const Navigation: FC = ({ children }) => (
  <Menu style={{ backgroundColor: 'transparent' }} mode='horizontal' selectable={false}>
    {children}
  </Menu>
)

const TopNavigation = withNavigation(Navigation, 'top')
export { TopNavigation }
