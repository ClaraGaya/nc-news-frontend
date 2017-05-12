import React from 'react';
import { Link } from 'react-router';
import VoteButtons from './VoteButtons';


const CommentCard = function (props) {
  return (
    <article className='media'>
      <div className='media-left'>
        <VoteButtons votes={props.votes} handleClick={props.voteComment.bind(this, props.belongs_to, props._id)}/>
      </div>
      <div className='media-content'>
        <div className='content'>
          <span>by {props.created_by}</span>
          <p>{props.body}</p>      
        </div>
      </div>
      <div className='media-right'>
        <button onClick={props.removeComment.bind(this, props._id, props.belongs_to)}>remove comment</button>
      </div>
    </article>
  );
};

export default CommentCard;
