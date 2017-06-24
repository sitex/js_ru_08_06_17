import {DELETE_ARTICLE, INCREMENT, SET_ID_FILTER, SET_DATE_FILTER} from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function setIdFilter(ids) {
    return {
        type: SET_ID_FILTER,
        payload: { ids }
    }
}

export function setDateFilter(day) {
    return {
        type: SET_DATE_FILTER,
        payload: {
            'from': day.from,
            'to': day.to
        }
    }
}