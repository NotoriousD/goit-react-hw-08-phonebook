import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { authSelectors } from "../Redux/auth";

const PrivateRoute = ({ component: Component, isAuth, ...restProps }) => (
  <Route
    {...restProps}
    render={(props) =>
      isAuth ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  isAuth: authSelectors.isAuth(state),
});

export default connect(mapStateToProps)(PrivateRoute);
