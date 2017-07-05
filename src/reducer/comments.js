import {normalizedComments as defaulComments} from '../fixtures'
import {ADD_COMMENT} from '../constants'
import {arrToMap} from '../helpers'
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
    const {type, payload, randomId} = action

    switch (type) {
        case ADD_COMMENT:
            return commentsState.setIn(['entities', randomId], new CommentRecord({
                ...payload.comment,
                id: randomId
            }))
    }

    return commentsState
}