import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import PropTypes from "prop-types";

const AuthMenu = () => (
  <Nav>
    <Nav.Link as={Link} to="/login">
      Login
    </Nav.Link>
    <Nav.Link as={Link} to="/register">
      Register
    </Nav.Link>
  </Nav>
);

AuthMenu.propTypes = PropTypes.any.isRequired;

export default AuthMenu;
