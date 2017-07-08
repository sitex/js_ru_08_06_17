import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Loader from './Loader'
import Comment from './Comment'
import { loadPageComments } from '../AC'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class CommentsPage extends Component {

    componentWillMount() {
        const {page, loadPageComments} = this.props
        loadPageComments(page)
    }

    componentWillReceiveProps({ comments, page, loadPageComments }) {
        if (!comments) loadPageComments(page)
    }

    render() {
        const {comments, page} = this.props
        if (!comments) return <Loader/>

        return (
            <div>
                <h2>Comments Page: {page}</h2>
                <ul>
                    {comments.map(id => <li key={id}><Comment id = {id}/></li>)}
                </ul>
                {this.getPageLinks()}
            </div>
        )
    }

    getPageLinks() {
        let pageLinks = []
        for (let i = 1; i <= this.props.pagesCount; i++) {
            pageLinks.push(<div key = {i}><NavLink to = {`/comments/${i}`}>Page {i}</NavLink></div>)
        }

        return pageLinks
    }
}

CommentsPage.propTypes = {
    page: PropTypes.string.isRequired,
    //from connect
    comments: PropTypes.arrayOf(PropTypes.string),
    pagesCount: PropTypes.number.isRequired,
    loadPageComments: PropTypes.func.isRequired
}


export default connect((state, { page }) => {
    const {pagesCount, commentIdsByPage} = state.comments
    return {
        pagesCount,
        comments: commentIdsByPage.get(page)
    }
}, { loadPageComments })(CommentsPage)