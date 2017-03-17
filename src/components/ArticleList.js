import React from 'react';
import {connect} from 'react-redux';
import {fetchAllArticles} from '../actions/actions';
import ArticleCard from './ArticleCard';
import NavbarTopics from './NavbarTopics';

import {getTopArticles} from '../reducer/articles.reducer';


const ArticleList = React.createClass({
  componentDidMount () {
    this.props.getArticles();
  },
  render () {
    // if (this.props.loading) return <p>'Loading...'</p>;
    // if (this.props.error) return <p>404</p>;

    return (
      <div id='ArticleList' className="container">

        <NavbarTopics />

      {/*<p class="control">
        <span class="select">
          <select>
            <option>sort by votes</option>
            <option>sort by </option>
          </select>
        </span>
      </p>*/}


       {this.props.articles.map((article,i) => {

          

         if (!this.props.params.topic) {
          return <ArticleCard {...article} key={i}/>
         }
         if (article.belongs_to === this.props.params.topic) {
          return <ArticleCard {...article} key={i}/>
         }
       })}


      </div>
    );
  }
});


// The habiity to dispatch actions
function mapDispatchToProps (dispatch) {
  return {
    getArticles: () => {
      dispatch(fetchAllArticles());
    }
  };
}

// The habiity to fetch data
function mapStateToProps (state) {
  return {
    articles: state.articles.data,
    loading: state.articles.loading,
    error: state.articles.error
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);