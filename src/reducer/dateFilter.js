import {SET_DATE_FILTER} from '../constants'

const defaultDateFilter = {
    active: false,
    from: null,
    to: null
}

export default (dateFilterState = defaultDateFilter, action) => {
    const {type, payload} = action

    switch (type) {
        case SET_DATE_FILTER: return Object.assign({}, dateFilterState, {
            active: (!!payload.from && !!payload.to),
            from: payload.from,
            to: payload.to
        })
    }

    return dateFilterState
}