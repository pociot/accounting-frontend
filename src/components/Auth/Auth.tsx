import React, { Component } from 'react'

import { Layout, notification } from 'antd';
import Login from '../Login/Login';

interface IUser {
  token: string
}

interface IState {
  user: IUser | null
}

class Auth extends Component<{}, IState> {

  public state = {
    user: null
  };

  public render() {
    return (
      <Layout>
        {this.state.user ? this.props.children : <Login onLogin={this.handleLogin}/> }
      </Layout>
    )
  }

  private handleLogin = (token: string) => {
    notification.success({
      message: 'HCB',
      description: `Successfully logged in with token: ${token}`,
      onClose: () => this.setToken(token)
    });
  };

  private setToken = (token: string) => {
    this.setState({
      user: {
        token
      }
    })
  }
}

export default Auth