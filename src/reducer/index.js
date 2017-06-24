import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import idFilter from './idFilter'
import dateFilter from './dateFilter'

export default combineReducers({
    count: counterReducer,
    articles,
    idFilter,
    dateFilter
})