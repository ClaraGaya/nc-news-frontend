import React from 'React';

function voteButtons (props) {
    return (
        <div className="block">
            <a className="button is-primary" onClick={props.handleClick}>Up</a>
            {props.votes}
            <a className="button is-primary" onClick={props.handleClick}>Down</a>
        </div>
    );
} 

export default voteButtons;
