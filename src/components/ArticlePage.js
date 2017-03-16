import React from 'react';
import {connect} from 'react-redux';
import {fetchAllArticles} from '../actions/actions';

const ArticlePage = React.createClass({
  componentDidMount () {
    this.props.getArticles();
  },
  render () {
    return (
      <div className="container">
        <p>hello</p>
        <h3 className='title is-3'>{props.title}</h3>
        <p className=''>{props.body}</p>
      </div>
    );
  }
});

function mapDispatchToProps (dispatch) {
  return {
    getArticles: () => {
      dispatch(fetchAllArticles());
    }
  };
}

function mapStateToProps (state) {
  return {
    articles: state.articles.data
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);