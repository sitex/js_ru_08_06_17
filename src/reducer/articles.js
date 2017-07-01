import {DELETE_ARTICLE} from '../constants'
import {normalizedArticles} from '../fixtures'

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
    }

    return articleState
}