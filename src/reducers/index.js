import { combineReducers } from 'redux'
// import { combineReducers } from 'redux-immutablejs';
import currentUser from './user'
import location from './location'

export default combineReducers({
	currentUser,
	location
})