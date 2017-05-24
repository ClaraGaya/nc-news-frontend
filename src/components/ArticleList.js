import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import _ from 'underscore';

import { getArticles, voteArticle } from '../actions/actions.articles';
import { getTopArticles } from '../reducers/articles';
import ArticleCard from './ArticleCard';


class ArticleList extends Component {
  componentDidMount () {
    this.props.getArticles();
  }
  render () {
    console.log('from articleList',this.props.params);
    return (
          <div>
            {
              !this.props.params.topic && !this.props.params.username && _.map(getTopArticles(this.props.articles, 10), (article, i) => {
                return <ArticleCard {...article} voteArticle={this.props.voteArticle} key={i}/>
              })
            }
            
            {
              this.props.params.topic && this.props.params.username && _.map(getTopArticles(this.props.articles, 10), (article, i) => {
                if (article.created_by === this.props.params.username && article.belongs_to === this.props.params.topic) {
                  return <ArticleCard {...article} voteArticle={this.props.voteArticle} key={i}/>
                }              
              })
            }

            {
              this.props.params.username && !this.props.params.topic && _.map(this.props.articles.byId, (article, i) => {
                if (article.created_by === this.props.params.username) {
                  return <ArticleCard {...article} voteArticle={this.props.voteArticle} key={i}/>
                }
              })
            }
            
        
            
            {
              this.props.params.topic && !this.props.params.username && _.map(this.props.articles.byId, (article, i) => {
                if (article.belongs_to === this.props.params.topic) {
                  return <ArticleCard {...article} voteArticle={this.props.voteArticle} key={i}/>
                }
              })
            }
        </div>
    );
  }
}

ArticleList.propTypes = {
  getArticles: PropTypes.func,
  voteArticle: PropTypes.func,
  articles: PropTypes.object,
};

function mapDispatchToProps (dispatch) {
  return {
    getArticles: () => {
      dispatch(getArticles());
    },
    voteArticle: (id, vote) => {
      dispatch(voteArticle(id, vote));
    }
  };
}

function mapStateToProps (state) {
  return {
    articles: state.articles,
    loading: state.articles.loading,
    error: state.articles.error
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);