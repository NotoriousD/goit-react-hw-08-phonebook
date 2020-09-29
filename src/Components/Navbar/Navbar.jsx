import React from "react";
import { connect } from "react-redux";
import Navigation from "../Navigation";
import UserMenu from "../UserMenu";
import AuthMenu from "../AuthMenu";
import { authSelectors } from "../../Redux/auth";
import { Navbar } from "react-bootstrap";

import PropTypes from "prop-types";

const AppBar = ({ isAuth }) => (
  <Navbar collapseOnSelect bg="dark" variant="dark">
    <Navigation />
    {isAuth ? <UserMenu /> : <AuthMenu />}
  </Navbar>
);

const mapStateToProps = (state) => ({
  isAuth: authSelectors.isAuth(state),
});

AppBar.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(AppBar);
