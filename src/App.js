import React, { Suspense, Component } from "react";
import { connect } from "react-redux";
import { Switch } from "react-router-dom";
import routes from "./routes";
import Navbar from "./Components/Navbar";
import Loader from "./Components/Loader";
import PrivateRoute from "./Common/PrivateRoute";
import PublicRoute from "./Common/PublicRoute";
import authOperations from "./Redux/auth/auth-operations";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <>
        <Navbar></Navbar>
        <Suspense fallback={<Loader />}>
          <Switch>
            {routes.map((route) =>
              route.private ? (
                <PrivateRoute key={route.label} {...route} />
              ) : (
                <PublicRoute key={route.label} {...route} />
              )
            )}
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = {
  getCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
