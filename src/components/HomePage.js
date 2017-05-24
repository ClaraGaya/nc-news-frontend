import React, { Component } from 'react';
import { connect } from 'react-redux';

import ArticleList from './ArticleList';
import UserList from './UserList';
import SelectUser from './SelectUser';


class HomePage extends Component {
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

export default HomePage;