import {SET_ID_FILTER} from '../constants'

const defaultIdFilter = {
    active: false,
    ids: []
}

export default (idFilterState = defaultIdFilter, action) => {
    const {type, payload} = action

    switch (type) {
        case SET_ID_FILTER: return Object.assign({}, idFilterState, {
            active: (payload.ids.length > 0),
            ids: payload.ids
        })
    }

    return idFilterState
}