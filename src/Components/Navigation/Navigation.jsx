import React from "react";
import { connect } from "react-redux";
import { authSelectors } from "../../Redux/auth";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navigation = ({ isAuth }) => (
  <Nav className="mr-auto">
    <Nav.Link as={Link} to="/">
      Home
    </Nav.Link>

    {isAuth && (
      <Nav.Link as={Link} to="/contacts">
        Contact List
      </Nav.Link>
    )}
  </Nav>
);

Navigation.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuth: authSelectors.isAuth(state),
});

export default connect(mapStateToProps)(Navigation);
