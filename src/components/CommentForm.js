import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommentForm extends Component {
    static propTypes = {

    };

    state = {
        user: '',
        user_error: false,
        text: '',
        text_error: false,
    }

    render() {
        const errorStyle = {color: 'red', fontWeight: 'bold'};
        return (
            <fieldset>
                <legend>Add Comment:</legend>
                <div>
                    User: <input style = {this.state.user_error ? errorStyle : {}}
                                 type = 'text'
                                 value = {this.state.user}
                                 onChange = {this.handleUserChange}/>
                </div>
                <div>
                    Text: <textarea style = {this.state.text_error ? errorStyle : {}}
                                    value = {this.state.text}
                                    onChange = {this.handleTextChange} />
                </div>
                <div><button>submit</button></div>
            </fieldset>
        )
    }

    handleUserChange = (ev) => {
        this.setState({
            user_error: (ev.target.value.length < 5 || ev.target.value.length > 15),
            user: ev.target.value,
        })
    }

    handleTextChange = (ev) => {
        this.setState({
            text_error: (ev.target.value.length < 20 || ev.target.value.length > 50),
            text: ev.target.value,
        })
    }

}

export default CommentForm