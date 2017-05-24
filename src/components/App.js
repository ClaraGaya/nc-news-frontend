import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import NavbarTopics from './NavbarTopics';


export default class App extends Component {
  render() {
    return (
      <div>
        <header className="container">
            <Link to ="/"><img className="logo" src={require('../assets/img/logo.png')} alt="Northcoders logo"/><strong className="title is-3">orthcoders news</strong></Link>
            <NavbarTopics />
        </header>
        {this.props.children}
      </div>
    );
  }
}


App.propTypes = {
  children: PropTypes.element.isRequired,
};