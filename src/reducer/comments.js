import {ADD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS, LOAD_PAGE_COMMENTS} from '../constants'
import {arrToMap} from '../helpers'
import {OrderedMap, Record} from 'immutable'

const CommentRecord = Record({
    id: null,
    text: null,
    user: null
})

/**
 * commentIdsByPage example:
 * 1: [01,02,03,04,05],
 * 2: [06,07,08,09,10],
 * 3: [11,12,13,14,15],
 * 4: [16],
 */
const ReducerState = Record({
    entities: new OrderedMap({}),
    commentIdsByPage: new OrderedMap({}),
    pagesCount: 0
})

const defaultState = new ReducerState()

export default (commentsState = defaultState, action) => {
    const {type, payload, response, randomId} = action

    switch (type) {
        case ADD_COMMENT:
            return commentsState.setIn(['entities', randomId], new CommentRecord({...payload.comment, id: randomId}))

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return commentsState.update('entities', entities => entities.merge(arrToMap(response, CommentRecord)))

        case LOAD_PAGE_COMMENTS + SUCCESS:
            return commentsState
                .update('entities', entities => entities.merge(arrToMap(response.records, CommentRecord)))
                .set('pagesCount', Math.ceil(response.total / 5))
                .setIn(['commentIdsByPage', payload.page], response.records.map(c => c.id))
    }

    return commentsState
}