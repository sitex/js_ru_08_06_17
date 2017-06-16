import React, {Component} from 'react'
import Article from './Article'
import toggleAccordion from '../decorators/toggleAccordion'

class ArticleList extends Component {
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