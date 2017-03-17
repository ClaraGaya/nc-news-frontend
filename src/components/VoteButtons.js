import React from 'react';

function voteButtons (props) {
    return (
        <div className="block text-center">
            <a onClick={props.handleClick.bind(null, 'up')}><i className="fa fa-caret-up fa-2x" /></a>
            <p>{props.votes}</p>
            <a onClick={props.handleClick.bind(null, 'down')}><i className="fa fa-caret-down fa-2x" /></a>
        </div>
    );

} 

export default voteButtons;
