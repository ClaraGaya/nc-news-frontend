import React from 'react';

function voteButtons (props) {
    return (
        <div className="block text-center">
            <a onClick={props.handleClick.bind(null, 'up')}><i className="fa fa-angle-up" /></a>
            <p>{props.votes}</p>
            <a onClick={props.handleClick.bind(null, 'down')}><i className="fa fa-angle-down" /></a>
        </div>
    );

} 

export default voteButtons;
