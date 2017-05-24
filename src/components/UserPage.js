import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../actions/actions.users';
import UserCard from './UserCard';
import ArticleList from './ArticleList'


class UserPage extends Component {
    componentDidMount () {
        this.props.getUser(this.props.params.username);
    }
    render () {
        if (this.props.user) {
            return (
                <div>
                    <section className="container">
                        <UserCard {...this.props.user}/>
                    </section>
                    <section className="container">
                        <h3>Articles by this user</h3>
                        <ArticleList params={this.props.params} />
                    </section>
                </div>
            );
        }
        if (this.props.error) return <div className="container"><p>404</p></div>;
        if (this.props.loading) return <div className="container"><p>'Loading...'</p></div>;
    }     
}

UserPage.propTypes = {
  getUser: PropTypes.func,
  user: PropTypes.object,
};

function mapDispatchToProps (dispatch) {
    return {
        getUser: (username) => {
            dispatch(getUser(username));
        }
    };
}

function mapStateToProps (state) {
    return {
        user: state.user.user[0],
        loading: state.article.loading,
        error: state.article.error,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);