import React, { Component } from 'react';
import { Link } from 'react-router';

import NavbarTopics from './NavbarTopics';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
            <Link to ="/"><img className="logo" src={require('../assets/img/logo.png')} alt="Northcoders logo"/><strong className="title is-3">orthcoders news</strong></Link>
            <NavbarTopics />
        </header>
        <div className="main">
          {this.props.children}
        </div>
      </div>
    );
  }
}
