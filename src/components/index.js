import Col from 'vant/lib/col';
import 'vant/lib/col/index.css';
import Row from 'vant/lib/row';
import 'vant/lib/row/index.css';
import { Layout, Header, Aside, Main, Footer } from './layout'

const components = {
  CRow: Row,
  CCol: Col,
  Layout,
  Header,
  Aside,
  Main,
  Footer
}
// ROW 和 Col做成全局组件
const install = (app) => {
  Object.keys(components).forEach(key => {
    if (key === 'CRow' || key === 'CCol') {
      app.component(key, components[key])
    } else {
      app.component(components[key].name, components[key])
    }
  })
}

const Mui = {
  install
}

export default Mui