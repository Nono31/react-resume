/* eslint-disable import/no-named-as-default */
import React  from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import ResumePage from './ResumePage';
import NotFoundPage from './NotFoundPage';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div>
        <main role="main" className="container">
          <Switch>
            <Route exact path="/" component={ResumePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
