import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {fetchAllTopics} from '../actions/actions';

const NavbarTopics = React.createClass({

    componentDidMount () {
        this.props.getTopics();
    },
    render () {
        return (
            <div className="navbar-topics">
                <nav className="block">
                    {this.props.topics.map((topic,i) => {
                        return (
                            <Link 
                            key={i}
                            className="button" 
                            to={`/topics/${topic.slug}`}>
                                {topic.title}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        );
    }
});


function mapDispatchToProps (dispatch) {
  return {
    getTopics: () => {
      dispatch(fetchAllTopics());
    }
  };
}

function mapStateToProps (state) {
  return {
    topics: state.topics.data
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavbarTopics);

