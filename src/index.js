import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './assets/css/bulma.css';
import './assets/css/font-awesome.css';
import './assets/css/front.css';

import App from './components/App';
import ArticleList from './components/ArticleList';
import ArticlePage from './components/ArticlePage';
import reducer from './reducers/reducer';

const store = createStore(reducer, applyMiddleware(thunk,createLogger()));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={ArticleList}/>
        <Route path='/topics/:topic' component={ArticleList} />
        <Route path='/articles/:article_id' component={ArticlePage} />
      </Route>
    </Router>
  </Provider>, 
  document.getElementById('app')
);
