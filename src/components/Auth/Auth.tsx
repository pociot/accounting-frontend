import React, { Component, ComponentType } from 'react';
import { compose } from 'redux';
import { notification } from 'antd';
import Login from '../Login/Login';
import { connectable, TConnectableProps } from './connectable.hoc';

interface IOwnProps {

}

type TProps = IOwnProps & TConnectableProps;

interface IState {

}

class Auth extends Component<TProps, IState> {

  public componentWillReceiveProps(nextProps: TProps) {
    if (nextProps.user) {
      notification.success({
        message: 'HCB',
        description: `Successfully logged in with token: ${nextProps.user.authDetails.accessToken}`,
      });
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
)(Auth) as ComponentType<IOwnProps>;
