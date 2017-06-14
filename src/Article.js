import React, {Component} from 'react'
import CommentList from './CommentList'

export default class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: true
        }
    }

    render() {
        const {article} = this.props
        const {isOpen} = this.state
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick = {this.toggleOpen}>
                    {isOpen ? 'hide text' : 'show text'}
                </button>
                {this.getBody()}
                {this.getCommentList()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null
        const {article} = this.props
        return <section>{article.text}</section>
    }

    getCommentList() {
        const {comments} = this.props.article
        return <CommentList comments = {comments} />
    }

    toggleOpen = (ev) => {
        ev.preventDefault()
        console.log('---', ev.nativeEvent)
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

}
