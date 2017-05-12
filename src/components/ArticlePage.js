import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArticle } from '../actions/actions.articles';

import CommentList from './CommentList';
import AddComment from './AddComment'


class ArticlePage extends Component {
  componentDidMount () {
    this.props.getArticle(this.props.params.article_id);
  }
  render () {
    if (this.props.loading) return <p>'Loading...'</p>;
    if (this.props.error) return <p>404</p>;
    if (this.props.article) {
      return (
        <div className="">
          <p>on {this.props.article.belongs_to}</p>
          <h3 className='title is-3'>{this.props.article.title}</h3>
          <p className=''>by <strong>{this.props.article.created_by}</strong></p>
          <p className='article-body'>{this.props.article.body}</p>
          <AddComment  articleId={this.props.article._id} />
          <CommentList articleId={this.props.article._id}/>
        </div>
      );
    }
  }     
}
function mapDispatchToProps (dispatch) {
  return {
    getArticle: (id) => {
      dispatch(getArticle(id));
    }
  };
}

function mapStateToProps (state) {
  return {
    article: state.article.article[0],
    loading: state.article.loading,
    error: state.article.error,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);