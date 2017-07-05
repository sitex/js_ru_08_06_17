import {normalizedComments as defaulComments} from '../fixtures'
import {arrToMap} from '../helpers'
import {ADD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS} from '../constants'
import {OrderedMap, Record} from 'immutable'

const CommentRecord = Record({
    id: undefined,
    user: undefined,
    text: undefined,
})

const ReducerState = Record({
    entities: new OrderedMap({})
})

const defaultState = new ReducerState()

export default (commentsState = defaultState, action) => {
    const {type, payload, randomId, response} = action

    switch (type) {
        case ADD_COMMENT:
            return commentsState.setIn(['entities', randomId], new CommentRecord({
                ...payload.comment,
                id: randomId
            }))

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return commentsState.mergeIn(['entities'], arrToMap(response, CommentRecord))

    }

    return commentsState
}