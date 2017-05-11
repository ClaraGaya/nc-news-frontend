import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArticleCard from './ArticleCard';
import _ from 'underscore';

import { getArticles, voteArticle } from '../actions/actions.articles';
import { getTopArticles } from '../reducers/articles';


class ArticleList extends Component {
  componentDidMount () {
    this.props.getArticles();
  }
  render () {
    return (
      <div id='ArticleList' className="container">

        {!this.props.params.topic && _.map(getTopArticles(this.props.articles, 10), (article, i) => {
          return <ArticleCard {...article} voteArticle={this.props.voteArticle} key={i}/>
        })}

        {this.props.params.topic && _.map(this.props.articles.byId, (article, i) => {
          if (article.belongs_to === this.props.params.topic) {
          return <ArticleCard {...article} voteArticle={this.props.voteArticle} key={i}/>
         }
        })}

        {/*{this.props.params.topic && _.filter(this.props.articles.byId, (article, i) => {  
          var topic =  this.props.params.topic; 
          return <ArticleCard  {article.belongs_to === this.props.params.topic, ...article} key={i}/>
        })}*/}

      </div>
    );
  }
}

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