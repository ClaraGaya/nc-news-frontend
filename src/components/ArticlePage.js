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
    if (this.props.loading) return <div className="container"><p>'Loading...'</p></div>;
    if (this.props.error) return <div className="container"><p>404</p></div>;
    if (this.props.article) {
      return (
        <div>
          <section className="container">
            <p className="mutted">on {this.props.article.belongs_to}</p>
            <h3 className='title is-3'>{this.props.article.title}</h3>
            <p className="small" className=''>by <strong>{this.props.article.created_by}</strong></p>
            <p className='article-body'>{this.props.article.body}</p>
          </section>
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