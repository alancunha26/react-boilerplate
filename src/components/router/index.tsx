/**
|--------------------------------------------------
| Dependencies
|--------------------------------------------------
*/
import React from 'react';
import { Route, Redirect } from 'react-router';

/**
|--------------------------------------------------
| Modules
|--------------------------------------------------
*/
import { RouterProps } from './types';
import { isLogged } from '../../api/auth';

export const PrivateRoute: React.FC<RouterProps> = (props) => {
  const { children, component: Component, componentProps } = props;

  if (!isLogged()) {
    return <Redirect to="/signin" />;
  }

  return (
    <Route
      render={(renderProps) =>
        children ||
        (Component && <Component {...renderProps} {...componentProps} />)
      }
    />
  );
};

export const RestrictedRoute: React.FC<RouterProps> = (props) => {
  const { children, component: Component, componentProps } = props;

  if (isLogged()) {
    return <Redirect to="/" />;
  }

  return (
    <Route
      render={(renderProps) =>
        children ||
        (Component && <Component {...renderProps} {...componentProps} />)
      }
    />
  );
};

export default {
  Private: PrivateRoute,
  Restricted: RestrictedRoute,
};
