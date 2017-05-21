import React from 'react';
import { render } from 'react-dom';
import MainComponent  from './containers/Main';
import HomeComponent  from './containers/Home';
import SearchIndex from './containers/SearchIndex';
import { Provider } from 'react-redux';
import store from './redux-stuff/store';
import { Router, Route, Link, browserHistory } from 'react-router';

render((
  <Provider store={store}>
  <Router history={browserHistory}>
    <Route component={MainComponent}>
       <Route path="/" component={SearchIndex} />
       <Route path="/search-result-page" component={HomeComponent} />
    </Route>
  </Router>
  </Provider>
), document.querySelector('.root'))
