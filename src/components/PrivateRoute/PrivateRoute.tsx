import React, { Component, ComponentType, ComponentClass } from 'react';
import { connectable, TConnectableProps } from './connectable.hoc';
import { compose } from 'redux';
import { Route, RouteProps, Redirect } from 'react-router';

interface IOwnProps {
  component: ComponentClass;
}

type TProps = IOwnProps & TConnectableProps & RouteProps;

class PrivateRoute extends Component<TProps, {}> {
  render() {
    const { component, user, ...rest } = this.props;
    const redirect = () => (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: this.props.location },
        }}
      />
    );
    return (
      <Route
        {...rest}
        component={
          user ? component : redirect
        }
      />
    );
  }
}

export default compose(
  connectable,
)(PrivateRoute) as ComponentType<IOwnProps & RouteProps>;
