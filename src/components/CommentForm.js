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
        const errorStyle = {color: 'red', fontWeight: 'bold'};
        return (
            <fieldset>
                <legend>Add Comment:</legend>
                <div>
                    User: <input style = {(this.state.user.length < 5 || this.state.user.length > 15) ? errorStyle : {}}
                                 type = 'text'
                                 value = {this.state.user}
                                 onChange = {this.handleUserChange}/>
                </div>
                <div>
                    Text: <textarea style = {(this.state.text.length < 20 || this.state.text.length > 50) ? errorStyle : {}}
                                    value = {this.state.text}
                                    onChange = {this.handleTextChange} />
                </div>
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
