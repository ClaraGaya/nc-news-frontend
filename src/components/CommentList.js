import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import CommentCard from './CommentCard';

import { getComments, voteComment, addComment, removeComment } from '../actions/actions.comments';


class CommentList extends Component {
  componentDidMount () {
    this.props.getComments(this.props.articleId);
  }
  render () {
    return (
      <div id='CommentList' className="container">

        {_.map(this.props.comments.byId, (comment, i) => {
          return <CommentCard {...comment} voteComment={this.props.voteComment} key={i}/>
        })}

      </div>
    );
  }
}


function mapDispatchToProps (dispatch) {
  return {
    getComments: (id) => {
      dispatch(getComments(id));
    },
    voteComment: (articleId, id, vote) => {
      dispatch(voteComment(articleId, id, vote));
    },
//     addComment: (id) => {
//       dispatch(addComment(id));
//     },
//     removeComment: (id) => {
//       dispatch(removeComment(id));
//     }
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