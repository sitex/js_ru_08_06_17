import React, {Component} from 'react'
import CommentList from './CommentList'

export default class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: true,
            showComments: false
        }
    }

    render() {
        const {article} = this.props
        return (
            <div>
                <h3>{article.title}</h3>
                {this.getButtons()}
                {this.getBody()}
                {this.getComments()}
            </div>
        )
    }

    getButtons() {
        const {isOpen} = this.state
        const {showComments} = this.state
        const {article} = this.props

        const commentButton =
            <button onClick = {this.toggleComments}>
                {showComments ? 'hide comments' : 'show comments'}
            </button>

        return <div>
            <button onClick = {this.toggleOpen}>
                {isOpen ? 'hide text' : 'show text'}
            </button>
            {article.comments ? commentButton : ''}
        </div>
    }

    getBody() {
        if (!this.state.isOpen) return null
        const {article} = this.props
        return <section>{article.text}</section>
    }

    getComments() {
        if (!this.state.showComments) return null
        const {article} = this.props
        if (article.comments) {
            return <CommentList comments = {article.comments} />
        }
    }

    toggleOpen = (ev) => {
        ev.preventDefault()
        console.log('---', ev.nativeEvent)
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    toggleComments = (ev) => {
        ev.preventDefault()
        this.setState({
            showComments: !this.state.showComments
        })
    }
}