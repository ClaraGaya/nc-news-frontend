import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getTopics } from '../actions/actions.topics';

class NavbarTopics extends Component {
    componentDidMount () {
        this.props.getTopics();
    }
    render () {
        return (
            <div className="navbar-topics">
                <nav className="block">
                    <Link to={`/`}>Top News</Link>
                    {this.props.topics.map((topic,i) => {
                        return (
                            <Link 
                            key={i}
                            to={`/articles/${topic.slug}`}>
                                {topic.title}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        );
    }
};

function mapDispatchToProps (dispatch) {
  return {
    getTopics: () => {
      dispatch(getTopics());
    }
  };
}

function mapStateToProps (state) {
  return {
    topics: state.topics.data
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavbarTopics);

