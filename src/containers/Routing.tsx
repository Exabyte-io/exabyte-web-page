import { FC, lazy } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../components/layout/DefaultLayout'
import { Menu } from 'antd'

const Home = lazy(() => import('./../pages/home'))
const Pricing = lazy(() => import('./../pages/home'))
const CaseStudies = lazy(() => import('./../pages/case-studies'))
const Login = lazy(() => import('./../pages/login'))
const About = lazy(() => import('./../pages/about'))
const OurVision = lazy(() => import('./../pages/our-vision'))

type NavigationPlacement = 'top' | string
type RouteNavigationMap = {
  [key: string]: { component: FC; name: string; placements?: NavigationPlacement[] }
}

const routeMap: RouteNavigationMap = {
  '/': {
    component: Home,
    name: 'Home',
  },
  '/case-studies': {
    component: CaseStudies,
    name: 'Case Studies',
    placements: ['top'],
  },
  '/pricing': {
    component: Pricing,
    name: 'Pricing',
    placements: ['top'],
  },
  '/news': {
    component: Home,
    name: 'News',
    placements: ['top'],
  },
  '/contact-us': {
    component: Home,
    name: 'Contact Us',
    placements: ['top'],
  },
  '/about': {
    component: About,
    name: 'About',
    placements: ['top'],
  },
  '/our_vision': {
    component: OurVision,
    name: 'Our Vision',
    placements: ['top'],
  },
  '/sign-in': {
    component: Login,
    name: 'Sign In',
  },
}

function withNavigation<T>(Wrapped: FC<T>, placement: NavigationPlacement): FC<T> {
  return props => (
    <Wrapped {...props} defaultSelectedKeys={['/']}>
      {Object.entries(routeMap).map(
        ([path, { name, placements = [] }]) =>
          placements?.find(it => it === placement) && (
            <Menu.Item key={path}>
              <NavLink activeClassName='selected-navlink' to={path}>
                {name}
              </NavLink>
            </Menu.Item>
          ),
      )}
    </Wrapped>
  )
}

const Routing: FC = () => (
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