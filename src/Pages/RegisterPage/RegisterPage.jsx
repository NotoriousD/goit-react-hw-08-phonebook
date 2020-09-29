import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import withAuthRedirect from "../../Common/hoc/withAuthRedirect";
import { authOperations } from "../../Redux/auth";
import { Form } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RegisterPage.scss";

class RegisterPage extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onRegister({ ...this.state });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div className="registerPageWrapper">
        <div className="registerPageContainer">
          <Form onSubmit={this.handleSubmit}>
            <h2>Register</h2>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                name="name"
                value={name}
                onChange={this.handleChange}
                placeholder="Enter Name"
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                value={email}
                onChange={this.handleChange}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                value={password}
                onChange={this.handleChange}
                type="password"
                placeholder="Enter Password"
              />
            </Form.Group>
            <Button type="submit" variant="contained" color="primary">
              Sign Up
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onRegister: (credentials) =>
    dispatch(authOperations.registerUser(credentials)),
});

export default compose(
  withAuthRedirect,
  connect(null, mapDispatchToProps)
)(RegisterPage);
