import { FC, lazy } from 'react'
import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { DefaultLayout } from '../components/layout/DefaultLayout'
import { Menu, MenuProps } from 'antd'
import { RoutesProps } from 'react-router'

const Home = lazy(() => import('./../pages/home'))
// const Login = lazy(() => import('./../pages/login'))
// const ContactUs = lazy(() => import('../pages/contact-us'))

type RouteNavigationMap = {
  [key: string]: { component: FC; name: string }
}

const routeMap: RouteNavigationMap = {
  '/': {
    component: Home,
    name: 'Home',
  },
  '/case-studies': {
    component: Home,
    name: 'Case Studies',
  },
  '/pricing': {
    component: Home,
    name: 'Pricing',
  },
  '/news': {
    component: Home,
    name: 'News',
  },
  '/contact-us': {
    component: Home,
    name: 'Contact Us',
  },
  '/about': {
    component: Home,
    name: 'About',
  },
}

function withNavigation(Wrapped: FC<MenuProps>): FC<MenuProps> {
  return props => {
    const { pathname } = useLocation()
    return (
      <Wrapped {...props} defaultSelectedKeys={[pathname ?? '/']}>
        {Object.entries(routeMap).map(
          ([path, { name }]) =>
            name !== 'Home' && (
              <Menu.Item key={path}>
                <NavLink to={path}>{name}</NavLink>
              </Menu.Item>
            ),
        )}
      </Wrapped>
    )
  }
}

function withRoutes(Wrapped: FC): FC<RoutesProps> {
  return props => (
    <Wrapped {...props}>
      {Object.entries(routeMap).map(([path, { component }]) => {
        const Page = component
        return <Route key={path} path={path} element={<Page />} />
      })}
    </Wrapped>
  )
}

const InnerRouter: FC = ({ children }) => (
  <Routes>
    <Route path={''} element={<DefaultLayout />}>
      {children}
    </Route>
  </Routes>
)
const Routing = withRoutes(InnerRouter)
export { Routing, withNavigation }
