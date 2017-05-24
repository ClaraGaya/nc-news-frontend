import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import _ from 'underscore';
import CommentCard from './CommentCard';

import { getComments, voteComment, addComment, removeComment } from '../actions/actions.comments';


class CommentList extends Component {
  constructor(props){
    super(props);
    this.state = {
      mostVoted: false,
      lastOnes: true
    }
  }
  componentDidMount () {
    this.props.getComments(this.props.articleId);
  }
  render () {
    const sizeComments = Object.keys(this.props.comments.byId).length;
    return (
      <section className="bg">
        <div className="container">
          <h4>{sizeComments} Comments</h4>
          <p>sort by:</p>
          <select>
            <option>most voted</option>
            <option>by user</option>
          </select>
          {/*{selectByUser
            (
              <select>
                <option>most voted</option>
              </select>
            )
          }*/}
          
          {_.map(this.props.comments.byId, (comment, i) => {
            return <CommentCard {...comment} voteComment={this.props.voteComment} removeComment={this.props.removeComment} key={i}/>
          })}

          {/*
          {mostVoted && _.map(getTopComments(this.props.comments, 10), (comment, i) => {
              return <CommentCard {...comment} voteComment={this.props.voteComment} removeComment={this.props.removeComment} key={i}/>
            })}
          */}
        </div>
      </section>
    );
  }
}

CommentList.propTypes = {
  getComments: PropTypes.func,
  voteComment: PropTypes.func,
  removeComment: PropTypes.func,
  comments: PropTypes.object,
};

function mapDispatchToProps (dispatch) {
  return {
    getComments: (id) => {
      dispatch(getComments(id));
    },
    voteComment: (articleId, id, vote) => {
      dispatch(voteComment(articleId, id, vote));
    },
    removeComment: (commentId, articleId) => {
      dispatch(removeComment(commentId, articleId));
    }
  };
}

function mapStateToProps (state) {
  return {
    comments: state.comments,
    loading: state.comments.loading,
    error: state.comments.error
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CommentList);