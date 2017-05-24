import React, { Component } from 'react';

import { Link } from 'react-router';
import VoteButtons from './VoteButtons';

export default class CommentCard extends Component {
  render() {
    const date = new Date (this.props.created_at);
    return (
      <article className='media'>
        <div className='media-left'>
          <VoteButtons votes={this.props.votes} handleClick={this.props.voteComment.bind(this, this.props.belongs_to, this.props._id)}/>
        </div>
        <div className='media-content'>
          <div className='content'>
            <span className="small">by <strong>{this.props.created_by}</strong></span> 
            <span className="mutted"> {date.toString()}</span>
            <p>{this.props.body}</p>      
          </div>
        </div>
        <div className='media-right'>
          <button onClick={this.props.removeComment.bind(this, this.props._id, this.props.belongs_to)}>remove comment</button>
        </div>
      </article>
    )
  }
}


