import React, { Component } from 'react';
import { Form } from 'antd';
import LoginForm from './LoginForm';
import './Login.css';

interface IOwnProps {
  onLogin: (token: string) => void;
}

type TProps = IOwnProps;

class Login extends Component<TProps, {}> {
  public render() {
    const AntWrappedLoginForm = Form.create()(LoginForm);
    return (
      <div className="login-container">
        <h1 className="page-title">Login</h1>
        <div className="login-content">
          <AntWrappedLoginForm onLogin={this.props.onLogin}/>
        </div>
      </div>
    );
  }
}

export default Login;