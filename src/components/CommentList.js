import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import CommentForm from './CommentForm'
import toggleOpen from '../decorators/toggleOpen'
import {connect} from 'react-redux'
import {loadArticleComments} from '../AC'
import Loader from './Loader'

class CommentList extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            loading: PropTypes.bool,
            loadedComments: PropTypes.bool,
            loadingComments: PropTypes.bool
        }).isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func,
        //from connect
        loadArticleComments: PropTypes.func
    }

    componentWillReceiveProps({article, loadArticleComments, isOpen}){
        if (isOpen && !article.loadedComments && !article.loadingComments) loadArticleComments(article.id)
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props
        const text = isOpen ? 'hide comments' : 'show comments'

        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {this.getBody({article, isOpen})}
            </div>
        )
    }

    getBody({article: {loadedComments, loadingComments, comments = [], id}, isOpen}) {
        if (!isOpen) return null
        if (loadingComments) return <Loader/>
        if (!loadedComments) return null

        if (!comments.length) return (
            <div>
                <p>No comments yet</p>
                <CommentForm articleId = {id} />
            </div>
        )

        return (
            <div>
                <ul>
                    {comments.map(id => <li key={id}><Comment id = {id}/></li>)}
                </ul>
                <CommentForm articleId = {id} />
            </div>
        )
    }
}

export default connect(null, { loadArticleComments })(toggleOpen(CommentList))