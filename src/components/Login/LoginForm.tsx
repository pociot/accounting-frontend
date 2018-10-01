import React, { Component, FormEvent } from 'react';
import { Form, Input, Icon, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form'
import { Link } from 'react-router-dom';

interface IOwnProps {
  onLogin: (token: string) => void;
}

type TProps = IOwnProps & FormComponentProps;

class LoginForm extends Component<TProps, {}> {
  public render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item>
          {
            getFieldDecorator('usernameOrEmail', {
              rules: [{
                required: true,
                message: 'Please enter your username'
              }]
            })(
              <Input
                prefix={<Icon type="user" />}
                size="large"
                name="username"
                placeholder="Username"
              />
            )
          }
        </Form.Item>
        <Form.Item>
          {
            getFieldDecorator('password', {
              rules: [{
                required: true,
                message: 'Please enter your password'
              }]
            })(
              <Input
                prefix={<Icon type="lock" />}
                size="large"
                name="password"
                type="password"
                placeholder="Password"
                />
            )
          }
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" size="large" className="login-form-button">Login</Button>
          Or <Link to="/signup">register now!</Link>
        </Form.Item>
      </Form>
    );
  }

  private handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    this.props.onLogin('asddsas');
  }
}

export default LoginForm;