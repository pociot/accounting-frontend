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
              {/*<Route path="/signup" component={Signup}></Route>
              <Route path="/users/:username"
                     render={(props) => <Profile isAuthenticated={this.state.isAuthenticated} currentUser={this.state.currentUser} {...props}  />}>
              </Route>
              <PrivateRoute authenticated={this.state.isAuthenticated} path="/poll/new" component={NewPoll} handleLogout={this.handleLogout}></PrivateRoute>*/}
              {/*<Route component={NotFound}></Route>*/}
            </Switch>
          </div>
        </Layout.Content>
      </Layout>
    )
  }
}

export default compose(
  withRouter
)(App) as ComponentType;
