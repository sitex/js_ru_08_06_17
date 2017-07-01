import {normalizedArticles} from '../fixtures'
import {DELETE_ARTICLE, CREATE_COMMENT} from '../constants'

const articlesMap = normalizedArticles.reduce((acc, article) => {
    if (!article.comments) article.comments = []
    acc[article.id] = article
    return acc
}, {})

export default (articleState = articlesMap, action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE: {
            let newState = {
                ...articleState
            }
            delete newState[payload.id]
            return newState
        }

        case CREATE_COMMENT: {
            const article = articleState[payload.articleId]
            return {
                ...articleState,
                [payload.articleId]: {
                    ...article,
                    comments: article.comments.concat(payload.comment.id)
                }
            }
        }
    }

    return articleState
}