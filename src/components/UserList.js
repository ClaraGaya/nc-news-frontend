import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserCard from './UserCard';
import _ from 'underscore';

import { getUsers } from '../actions/actions.users';


class UserList extends Component {
  componentDidMount () {
    this.props.getUsers();
  }
  render () {
    return (
      <div id='UserList' className="container">
        {_.map(this.props.users.byId, (user, i) => {
          return <UserCard {...user} key={i}/>
        })}
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getUsers: () => {
      dispatch(getUsers());
    },
  };
}

function mapStateToProps (state) {
  return {
    users: state.users,
    loading: state.articles.loading,
    error: state.articles.error
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(UserList);