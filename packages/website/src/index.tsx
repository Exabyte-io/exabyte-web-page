import { render } from 'react-dom'
import App from './containers'
import reportWebVitals from './reportWebVitals'
import './styles/index.less'




const rootElement = window.document.getElementById('root')
render(<App />, rootElement)
reportWebVitals()
