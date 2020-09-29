import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import authSelectors from "../../Redux/auth/auth-selectors";

const withAuthRedirect = (Component) => {
  function WithAuthRedirect({ isAuth, ...restProps }) {
    return isAuth ? <Redirect to="/" /> : <Component {...restProps} />;
  }

  const mapStateToProps = (state) => ({
    isAuth: authSelectors.isAuth(state),
  });

  return connect(mapStateToProps)(WithAuthRedirect);
};

export default withAuthRedirect;
