import React, {Component} from 'react'
import Article from './Article'
import toggleAccordion from '../decorators/toggleAccordion'
import PropTypes from 'prop-types'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired
            })
        ).isRequired,
        openArticleId: PropTypes.string,
        toggleOpenArticle: PropTypes.func.isRequired
    }

    render() {
        const {openArticleId, toggleOpenArticle} = this.props
        const articleElements = this.props.articles.map(article => <li key={article.id}>
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
}

export default toggleAccordion(ArticleList)