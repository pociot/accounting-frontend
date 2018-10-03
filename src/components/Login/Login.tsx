import React, { Component } from 'react';
import { Form } from 'antd';
import LoginForm from './LoginForm';
import './Login.css';

interface IOwnProps {

}

type TProps = IOwnProps;

class Login extends Component<TProps, {}> {
  public render() {
    // tslint:disable-next-line
    const AntWrappedLoginForm = Form.create()(LoginForm);
    return (
      <div className="login-container">
        <h1 className="page-title">Login</h1>
        <div className="login-content">
          <AntWrappedLoginForm />
        </div>
      </div>
    );
  }
}

export default Login;
