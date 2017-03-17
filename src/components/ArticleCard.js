import React from 'react';
import {Link} from 'react-router';
import VoteButtons from './VoteButtons';


const ArticleCard = function (props) {
  return (
    <div className='box'>
      <article className='media'>
        <div className='media-left'>
          <VoteButtons votes={props.votes} handleClick={props.voteArticle}/>
        </div>
        <div className='media-content'>
          <div className='content'>
            <h3 className='title is-3'>
              <Link to={`/articles/${props._id}`}>{props.title}</Link>
            </h3>
          </div>
        </div>
      </article>
    </div>
  )
}

export default ArticleCard;
