/* eslint-disable import/no-named-as-default */
import React  from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import ResumePage from './ResumePage';
import NotFoundPage from './NotFoundPage';
import { hot } from "react-hot-loader";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div className="container">
          <Switch>
            <Route exact path="/" component={ResumePage} />
            <Route component={NotFoundPage} />
          </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
