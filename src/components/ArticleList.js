import React from 'react';
import {connect} from 'react-redux';
import {fetchAllArticles} from '../actions/actions';
import ArticleCard from './ArticleCard';
import NavbarTopics from './NavbarTopics';

const ArticleList = React.createClass({
  componentDidMount () {
    this.props.getArticles();
  },
  render () {
    return (
      <div id='ArticleList' className="container">

        <NavbarTopics />

       {this.props.articles.map((article,i) => {
         if (!this.props.params.topic) {
          return <ArticleCard id={article._id} title={article.title} votes={article.votes} key={i}/>
         }
         if (article.belongs_to === this.props.params.topic) {
          return <ArticleCard id={article._id} title={article.title} votes={article.votes} key={i}/>
         }
       })}


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
export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);