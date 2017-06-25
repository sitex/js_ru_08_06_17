import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import accordion from '../decorators/accordion'
import {connect} from 'react-redux'
import moment from 'moment'

class ArticleList extends Component {
    static propTypes = {
        //from connect
        articles: PropTypes.array.isRequired,
        //from accordion
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    }
    render() {
        const { articles, openItemId, toggleOpenItem } = this.props
        const articleElements = articles.map(article => <li key={article.id}>
            <Article
                article = {article}
                isOpen = {article.id === openItemId}
                toggleOpen = {toggleOpenItem(article.id)}
            />
        </li>)

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

const getVisibleArticles = (articles, filter) => {
    const isActiveIdFilter = (filter.ids.length > 0)
    const isActiveDateFilter = (!!filter.from && !!filter.to)
    const checkId = (id) => filter.ids.includes(id)
    const checkDate = (date) => moment(date).isBetween(filter.from, filter.to)

    if (isActiveIdFilter && isActiveDateFilter) {
        return articles.filter(article => checkId(article.id) && checkDate(article.date))

    } else if (isActiveIdFilter) {
        return articles.filter(article => checkId(article.id))

    } else if (isActiveDateFilter) {
        return articles.filter(article => checkDate(article.date))
    }

    return articles
}

export default connect(state => ({
    articles: getVisibleArticles(state.articles, state.filter)
}))(accordion(ArticleList))