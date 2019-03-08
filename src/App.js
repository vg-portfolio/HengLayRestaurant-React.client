import React, { Component } from 'react';
import { connect } from "react-redux";
import { Switch, Route, withRouter } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Menu from './Containers/Menu';
import Admin from './Containers/Admin';
import Home from './Containers/Home';
import AuthorizedRoute from './Utilities/AuthorizedRoute';
import SignIn from './Containers/Forms/SignIn';

class App extends Component {

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
        />
        <AuthorizedRoute
          path="/admin"
          isSignedIn={this.props.auth}
          component={Admin}
        />
        <Route
          path="/menu"
          component={Menu}
        />
        <Route
          path="/signIn"
          component={SignIn}
        />
      </Switch>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default withRouter(connect(mapStateToProps, null)(App));
