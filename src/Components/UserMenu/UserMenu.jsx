import React from "react";
import { connect } from "react-redux";
import { authSelectors, authOperations } from "../../Redux/auth";
import Button from "@material-ui/core/Button";
import styles from "./usermenu.module.css";
import PropTypes from "prop-types";

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className={styles.container}>
    <span className={styles.name}>Welcome, {name}</span>
    <Button variant="contained" onClick={onLogout} color="primary">
      Logout
    </Button>
  </div>
);

const mapStateToProps = (state) => ({
  name: authSelectors.getUsername(state),
});

UserMenu.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
  UserMenu
);
