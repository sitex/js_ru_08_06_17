import {SET_DATE_FILTER, SET_ID_FILTER} from '../constants'

const defaultFilterState = {
    ids: [],
    from: null,
    to: null
}

export default (filterState = defaultFilterState, action) => {
    const {type, payload} = action

    switch (type) {
        case SET_DATE_FILTER: return {
            ...filterState,
            from: payload.from,
            to: payload.to
        }
        case SET_ID_FILTER: return {
            ...filterState,
            ids: payload.ids
        }
    }

    return filterState
}