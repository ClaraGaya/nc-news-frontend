import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../actions/actions.comments';


class AddComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ''
        }
        this.updateState = this.updateState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateState(e) {
        this.setState({comment: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addComment(this.props.articleId, this.state.comment);
    }

    render () {
        console.log(this.props);
        return (
            <form id='AddComment' className="container" onSubmit={this.handleSubmit}>
                <textarea rows="6" value ={this.state.comment} onChange = {this.updateState}></textarea>
                <button type='submit'>Add Comment</button>
            </form>
        );
    }
}


function mapDispatchToProps (dispatch) {
  return {
    addComment: (id, comment) => {
      dispatch(addComment(id, comment));
    }
  };
}

function mapStateToProps (state) {
  return {
    comment: state.comment
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AddComment);