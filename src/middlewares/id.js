import { CREATE_COMMENT } from '../constants'

export default store => next => action => {
    if (action.type === CREATE_COMMENT) {
        action.payload.comment.id = String(Math.floor(Math.random() * 1000000))
    }

    next(action)
}