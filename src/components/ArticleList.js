import React from 'react'
import Article from './Article'
import toggleAccordion from '../decorators/toggleAccordion'
import PropTypes from 'prop-types'

function ArticleList ({articles = [], openArticleId, toggleOpenArticle}) {
    const articleElements = articles.map(article => <li key={article.id}>
        <Article
            article = {article}
            isOpen = {article.id === openArticleId}
            toggleOpen = {toggleOpenArticle(article.id)}
        />
    </li>)

    return (
        <ul>
            {articleElements}
        </ul>
    )
}

ArticleList.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired
        })
    ).isRequired,
    openArticleId: PropTypes.string,
    toggleOpenArticle: PropTypes.func.isRequired
}

export default toggleAccordion(ArticleList)