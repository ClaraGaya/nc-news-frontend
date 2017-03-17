import React from 'react';
import {connect} from 'react-redux';
import {fetchAllArticles} from '../actions/actions';
import ArticleCard from './ArticleCard';
import NavbarTopics from './NavbarTopics';
import _ from 'underscore';

import { getTopArticles } from '../reducer/articles.reducer';


const ArticleList = React.createClass({
  componentDidMount () {
    this.props.getArticles();
  },
  render () {

    return (
      <div id='ArticleList' className="container">

        <NavbarTopics />

        {!this.props.params.topic && _.map(getTopArticles(this.props.articles, 10), (article, i) => {
          return <ArticleCard {...article} key={i}/>
        })}

        {this.props.params.topic && _.map(this.props.articles.byId, (article, i) => {
          if (article.belongs_to === this.props.params.topic) {
          return <ArticleCard {...article} key={i}/>
         }
        })}

        {/*{this.props.params.topic && _.filter(this.props.articles.byId, (article, i) => {  
          var topic =  this.props.params.topic; 
          return <ArticleCard  {article.belongs_to === this.props.params.topic, ...article} key={i}/>
        })}*/}

      </div>
    );
  }

});

function mapDispatchToProps (dispatch) {
  return {
    getArticles: () => {
      dispatch(fetchAllArticles());
    },
    
    
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