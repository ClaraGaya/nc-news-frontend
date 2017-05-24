import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import _ from 'underscore';

import { getUsers } from '../actions/actions.users';


class SelectUser extends Component {
  constructor(props){
    super(props);
    this.state = {
      isVisible: false
    }
    this.toogleActive = this.toogleActive.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount () {
    this.props.getUsers();
    document.addEventListener('click', this.handleClickOutside.bind(this), true);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside.bind(this), true);
  }
  toogleActive (e) {
    e.preventDefault();
    this.setState({
      isVisible: !this.state.isVisible
    });
  }
  handleClickOutside (e) {
   
    if(!ReactDOM.findDOMNode(this).contains(e.target)) {
      this.setState({
          isVisible : false
      });
    }  
  }

  render () {
    const topic = (this.props.params.topic === undefined) ? 'user' : this.props.params.topic;

    return (
        <ul className={this.state.isVisible ? "dropdown active" : "dropdown"}>
          <li>
            <a href="#" onClick={this.toogleActive}>Sort by user</a>
            <ul>
                {_.map(this.props.users.byId, (user, i) => {
                    return (
                      <li key={i}>
                        <Link className="dropdown-link" to={`/articles/${topic}/${user.username}`}>
                            {user.username}
                        </Link> 
                      </li>
                    )
                })}
              </ul>
            </li>
        </ul>
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
export default connect(mapStateToProps, mapDispatchToProps)(SelectUser);