import React, {Component} from 'react';
import { Link } from 'react-router';


class UserCard extends Component {
    render() {
        return (
            <article className='media'>
            <div className='media-left'>
                <figure className="image is-32x32">
                    <img className="avatar" src={this.props.avatar_url} />
                </figure>
            </div>
            <div className='media-content'>
                <Link to={`/users/${this.props.username}`}><h5>{this.props.username}</h5></Link>
                <p className="subtitle mutted">{this.props.name}</p>
            </div>
        </article>
        )
    }
};

export default UserCard;
