import React from "react";
import {
  Switch,
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from "react-router-dom";

import { useAuth } from "../hooks/auth";

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return !!user === isPrivate ||
          (!!user === true && isPrivate === false) ? (
          <Component />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

export default Route;
