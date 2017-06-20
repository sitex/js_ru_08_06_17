import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommentForm extends Component {
    static propTypes = {

    };

    state = {
        user: '',
        text: '',
    }

    render() {
        return (
            <fieldset>
                <legend>Add Comment:</legend>
                <div>User: <input type = 'text' value = {this.state.user} onChange = {this.handleUserChange} /></div>
                <div>Text: <textarea value={this.state.text} onChange = {this.handleTextChange} /></div>
                <div><button>submit</button></div>
            </fieldset>
        )
    }

    handleUserChange = (ev) => {
        this.setState({
            user: ev.target.value
        })
    }

    handleTextChange = (ev) => {
        this.setState({
            text: ev.target.value
        })
    }

}

export default CommentForm