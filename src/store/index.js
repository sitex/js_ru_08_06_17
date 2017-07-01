import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import id from '../middlewares/id'

const enhancer = applyMiddleware(logger, id)

const store = createStore(reducer, {}, enhancer)

//dev only
window.store = store

export default store