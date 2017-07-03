import { CREATE_COMMENT } from '../constants'

export default store => next => action => {
	//через мидлвары будут проходить все экшины, суть в том, что делать их нужно максимально реюзабильными. Не завязывайся на один экшин
    if (action.type === CREATE_COMMENT) {
        action.payload.comment.id = String(Math.floor(Math.random() * 1000000))
    }

    next(action)
}
