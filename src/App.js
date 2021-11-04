import './App.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Switch, Route, Link } from "react-router-dom";
import todoReducer from './reducers/todoReducer'

import TodoList from './components/TodoList'
import HelpPage from './components/HelpPage'
import DonePage from './components/DonePage';



import { Button, Layout, Menu } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import { Header, Footer, Content } from 'antd/lib/layout/layout';
import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons';
import logo from './image/pixlArt_Tree.png'
import 'antd/dist/antd.css';

function App() {
  const store = createStore(todoReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  return (
    <div className="App">
      <Provider store={store}>
        <Layout>
          <Sider style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}>
            <div>
              <img src={logo} alt="Tree" style={{ height: '200px', width: '200px' }} />
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                <Link to="/" className="App-link">Home</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}>
                <Link to="/done" className="App-link">Done</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<DesktopOutlined />}>
                <Link to="/help" className="App-link">Help</Link>
              </Menu.Item>
            </Menu>
            <div>
              <hr />
              <Button type="primary" href="#bottom">Goto Bottom</Button>
            </div>
          </Sider>
          <Layout className="site-layout" style={{ marginLeft: 200 }}>
            <Header className="site-layout-background" style={{ padding: 0, backgroundColor: 'cyan' }} id="top">
              <span style={{ fontSize: '30pt' }} title="What are you buying? What are you selling?">Ha Ha Welcome</span>
            </Header>
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
              <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                <Switch>
                  <Route exact path="/" component={TodoList} />
                  <Route exact path="/done" component={DonePage} />
                  <Route exact path="/help" component={HelpPage} />
                </Switch>
              </div>
            </Content>
            <Footer >
              Benny Design ©2077 Created by Benny Yuen
              <Button type="primary" href="#top" style={{ float: 'right' }}>Goto Top</Button>
            </Footer>
          </Layout>
        </Layout>
        <div id="bottom"></div>
      </Provider>
    </div>
  );
}

export default App;
