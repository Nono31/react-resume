/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './store/configureStore';
import {loadResume} from './actions/resumeActions';
import Root from './components/Root';
import 'bootstrap';
import ReactGA from 'react-ga';

import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import 'font-awesome/css/font-awesome.min.css';
require('./favicon.ico'); // Tell webpack to load favicon.ico

//initialize google analytics
ReactGA.initialize('UA-00000000-1');
ReactGA.pageview(window.location.pathname);

const store = configureStore();
store.dispatch(loadResume());
render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
