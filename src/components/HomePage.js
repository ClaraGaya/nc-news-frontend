import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ArticleList from './ArticleList';
import UserList from './UserList';
import SelectUser from './SelectUser';


export default class HomePage extends Component {
  render () {
    return (
      <div className="container">
        <div className="columns">
          <main className="column">
            <nav className="filter-articles">
              <SelectUser params={this.props.params}/>
            </nav>
            <ArticleList params={this.props.params}/>
          </main>
          {/*<aside className="bg column is-one-quarter">
            <h3>Users</h3>
            <UserList />
          </aside>*/}
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  SelectUser: PropTypes.element,
  ArticleList: PropTypes.element,
};