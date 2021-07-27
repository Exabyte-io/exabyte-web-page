import { FC, lazy, VFC } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../components/layout/DefaultLayout'
import { Menu } from 'antd'

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

function withNavigation<T>(Wrapped: FC<T>): FC<T> {
  return props => (
    <Wrapped {...props} defaultSelectedKeys={['/']}>
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


const Routing: VFC = () => (
  <Routes>
    <Route element={<DefaultLayout />}>
      {Object.entries(routeMap).map(([path, { component }]) => {
        const Page = component
        return <Route key={path} path={path} element={<Page />} />
      })}
    </Route>
  </Routes>
)
export { Routing, withNavigation }
