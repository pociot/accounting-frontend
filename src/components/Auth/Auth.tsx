import React, { Component, ComponentType } from 'react';
import { withRouter, RouterProps } from 'react-router';
import { compose } from 'redux';
import { notification } from 'antd';
import Login from '../Login/Login';
import { connectable, TConnectableProps } from './connectable.hoc';

interface IOwnProps {

}

type TProps = IOwnProps & TConnectableProps & RouterProps;

interface IState {

}

class Auth extends Component<TProps, IState> {

  public componentWillReceiveProps(nextProps: TProps) {
    if (nextProps.user) {
      notification.success({
        message: 'HCB',
        description: `Successfully logged in with token: ${nextProps.user.authDetails.accessToken}`,
      });
      this.props.history.push('/');
    } else if (nextProps.error) {
      notification.error({
        message: 'HCB',
        description: nextProps.error,
      });
    }
  }

  public render() {
    return <Login />;
  }
}

export default compose(
  connectable,
  withRouter,
)(Auth) as ComponentType<IOwnProps>;
