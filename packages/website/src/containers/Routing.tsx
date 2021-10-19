import { FC, lazy } from 'react'
import { NavLink, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../components/layout/DefaultLayout'
import { Menu } from 'antd'

const Home = lazy(() => import('./../pages/home'))
const CaseStudies = lazy(() => import('./../pages/case-studies'))
const About = lazy(() => import('./../pages/about'))
const OurVision = lazy(() => import('./../pages/our-vision'))
const News = lazy(() => import('./../pages/news'))
const ContactUs = lazy(() => import('./../pages/contact-us'))
const Pricing = lazy(() => import('./../pages/pricing'))

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
    component: News,
    name: 'News',
    placements: ['top'],
  },
  '/contact-us': {
    component: ContactUs,
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
  },
}

function withNavigation<T>(Wrapped: FC<T>, placement: NavigationPlacement): FC<T> {
  return props => (
    <Wrapped {...props} defaultSelectedKeys={['/']}>
      {Object.entries(routeMap).map(
        ([path, { name, placements = [] }]) =>
          placements?.find(it => it === placement) && (
            <Menu.Item key={path}>
              <NavLink className={({ isActive }) => (isActive ? 'selected-navlink' : '')} to={path}>
                {name}
              </NavLink>
            </Menu.Item>
          ),
      )}
    </Wrapped>
  )
}

const Routing: FC = () => (
  <Router>
    <Routes>
      <Route element={<DefaultLayout />}>
        {Object.entries(routeMap).map(([path, { component }]) => {
          const Page = component
          return <Route key={path} path={path} element={<Page />} />
        })}
      </Route>
    </Routes>
  </Router>
)
export { Routing, withNavigation }
