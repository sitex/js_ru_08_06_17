import React, {Component} from 'react'
import Comment from './Comment'

export default class CommentList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: true,
        }
    }

    render() {
        const {comments} = this.props
        const {showComments} = this.state
        if (!comments) {
            return (
                <div>(no comments)</div>
            )
        }

        return (
            <div>
                <button onClick = {this.toggleComments}>
                    {showComments ? 'hide comments' : 'show comments'}
                </button>
                {this.getComments()}
            </div>
        )
    }

    getComments() {
        if (!this.state.showComments) return null
        const {comments} = this.props
        const commentElements = comments.map(comment => <li key = {comment.id}><Comment comment = {comment}/></li>)
        return(
            <ul>
                {commentElements}
            </ul>
        )
    }

    toggleComments = (ev) => {
        ev.preventDefault()
        this.setState({
            showComments: !this.state.showComments
        })
    }
}