import React from "react";
import _ from 'lodash';
import { Route, Redirect } from "react-router-dom";

const AuthorizedRoute = ({
  component: Component,
  isSignedIn,
  ...rest
}) => {
  console.log("IS SIGNED?", isSignedIn);
  return (
    <Route
      {...rest}
      render={props =>
        !_.isEmpty(isSignedIn) ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: "/signIn",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default AuthorizedRoute;
