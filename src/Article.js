import React, {Component} from 'react'
import CommentList from './CommentList'

export default class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: true,
            showComments: false
            //лучше внести этот стейт в CommentList, иначе компонент выходит очень прегруженным
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
        const {comments} = this.props.article

        const commentButton =
            <button onClick = {this.toggleComments}>
                {showComments ? 'hide comments' : 'show comments'}
            </button>

        return <div>
            <button onClick = {this.toggleOpen}>
                {isOpen ? 'hide text' : 'show text'}
            </button>
            {comments ? commentButton : ' (no comments)'}
        </div>
    }

    getBody() {
        if (!this.state.isOpen) return null
        const {article} = this.props
        return <section>{article.text}</section>
    }

    getComments() {
        if (!this.state.showComments) return null
        const {comments} = this.props.article
        //Я б эту проверку спрятал в CommentList
        if (comments) {
            return <CommentList comments = {comments} />
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
