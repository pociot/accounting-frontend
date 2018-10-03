import React, { Component, ComponentType } from 'react';
import { Layout } from 'antd';
import { Route,
  withRouter,
  Switch
} from 'react-router-dom';
import { compose } from 'redux';

import './App.css';
import AppHeader from '../AppHeader/AppHeader';
import LoginView from '../views/LoginView/LoginView';
import MainView from '../views/MainView/MainView';

class App extends Component<any, any> {
  public render() {
    return (
      <Layout className="app-container">
        <AppHeader />
        <Layout.Content className="app-content">
          <div className="container">
            <Switch>
              <Route exact={true} path="/" component={ MainView }/>
              <Route path="/login" component={ LoginView }/>
            </Switch>
          </div>
        </Layout.Content>
      </Layout>
    );
  }
}

export default compose(
  withRouter,
)(App) as ComponentType;
