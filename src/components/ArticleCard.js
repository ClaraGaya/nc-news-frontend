import React from 'react';
import { Link } from 'react-router';
import VoteButtons from './VoteButtons';


const ArticleCard = function (props) {
  return (
    <article className='media'>
      <div className='media-left'>
        <VoteButtons votes={props.votes} handleClick={props.voteArticle.bind(this, props._id)}/>
      </div>
      <div className='media-content'>
        <div className='content'>
          <h3 className='is-4'>
            <Link to={`/article/${props._id}`}>{props.title}</Link>
          </h3>
          <span>by {props.created_by}</span>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
